const typographyOverlineTemplate = document.createElement('template')
typographyOverlineTemplate.innerHTML = `

<!-- Style -->
<style>
span {
  font-family: 'Roboto', sans-serif;  
  font-weight: normal;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
</style>

<!-- Template -->
<span>
  <slot></slot>
</span>
`

class TypographyOverline extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyOverlineTemplate.innerHTML
  }
}

customElements.define('typography-overline', TypographyOverline)
