const typographyHeadline3Template = document.createElement('template')
typographyHeadline3Template.innerHTML = `

<!-- Style -->
<style>
h3 {
  font-family: 'Roboto', sans-serif;  
  font-weight: normal;
  font-size: 48px;
  letter-spacing: 0px;
}
</style>

<!-- Template -->
<h3>
  <slot></slot>
</h3>
`

class TypographyHeadline3 extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyHeadline3Template.innerHTML
  }
}

customElements.define('typography-headline3', TypographyHeadline3)
