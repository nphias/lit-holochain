import { AppWebsocket } from "@holochain/conductor-api";
import { Binding } from "./AppDefaultSettings";
import "./AppDefaultSettings";

declare global {
  interface Window {
    Buffer: any;
  }
}
global.Buffer = global.Buffer || require("buffer").Buffer;
export class HcConnect {
  private static instance: AppWebsocket;
  private static async getInstance(): Promise<AppWebsocket> {
    if (!this.instance) {
      console.log(Binding);
      this.instance = await AppWebsocket.connect(Binding);
    }
    return this.instance;
  }
  public static async callZome(fnName: string, payload: any): Promise<any> {
    const appConnection = await HcConnect.getInstance();
    const appInfo = await appConnection.appInfo({
      installed_app_id: "peershare-app",
    });

    const cellId = appInfo.cell_data[0].cell_id;
    //console.log("cellId:", cellId);
    return await appConnection.callZome({
      cap: null,
      cell_id: cellId,
      zome_name: "peershare",
      fn_name: fnName,
      provenance: cellId[1],
      payload: payload,
    });
  }
}
