const typographyHeadline6Template = document.createElement('template')
typographyHeadline6Template.innerHTML = `

<!-- Style -->
<style>
h6 {
  font-family: 'Roboto', sans-serif;
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

class TypographyHeadline6 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyHeadline6Template.innerHTML
  }
}

customElements.define('typography-headline6', TypographyHeadline6)
