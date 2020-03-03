// Contained button, for now
const appButton = document.createElement('template')
appButton.innerHTML = `
<style>
  /* Base style */
  .container {
    min-width: 64px;
    height: 36px;

    padding: var(--horizontal-3);

    border: none;
    text-decoration: none;
    background: none;

    box-shadow: var(--elevation-0dp);

    transition: all 0.1s;
  }
  .container:focus {
    outline: none;
  }

  .text {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 14px;

  }

  /* Contained button style */
  .container--contained {
    box-shadow: var(--elevation-2dp);
    background-color: var(--primary)
  }
  .container--contained:hover {
    box-shadow: var(--elevation-4dp);
  }
  .container--contained:active {
    box-shadow: var(--elevation-8dp);
  }
  .text--contained {
    color: var(--on-primary)
  }

  /* Outlined button style */
  .container--outlined {
    border: 1px solid var(--divider);
    border-radius: 4px;
  }
  .container--outlined:hover {
    background: var(--primary-hover);
  }
  .container--outlined:active {
    background: var(--primary-hover);
    box-shadow: var(--elevation-0dp);
  }
  .text--outlined {
    color: var(--primary)
  }

  /* Text button style */
  .container--text {
  }
  .container--text:hover {
    background: var(--primary-hover);
  }
  .text--text {
    color: var(--primary)
  }

</style>

<button type="button" id="button" class="container"><slot id="text" class="text">Submit</slot></button>
`
class AppButton extends HTMLElement {
  static get observedAttributes() {
    return ['contained', 'outlined', 'text']
  }

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(appButton.content.cloneNode(true))
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'button')
    if (!this.hasAttribute('tabindex')) this.setAttribute('tabindex', 0)
    if (this.contained) {
      this.setType('contained')
    } else if (this.outlined) {
      this.setType('outlined')
    } else if (this.text) {
      this.setType('text')
    }
  }

  setType(type) {
    this.shadowRoot.getElementById('button').classList.add(`container--${type}`)
    this.shadowRoot.getElementById('text').classList.add(`text--${type}`)
  }

  get contained() {
    return this.hasAttribute('contained')
  }
  set contained(val) {
    if (val) {
      this.setAttribute('contained', '')
    } else {
      this.removeAttribute('contained')
    }
  }

  get outlined() {
    return this.hasAttribute('outlined')
  }
  set outlined(val) {
    if (val) {
      this.setAttribute('outlined', '')
    } else {
      this.removeAttribute('outlined')
    }
  }

  get text() {
    return this.hasAttribute('text')
  }
  set text(val) {
    if (val) {
      this.setAttribute('text', '')
    } else {
      this.removeAttribute('text')
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.contained) {
    } else {
    }
  }
}

customElements.define('app-button', AppButton)
