import axios from "axios";

const state = {
  companies: [],
};

const getters = {
  allCompanies: (state) => (search) => {
    if (search && search !== "") {
      return state.companies.filter((company) =>
        company.login.includes(search)
      );
    }
    return state.companies;
  },
};

const actions = {
  async getCompanies({ commit }) {
    const response = await axios.get("https://api.github.com/organizations");
    commit("setCompanies", response.data);
  },
};

const mutations = {
  setCompanies: (state, companies) => (state.companies = companies),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
