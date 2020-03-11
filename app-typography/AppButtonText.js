const appButtonTextTemplate = document.createElement('template')
appButtonTextTemplate.innerHTML = `

<!-- Style -->
<style>
:host {
  display: inline;
}
span {
  font-family: 'Roboto', sans-serif;  
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
}
</style>

<!-- Template -->
<span>
  <slot></slot>
</span>
`

class AppButtonText extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appButtonTextTemplate.innerHTML
  }
}

customElements.define('app-button-text', AppButtonText)
