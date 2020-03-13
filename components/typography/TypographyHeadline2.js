const typographyHeadline2Template = document.createElement('template')
typographyHeadline2Template.innerHTML = `

<!-- Style -->
<style>
h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  font-size: 60px;
  letter-spacing: -0.5px;
}
</style>

<!-- Template -->
<h2>
  <slot></slot>
</h2>
`

class TypographyHeadline2 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyHeadline2Template.innerHTML
  }
}

customElements.define('typography-headline2', TypographyHeadline2)
