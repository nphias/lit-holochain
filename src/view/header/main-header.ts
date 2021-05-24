import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { BaseComponent } from "../BaseComponent";
@customElement("main-header")
export class MainHeader extends BaseComponent {
  constructor() {
    super();
  }
  render() {
    return html`
      <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
          <i class="bi bi-justify fs-3"></i>
        </a>
        <h1 id="header">Holochain in Action</h1>
      </header>
      <style>
        h1#header {
          border-bottom: 8px solid #57c4d0;
        }
      </style>
    `;
  }
}
