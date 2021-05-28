import { LitElement, html } from 'lit'
import { customElement } from "lit/decorators.js";
import "./view/header/page-header";
import "./view/header/main-header";
import "./view/header/right-header";
import "./view/navigation/sidebar-navi";
import "./router";
import "./view/content/home"
import { Store } from "./AppState";

// Initialize Values.
Store.getInstance().setState({
  loggedin: false,
  agentKey: "",
  isAdmin: false,
});

@customElement("lit-app")
class App extends LitElement {
  createRenderRoot() {
    return this
  }

  // <div class='container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg'>
  render() {
    return html`
    <div id="app">
    <sidebar-navi></sidebar-navi>
    <div id="main">
      <div class="page-heading">
        <page-header>
          <!-- <right-header></right-header> -->
        </page-header>
        <main id="content"></main>
      </div>
    </div>
    </div>
    `
  }
}
