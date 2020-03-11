const appH4Template = document.createElement('template')
appH4Template.innerHTML = `

<!-- Style -->
<style>
:host {
  display: block;
}
h4 {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  
  font-weight: normal;
  font-size: 34px;
  letter-spacing: 0.25px;
}
</style>

<!-- Template -->
<h4>
  <slot></slot>
</h4>
`

class AppH4 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appH4Template.innerHTML
  }
}

customElements.define('app-h4', AppH4)
