const appH2Template = document.createElement('template')
appH2Template.innerHTML = `

<!-- Style -->
<style>
:host {
  display: block;
}
h2 {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  
  font-weight: lighter;
  font-size: 60px;
  letter-spacing: -0.5px;
}
</style>

<!-- Template -->
<h2>
  <slot></slot>
</h2>
`

class AppH2 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appH2Template.innerHTML
  }
}

customElements.define('app-h2', AppH2)
