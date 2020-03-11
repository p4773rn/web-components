const appH3Template = document.createElement('template')
appH3Template.innerHTML = `

<!-- Style -->
<style>
:host {
  display: block;
}
h3 {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  
  font-weight: normal;
  font-size: 48px;
  letter-spacing: 0px;
}
</style>

<!-- Template -->
<h3>
  <slot></slot>
</h3>
`

class AppH3 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appH3Template.innerHTML
  }
}

customElements.define('app-h3', AppH3)
