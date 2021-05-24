import { BehaviorSubject } from "rxjs";
export interface State {
  loggedin: boolean;
  agentKey: string;
  isAdmin: boolean;
}
export class Store {
  subject: any;
  state: any;
  private static instance: Store;

  constructor() {
    this.subject = new BehaviorSubject({
      state: {
        loggedin: false,
        agentKey: "",
        isAdmin: false,
      },
    });
    this.state = this.subject.asObservable();
  }

  static getInstance(): Store {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }
  getStore() {
    return this.state;
  }

  setState(value: State) {
    const state = { state: value };
    this.subject.next({ ...this.subject.value, ...state });
  }
}
