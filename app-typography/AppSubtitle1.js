const appSubtitle1Template = document.createElement('template')
appSubtitle1Template.innerHTML = `

<!-- Style -->
<style>
:host {
  display: block;
}
h6 {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.15px;
}
</style>

<!-- Template -->
<h6>
  <slot></slot>
</h6>
`

class AppSubtitle1 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appSubtitle1Template.innerHTML
  }
}

customElements.define('app-subtitle1', AppSubtitle1)
