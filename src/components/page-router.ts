import { LitElement, html } from 'lit'
import { Router } from '@vaadin/router'
import '../pages/home-page'
import '../pages/about-page'
import '../pages/contact-page'

class PageRouter extends LitElement {

  createRenderRoot() {
    return this
  }

  firstUpdated() {
    const outlet = document.getElementById('router-outlet')
    const router = new Router(outlet)
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/about', component: 'about-page' },
      { path: '/contact', component: 'contact-page' },
    ])
  }

  render() {
    return html`
      <div id='router-outlet'></div>
    `
  }

}

customElements.define('page-router', PageRouter)