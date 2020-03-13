const typographyButtonTemplate = document.createElement('template')
typographyButtonTemplate.innerHTML = `

<!-- Style -->
<style>
span {
  font-family: 'Roboto', sans-serif;  
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
}
</style>

<!-- Template -->
<span>
  <slot></slot>
</span>
`

class TypographyButton extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = typographyButtonTemplate.innerHTML
  }
}

customElements.define('typography-button', TypographyButton)
