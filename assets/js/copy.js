// https://remarkablemark.org/blog/2021/06/01/add-copy-code-to-clipboard-button-to-jeyll-site/
// var codeBlocks = document.querySelectorAll('pre.highlight');

// codeBlocks.forEach(function (codeBlock) {
//   var copyButton = document.createElement('button');
//   copyButton.className = 'copy';
//   copyButton.type = 'button';
//   copyButton.ariaLabel = 'Copy code to clipboard';
//   copyButton.innerText = 'Copy';

//   codeBlock.append(copyButton);

//   copyButton.addEventListener('click', function () {
//     var code = codeBlock.querySelector('code').innerText.trim();
//     window.navigator.clipboard.writeText(code);

//     copyButton.innerText = 'Copied';
//     var fourSeconds = 4000;

//     setTimeout(function () {
//       copyButton.innerText = 'Copy';
//     }, fourSeconds);
//   });
// });

// https://github.com/remarkablemark/remarkablemark.github.io/blob/master/_layouts/post.html
// document
// .querySelectorAll('pre.highlight')
// .forEach(function (pre) {
//   var button = document.createElement('button');
//   var copyText = 'Copy';
//   button.className = 'copy';
//   button.type = 'button';
//   button.ariaLabel = 'Copy code to clipboard';
//   button.innerText = copyText;
//   button.addEventListener('click', function () {
//     // remove pre if removing line numbers
//     var code = pre.querySelector('code .rouge-code').innerText.trim();
//     navigator.clipboard.writeText(code);
//     button.innerText = 'Copied';
//     setTimeout(function () {
//       button.innerText = copyText;
//     }, 4000);
//   });
//   const icon = document.createElement('div');
//   icon.className = 'icon-clipboard copy-icon';
//   button.appendChild(icon);
//   pre.appendChild(button);
// });

document
.querySelectorAll('pre.highlight')
.forEach(function (pre) {
  // pre.insertAdjacentHTML('beforeend', `
  // <button type="button" aria-label="Copy code to clipboard" onclick="" class="copy"><div class="icon-clipboard copy-icon text-red-900"></div>Copy<button>
  // `)
  const button = document.createElement('button');
  button.className = 'copy';
  button.type = 'button';
  button.ariaLabel = 'Copy code to clipboard';

  const iconDiv = document.createElement('div');
  iconDiv.className = 'icon-clipboard copy-icon';
  const labelDiv = document.createElement('div');
  labelDiv.className = 'copy-label'
  const copyText = 'Copy';
  labelDiv.innerText = copyText;

  button.appendChild(iconDiv);
  button.appendChild(labelDiv);

  // button.innerText = copyText;
  // button.innerHTML = `<div class="icon-clipboard copy-icon text-red-900"></div><div class="copy-label">copy</div>`
  button.addEventListener('click', function () {
    // remove pre if removing line numbers
    var code = pre.querySelector('code .rouge-code').innerText.trim();
    navigator.clipboard.writeText(code);
    // button.innerText = 'Copied';
    // const label = button.querySelector('div .copy-label')
    labelDiv.innerText = 'Copied';
    setTimeout(function () {
      labelDiv.innerText = copyText;
    }, 4000);
  });
  // const icon = document.createElement('div');
  // icon.className = 'icon-clipboard copy-icon';
  // button.appendChild(icon);
  pre.appendChild(button);
});
