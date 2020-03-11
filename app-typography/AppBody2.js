const appBody2Template = document.createElement('template')
appBody2Template.innerHTML = `

<!-- Style -->
<style>
:host {
  display: block;
}
p {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.25px;
}
</style>

<!-- Template -->
<p>
  <slot></slot>
</p>
`

class AppBody2 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appBody2Template.innerHTML
  }
}

customElements.define('app-body2', AppBody2)
