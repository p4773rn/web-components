const appH1Template = document.createElement('template')
appH1Template.innerHTML = `

<!-- Style -->
<style>
:host {
  display: block;
}
h1 {
  font-family: 'Roboto', sans-serif;
  margin: 0;

  font-weight: lighter;
  font-size: 96px;
  letter-spacing: -1.5px;
}
</style>

<!-- Template -->
<h1>
  <slot></slot>
</h1>
`

class AppH1 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appH1Template.innerHTML
  }
}

customElements.define('app-h1', AppH1)
