import "./BaseContent";
import { BaseContent } from "./BaseContent";
import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { until } from "lit/directives/until.js";
import { HcConnect } from "../../hc-connection";

@customElement("app-home")
export class Home extends BaseContent {
  authorized(): boolean {
    return true; // it is public page
  }

  @state()
  private my_address: Promise<string> = this.who_am_i();

  render_me(): unknown {
    return html`
      <div class="col-xl-12 col-md-12 col-sm-12">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <h4 class="card-title">Home</h4>
              <p>The static content can be appeared here.</p>
              <br />
              This is my agent-address:
              ${until(this.my_address, html`<span>Loading...</span>`)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  who_am_i(): Promise<string> {
    //return new Promise(resolve => {resolve("none")})
    return HcConnect.callZome("who_am_i", null);
  }

}
