const typographyCaptionTemplate = document.createElement('template')
typographyCaptionTemplate.innerHTML = `

<!-- Style -->
<style>
span {
  font-family: 'Roboto', sans-serif;  
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.4px;
}
</style>

<!-- Template -->
<span>
  <slot></slot>
</span>
`

class TypographyCaption extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyCaptionTemplate.innerHTML
  }
}

customElements.define('typography-caption', TypographyCaption)
