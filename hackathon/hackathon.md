---
title: Hackathon
redirect_from: /hackathon
---

# Final Hackathon

[Steganography](https://en.wikipedia.org/wiki/Steganography) [Stéganographie](https://fr.wikipedia.org/wiki/St%C3%A9ganographie)

> the practice of concealing a file, message, image, or video within another file, message, image, or video - wikipedia

You will need these 2 packages:
* [lsb](https://github.com/hughsk/lsb)
* [jimp](https://github.com/oliver-moran/jimp/tree/master/packages/jimp)

There are 5 images with data encoded in them.

The data has the following format:
```javascript
{
  index: 0,
  message: 'a secret message...',
}
```

Using these images:

* [a.png](images/a.png)
* [b.png](images/b.png)
* [c.png](images/c.png)
* [d.png](images/d.png)
* [e.png](images/e.png)

Use the following `decode()` function to decode the embedded data.

```javascript
const jimp = require('jimp');
const lsb = require('lsb');

async function decode(inputImage) {
  const image = await jimp.read(inputImage);
  const json = lsb.decode(image.bitmap.data, rgb);
  return JSON.parse(json);
}

function rgb(n) {
  return n + Math.floor(n / 3);
}

/////////////////////////////////////////
// EXAMPLE - This can be deleted
//
async function example() {
  const secret = await decode('./a.png');
  console.log(secret);
}
 
example()
//////////////////////////////////////////
```

Create a web server that **dynamically**:

1. orders the images based on the value of the `index` field encoded in the image. **All 5 images should be displayed in the correct order.**
1. displays the secret message by concatenating the message segments in the order determined from their `index`. **The entire message should be displayed.**
1. Serve a webpage that includes steps 1 and 2. You can use express (optionally with pug) or react
1. **Bonus** Deploy your site to the cloud using firebase or next.js

To get started (with express):
```bash
mkdir hackathon
cd hackathon
npm init
npm install --save express pug lsb jimp
```

## React Only ⚠️

If you are using react, then use pngjs

```bash
npm install --save pngjs
```

Then add a file `src/decodeImage.js`:
```js
import { PNG } from "pngjs/browser";
import lsb from "lsb";

export default async function decode(imageBuffer) {
  const buffer = await imageBuffer;
  const png = await new Promise((resolve, reject) =>
    new PNG().parse(buffer, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    })
  );

  const json = lsb.decode(png.data, (n) => n + Math.floor(n / 3));
  return JSON.parse(json);
}
```

Now, from your `App.jsx`, you can fetch the image files and decode them:

```jsx
import decodeImage from './decodeImage';

// ...

export function App() {
  // ...

  useEffect(() => {
    async function getImage(){
      const fetchedImage = await fetch('./a.png');
      const decodedImage = await decodeImage(fetchedImage.arrayBuffer());
      console.log('decoded', decodedImage);
    }
    
    getImage();
  }, []);

  // ...
}
```