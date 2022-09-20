document.addEventListener('alpine:init', () => {
  Alpine.data('copyButton', () => ({
      label: 'copy',

      clicked() {
          const code = this.$refs.codeBlock.querySelector('code .rouge-code').innerText.trim();
          navigator.clipboard.writeText(code);
          this.label = 'copied';
          setTimeout(() => this.label = 'copy', 4000)
      }
  }))
})

document
.querySelectorAll('pre.highlight')
.forEach(function (pre) {
  // For refs to work, we need a component to be bound to alpine
  // https://github.com/alpinejs/alpine/discussions/3003
  pre.setAttribute('x-data', 'copyButton')
  pre.setAttribute('x-ref', 'codeBlock')
  pre.insertAdjacentHTML('beforeend', `
  <button
    @click="clicked"
    type="button"
    aria-label="Copy code to clipboard"
    class="copy">
      <div class="icon-clipboard copy-icon"></div>
      <div x-text="label"></div>
  </button>`)
});
