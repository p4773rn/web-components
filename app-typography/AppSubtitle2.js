const appSubtitle2Template = document.createElement('template')
appSubtitle2Template.innerHTML = `

<!-- Style -->
<style>
:host {
  display: block;
}
h6 {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.1px;
}
</style>

<!-- Template -->
<h6>
  <slot></slot>
</h6>
`

class AppSubtitle2 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appSubtitle2Template.innerHTML
  }
}

customElements.define('app-subtitle2', AppSubtitle2)
