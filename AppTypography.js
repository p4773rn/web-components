const appTypographyTemplate = document.createElement('template')
appTypographyTemplate.innerHTML = `
<!-- Style -->
<style>
:host {
  display: block;
}
span {
  font-family: 'Roboto', sans-serif;
}
:host([type="headline-1"]) > span {
  font-weight: lighter;
  font-size: 96px;
  letter-spacing: -1.5px;
}
:host([type="headline-2"]) > span {
  font-weight: lighter;
  font-size: 60px;
  letter-spacing: -0.5px;
}
:host([type="headline-3"]) > span {
  font-weight: normal;
  font-size: 48px;
  letter-spacing: 0px;
}
:host([type="headline-4"]) > span {
  font-weight: normal;
  font-size: 34px;
  letter-spacing: 0.25px;
}
:host([type="headline-5"]) > span {
  font-weight: normal;
  font-size: 24px;
  letter-spacing: 0px;
}
:host([type="headline-6"]) > span {
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.15px;
}

:host([type="subtitle-1"]) > span {
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.15px;
}
:host([type="subtitle-2"]) > span {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.1px;
}

:host([type="body-1"]) > span {
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.5px;
}
:host([type="body-2"]) > span {
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.25px;
}

:host([type="button"]) > span {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
}
:host([type="caption"]) > span {
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.4px;
}
:host([type="overline"]) > span {
  font-weight: normal;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
</style>

<!-- Template -->
<span></span>
`

class AppTypography extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'text']
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(appTypographyTemplate.content.cloneNode(true))

    this.$text = this._shadowRoot.querySelector('span')
  }

  connectedCallback() {
    this._render()
  }

  _render() {
    this.$text.innerHTML = this.getAttribute('text')
  }

  get type() {
    return this.getAttribute('type')
  }

  set type(val) {
    this.setAttribute('type', val)
  }
}

customElements.define('app-typography', AppTypography)
