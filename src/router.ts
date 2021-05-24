import { Router } from "@vaadin/router";
import "./view/content/home";
window.addEventListener("load", () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.getElementById("content"));

  router.setRoutes([
    {
      path: "/",
      component: "app-home",
    },
    ////////
    {
      path: "/search",
      component: "app-search",
      action: async () => {
        await import("./view/content/search");
      },
    },
    ////////
    {
      path: "/mychannels",
      component: "app-mychannels",
      action: async () => {
        await import("./view/content/mychannels");
      },
    },
    //////
    {
      path: "/mychannel/(.*)",
      component: "app-mychannel",
      action: async () => {
        await import("./view/content/mychannel");
      },
    },
    //////
    {
      path: "(.*)",
      component: "not-found",
      action: async () => {
        await import("./view/content/not-found");
      },
    },
    //////
  ]);
}
