const appCaptionTemplate = document.createElement('template')
appCaptionTemplate.innerHTML = `

<!-- Style -->
<style>
:host {
  display: inline;
}
span {
  font-family: 'Roboto', sans-serif;  
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.4px;
}
</style>

<!-- Template -->
<span>
  <slot></slot>
</span>
`

class AppCaption extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appCaptionTemplate.innerHTML
  }
}

customElements.define('app-caption', AppCaption)
