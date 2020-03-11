const appBody1Template = document.createElement('template')
appBody1Template.innerHTML = `

<!-- Style -->
<style>
:host {
  display: block;
}
p {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.5px;
}
</style>

<!-- Template -->
<p>
  <slot></slot>
</p>
`

class AppBody1 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appBody1Template.innerHTML
  }
}

customElements.define('app-body1', AppBody1)
