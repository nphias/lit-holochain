import { LitElement, html } from 'lit'
//import './tailwind.css'
//import './components/top-bar'
import './components/page-router'

import "./view/header/page-header";
import "./view/header/main-header";
import "./view/header/right-header";
import "./view/navigation/sidebar-navi";
//import "./router";

import { Store } from "./AppState";

// Initialize Values.
Store.getInstance().setState({
  loggedin: false,
  agentKey: "",
  isAdmin: false,
});

class App extends LitElement {
  createRenderRoot() {
    return this
  }
  render() {
    return html`
      <page-header></page-header>
      <div class='container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg'>
        <page-router></page-router>
      </div>
    `
  }
}

customElements.define('lit-app', App)