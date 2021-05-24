import { BaseComponent } from "../BaseComponent";
import { html } from "lit";
import { property } from "lit/decorators.js";
import { RouterLocation } from "@vaadin/router";
export abstract class BaseContent extends BaseComponent {
  @property()
  location!: RouterLocation;

  constructor() {
    super();
  }

  abstract authorized(): boolean;
  abstract render_me(): unknown;

  render() {
    if (this.authorized() == false) {
      return html`Access Denied`;
    } else {
      return this.render_me();
    }
  }
  public onBeforeEnter(routerlocation: RouterLocation) {
    this.location = routerlocation;
  }
  getUrlParam(name: string) {
    const section = this.location.params.section;
    return new URLSearchParams(location.search).get(name);
  }
}
