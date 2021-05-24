import "./BaseContent";
import { BaseContent } from "./BaseContent";
import { html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-search")
export class Search extends BaseContent {
  authorized(): boolean {
    return true;
  }
  render_me(): unknown {
    return html`
      <div class="col-xl-12 col-md-12 col-sm-12">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <h4 class="card-title">Search</h4>
              <p>Search section.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
