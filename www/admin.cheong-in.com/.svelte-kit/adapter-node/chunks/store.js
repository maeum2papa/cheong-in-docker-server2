import { w as writable } from "./index2.js";
const cAlert = writable({
  flag: false,
  msg: "",
  feedback: () => {
  }
});
const Loading = writable({
  flag: false
});
export {
  Loading as L,
  cAlert as c
};
