import { LitElement, html } from 'lit'
import { customElement } from "lit/decorators.js";
//import './tailwind.css'
//import './components/top-bar'
//import './components/page-router'

import "./view/header/page-header";
import "./view/header/main-header";
import "./view/header/right-header";
import "./view/navigation/sidebar-navi";
//import "./router";
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
  render() {
    return html`
      <page-header></page-header>
      <main-header></main-header>
      <right-header></right-header>
      <sidebar-navi></sidebar-navi>
      <div class='container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg'>
      <app-home></app-home>
        <page-router></page-router>
      </div>
    `
  }
}
