const typographyHeadline5Template = document.createElement('template')
typographyHeadline5Template.innerHTML = `

<!-- Style -->
<style>
h5 {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 24px;
  letter-spacing: 0px;
}
</style>

<!-- Template -->
<h5>
  <slot></slot>
</h5>
`

class TypographyHeadline5 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyHeadline5Template.innerHTML
  }
}

customElements.define('typography-headline5', TypographyHeadline5)
