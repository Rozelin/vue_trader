import stocks from '../../assets/stocks.js';

const state = {
  stocks: []
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS' (state) {

  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  },
  userFunds: state => {
    return '$' + state.userFunds;
  }
};

const actions = {
  buyStock ({commit}, order) {
    commit();
  },
  initStocks ({commit}) {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks ({commit}) {
    commit('RND_STOCKS');
  }
};

export default {
  state,
  mutations,
  getters,
  actions
}
