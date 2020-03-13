const typographyBody2Template = document.createElement('template')
typographyBody2Template.innerHTML = `

<!-- Style -->
<style>
p {
  font-family: 'Roboto', sans-serif;
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

class TypographyBody2 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyBody2Template.innerHTML
  }
}

customElements.define('typography-body2', TypographyBody2)
