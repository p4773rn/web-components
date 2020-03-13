const typographySubtitle2Template = document.createElement('template')
typographySubtitle2Template.innerHTML = `

<!-- Style -->
<style>
h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.1px;
}
</style>

<!-- Template -->
<h6>
  <slot></slot>
</h6>
`

class TypographySubtitle2 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographySubtitle2Template.innerHTML
  }
}

customElements.define('typography-subtitle2', TypographySubtitle2)
