const appOverlineTemplate = document.createElement('template')
appOverlineTemplate.innerHTML = `

<!-- Style -->
<style>
:host {
  display: inline;
}
span {
  font-family: 'Roboto', sans-serif;  
  font-weight: normal;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
</style>

<!-- Template -->
<span>
  <slot></slot>
</span>
`

class AppOverline extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appOverlineTemplate.innerHTML
  }
}

customElements.define('app-overline', AppOverline)
