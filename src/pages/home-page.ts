import { LitElement, html } from 'lit'

class HomePage extends LitElement {
  createRenderRoot() {
    return this
  }
  firstUpdated() {
    const title = document.getElementsByTagName('title')[0]
    title.innerText = 'Home | LitElement'
  }
  render() {
    const mycontent = html`
      <h1>Styling an entire block of Vanilla HTML with Tailwind</h1>
      <p>Right off the bat, check out how cool this code block looks...</p>
      <pre><code>console.log('Hello, ssWorld!!!')</code></pre>
      <p>That is amazing!</p>
    `
    return html`
      <prose-container .component="${mycontent}"></prose-container>
    `
  }
}

customElements.define('home-page', HomePage)

/*import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('home-page')
class MyHeader extends LitElement {
  createRenderRoot() {
    return this
  }
  firstUpdated() {
    const title = document.getElementsByTagName('title')[0]
    title.innerText = 'Home | LitElement'
  }
  render() {
    return html`
      <homepage>
        <h1>Styling an entire block of Vanilla HTML with Tailwind</h1>
        <p>Right off the bat, check out how cool this code block looks...</p>
        <pre><code>console.log('Hello, ssWorld!!!')</code></pre>
        <p>That is amazing!</p>
      </homepage>
    `;
  }
}*/