const typographyHeadline1Template = document.createElement('template')
typographyHeadline1Template.innerHTML = `

<!-- Style -->
<style>
h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  font-size: 96px;
  letter-spacing: -1.5px;
}
</style>

<!-- Template -->
<h1>
  <slot></slot>
</h1>
`

class TypographyHeadline1 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyHeadline1Template.innerHTML
  }
}

customElements.define('typography-headline1', TypographyHeadline1)
