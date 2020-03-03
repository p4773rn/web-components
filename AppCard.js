const appCard = {}
appCard.innerHTML = `
<div class="app-card">
  <slot></slot>
</div>
<style>
    .app-card {
        padding: var(--all-2);
        min-width: 500px;
        box-shadow: var(--elevation-4dp);
        background: white;
    }
</style>
`

class AppCard extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = appCard.innerHTML
  }

  static get observedAttributes() {
    return ['flat']
  }
}

customElements.define('app-card', AppCard)
