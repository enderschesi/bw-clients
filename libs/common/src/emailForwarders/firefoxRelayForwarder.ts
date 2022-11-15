import { ApiService } from "../abstractions/api.service";

import { Forwarder } from "./forwarder";
import { ForwarderOptions } from "./forwarderOptions";

export class FirefoxRelayForwarder implements Forwarder {
  async generate(apiService: ApiService, options: ForwarderOptions): Promise<string> {
    function randomStr(len: number, arr: string) {
      let ans = "";
      for (let i = len; i > 0; i--) {
        ans += arr[Math.floor(Math.random() * arr.length)];
      }
      return ans;
    }

    if (options.apiKey == null || options.apiKey === "") {
      throw "Invalid Firefox Relay API token.";
    }
    return (
      randomStr(8, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") +
      "S@enderschesi.mozmail.com"
    );
  }
}
