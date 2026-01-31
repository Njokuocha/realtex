import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: "pusher",
  key: "6e53650dd06debe62b72",      // from Pusher dashboard
  cluster: "eu", // e.g. "mt1"
  forceTLS: true
});

export default echo;
