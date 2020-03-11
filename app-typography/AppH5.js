const appH5Template = document.createElement('template')
appH5Template.innerHTML = `

<!-- Style -->
<style>
:host {
  display: block;
}
h5 {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  
  font-weight: normal;
  font-size: 24px;
  letter-spacing: 0px;
}
</style>

<!-- Template -->
<h5>
  <slot></slot>
</h5>
`

class AppH5 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appH5Template.innerHTML
  }
}

customElements.define('app-h5', AppH5)
