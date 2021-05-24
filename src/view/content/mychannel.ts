import "./BaseContent";
import { BaseContent } from "./BaseContent";
import { html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-mychannel")
export class MyChannel extends BaseContent {
  authorized(): boolean {
    if (this.state.loggedin) return true;
    else return false;
  }

  render_me(): unknown {
    return html`
      <div class="col-xl-12 col-md-12 col-sm-12">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <h4 class="card-title">My Channel</h4>
              <p>Id: ${this.location.params[0]}</p>
              <p>extraparam: ${this.getUrlParam("extraparam")}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
