const appTextTemplate = document.createElement('template')
appTextTemplate.innerHTML = `

<!-- Style -->
<style>

</style>

<!-- Template -->

`

class AppText extends HTMLElement {
  static get observedAttributes() {
    return []
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appTextTemplate.innerHTML
  }

  connectedCallback() {}

  // Getters and setters
}

customElements.define('app-text', AppText)
