import { createStore } from "vuex";
import companies from "./modules/companies";
import company from "./modules/company";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    companies,
    company,
  },
});
