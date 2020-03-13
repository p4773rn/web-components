const typographyBody1Template = document.createElement('template')
typographyBody1Template.innerHTML = `

<!-- Style -->
<style>
p {
  font-family: 'Roboto', sans-serif;
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

class TypographyBody1 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyBody1Template.innerHTML
  }
}

customElements.define('typography-body1', TypographyBody1)
