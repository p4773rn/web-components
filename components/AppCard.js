const appCardTemplate = document.createElement('template')
appCardTemplate.innerHTML = `

<style>
/* Style */
:host {
  display: block;
  margin: var(--all-1);
  width: 500px;
  box-shadow: var(--elevation-2dp);
  background: var(--surface);
}
.header {
  background: var(--surface-header);
  padding: var(--all-2);
}
typography-subtitle2 {
  text-align: left;
  color: var(--on-surface);
}
.content {
  padding: var(--all-2);
}
</style>

<!-- Template -->
<div class="header">
  <typography-subtitle2></typography-subtitle2>
</div>
<div class="content">
  <slot></slot>
</div>
`

class AppCard extends HTMLElement {
  static get observedAttributes() {
    return ['headline']
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appCardTemplate.innerHTML
    this.$headline = this._shadowRoot.querySelector('typography-subtitle2')
  }

  connectedCallback() {
    this.$headline.innerHTML = this.getAttribute('headline')
  }

  // Getters and setters
  get headline() {
    return this.getAttribute('headline')
  }

  set headline(val) {
    this.setAttribute('headline', val)
  }
}

customElements.define('app-card', AppCard)
