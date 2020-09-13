import store from "@/store/index.js";
export const currentUser = function() {
  return store.state.user;
};
