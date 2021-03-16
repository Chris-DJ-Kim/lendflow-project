import axios from "axios";

const state = {
  company: [],
};

const getters = {
  oneCompany: (state) => {
    return state.company;
  },
};

const actions = {
  async getOneCompany({ commit }, name) {
    const response = await axios.get(`https://api.github.com/orgs/${name}`);
    commit("setCompany", response.data);
  },
};

const mutations = {
  setCompany: (state, company) => (state.company = company),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
