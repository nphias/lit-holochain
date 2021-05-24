import "./BaseContent";
import { BaseContent } from "./BaseContent";
import { html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-mychannels")
export class MyChannels extends BaseContent {
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
              <h4 class="card-title">My Channels</h4>
              <p>This is the list of channels</p>
              <a href="/mychannel/153223sf234?extraparam=extravalue"
                >Go TO Channel Id: 153223sf234</a
              >
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
