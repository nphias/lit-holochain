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

  @state()
  private my_role: Promise<boolean> = this.am_i_developer();

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
              <br />
              Am I Developer:
              ${until(this.my_role, html`<span>Loading...</span>`)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  who_am_i(): Promise<string> {
    return HcConnect.callZome("who_am_i_2", null);
  }
  am_i_developer(): Promise<boolean> {
    return HcConnect.callZome("am_i_developer", null);
  }
}
