class AppButton extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
            <style>
                .app-button {
                    min-width: 64px;
                }
            </style>
            <button class="app-button">Hi</button>
        `
  }

  static get observedAttributes() {
    return ['flat']
  }
}

customElements.define('app-button', AppButton)
