import { LitElement, html, css } from 'lit'
import { property} from 'lit/decorators.js';

class TopBar extends LitElement {
  @property({ attribute: 'navList' })
  navList : Array<{path:string,text:string}>

  //static get properties() {
  //  return {
  //    navList: { type: Array },
  //  }
 // }

  createRenderRoot() {
    return this
  }

  constructor() {
    super()
    this.navList = [
      {
        path: '/',
        text: 'Home',
      },
      {
        path: '/about',
        text: 'About',
      },
      {
        path: '/contact',
        text: 'Contact',
      },
    ]
  }

  render() {
    return html`
      <div class="page-title">
        <div class="row">
          <div class="col-12 col-md-6 order-md-1 order-last">
            <h1 id="header">Holochain in Action (PeerShare)</h1>
            <!-- <p class="text-subtitle text-muted">
            Multiple form layout you can use
          </p> -->
          </div>
          <div class="col-12 col-md-6 order-md-2 order-first">
            <nav
              aria-label="breadcrumb"
              class="breadcrumb-header float-start float-lg-end"
            >
              <right-header></right-header>
            </nav>
          </div>
        </div>
      </div>
      <style>
        h1#header {
          border-bottom: 4px solid #57c4d0;
          padding: 0 0 5px 0;
        }
        .page-title {
          padding: 0 0 50px 0 !important;
        }
      </style>
    `;
  }

}

customElements.define('top-bar', TopBar)