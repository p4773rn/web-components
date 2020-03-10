const appSelectTemplate = document.createElement('template')
appSelectTemplate.innerHTML = `

<!-- Style -->
<style>

</style>

<!-- Template -->
<input>
<app-menu>
`

class AppSelect extends HTMLElement {
  static get observedAttributes() {
    return []
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appSelectTemplate.innerHTML
  }

  connectedCallback() {}

  // Getters and setters
}

customElements.define('app-select', AppSelect)
