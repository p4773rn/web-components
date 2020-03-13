const typographySubtitle1Template = document.createElement('template')
typographySubtitle1Template.innerHTML = `

<!-- Style -->
<style>
h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.15px;
}
</style>

<!-- Template -->
<h6>
  <slot></slot>
</h6>
`

class TypographySubtitle1 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographySubtitle1Template.innerHTML
  }
}

customElements.define('typography-subtitle1', TypographySubtitle1)
