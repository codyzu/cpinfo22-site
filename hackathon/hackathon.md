---
title: Hackathon
redirect_from: /hackathon
---

# Final Hackathon

<!-- TODO: CRA dynamic imports -->

[Steganography](https://en.wikipedia.org/wiki/Steganography) [Stéganographie](https://fr.wikipedia.org/wiki/St%C3%A9ganographie)

> the practice of concealing a file, message, image, or video within another file, message, image, or video - wikipedia

You will need these 2 packages:
* [lsb](https://github.com/hughsk/lsb)
* [pngjs](https://github.com/pngjs/pngjs)

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
const fs = require('fs');
const PNG = require('pngjs').PNG;
const lsb = require('lsb');

async function decode(inputImage) {
  const png = await new Promise((resolve, reject) =>
    new PNG().parse(fs.readFileSync(inputImage), (error, data) =>
      error ? reject(error) : resolve(data)))

  const json = lsb.decode(png.data, (n) => n + Math.floor(n / 3));
  return JSON.parse(json);
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
npm install --save express pug lsb pngjs
```

## ⚠️ React Only ⚠️

**The rest of this document is for folks doing the Hackathon with React!**


### Decode with pngjs

If you are using react, then use [pngjs](https://www.npmjs.com/package/pngjs)

```bash
npm install --save pngjs lsb
```

Then add a file `src/decodeImage.js`:
```js
import { PNG } from "pngjs/browser";
import lsb from "lsb";

export default async function decode(imageBuffer) {
  const buffer = await imageBuffer;
  const png = await new Promise((resolve, reject) =>
    new PNG().parse(buffer, (err, data) => 
      err ? reject(err) : resolve(data)
    )
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

### Dynamic imports with vitejs

To make the imports dynamic (at build time), using [vitejs glob imports](https://vitejs.dev/guide/features.html#glob-import):
1. Place all of the images in the `src`
1. Use the following glob import to get the list of images (ℹ️ the glob is resolved at build time of your site):
   ```js
   const images = import.meta.glob('./*.png', { as: 'url', eager: true });
   const imageUrls = Object.values(images);
   console.log('image urls', imageUrls);
   ```
   - `as: 'url'` ensures that we always get the url to the image (otherwise it will be treated as a module)
   - `eager: true` resolves the glob synchronously
1. You can now fetch each `imageUrl`
