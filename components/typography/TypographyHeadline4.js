const typographyHeadline4Template = document.createElement('template')
typographyHeadline4Template.innerHTML = `

<!-- Style -->
<style>
h4 {
  font-family: 'Roboto', sans-serif;
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

class TypographyHeadline4 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyHeadline4Template.innerHTML
  }
}

customElements.define('typography-headline4', TypographyHeadline4)
