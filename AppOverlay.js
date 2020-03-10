const appOverlayTemplate = document.createElement('template')
appOverlayTemplate.innerHTML = `

<style>
/* Style */
:host {
  display: inline-block;
  position: relative;
}
div {
  position: absolute;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  opacity: 0;
}
div:hover {
  opacity: 0.08;
}
div:active {
  opacity: 0.16;
}
</style>

<!-- Template -->
<div></div>
<span>
  <slot></slot>
</span>
`

class AppOverlay extends HTMLElement {
  static get observedAttributes() {
    return ['']
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appOverlayTemplate.innerHTML
  }

  connectedCallback() {}

  // Getters and setters
}

customElements.define('app-overlay', AppOverlay)
