import { LitElement, html } from 'lit'

class ProseContainer extends LitElement {

  static get properties() {
    return {
      component: { type: Object }
    }
  }
  createRenderRoot() {
    return this
  }
  firstUpdated() {
    const title = document.getElementsByTagName('title')[0]
    title.innerText = 'Home | LitElement'
  }
  render() {
    return html`
    <div class='max-w-none prose prose-sm lg:prose-lg xl:prose-xl'>
      ${ProseContainer.properties.component}
    </div>
    `
  }
}

customElements.define('prose-container', ProseContainer)