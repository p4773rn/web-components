const appH6Template = document.createElement('template')
appH6Template.innerHTML = `

<!-- Style -->
<style>
:host {
  display: block;
}
h6 {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.15px;
}
</style>

<!-- Template -->
<h6>
  <slot></slot>
</h6>
`

class AppH6 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appH6Template.innerHTML
  }
}

customElements.define('app-h6', AppH6)
