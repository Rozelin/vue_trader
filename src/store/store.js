import Vue from 'vue'
import Vuex from 'vuex'
import stocks from '../assets/stocks.js';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    userStocks: [],
    stocks: [],
    funds: 10000
  },

  mutations: {
    'SELL_STOCK' (state, {name, qty, price}) {
      const record = state.userStocks.find(element => element.name == name);
      if (record.qty > qty) {
        record.qty -= +qty;
      } else {
        state.userStocks.splice(state.userStocks.indexOf(record), 1);
      }
      state.funds += price * qty;

      let addedItem = state.stocks.find(item => item.name === name);
      addedItem.qty += +qty;
    },

    'BUY_STOCK' (state, {name, price, qty}) {
      const record = state.userStocks.find(element => {
        return (element.name == name && element.price == price);
      });
      if (record) {
        record.qty += +qty;
      } else {
        state.userStocks.push({
          name: name,
          qty: +qty,
          price: +price
        });
      }
      state.funds -= price * qty;

      let addedItem = state.stocks.find(item => item.name === name);
      addedItem.qty -= qty;
    },
  
    'SET_STOCKS' (state, stocks) {
      state.stocks = stocks;
    },
  
    'RND_STOCKS' (state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * ( 1 + Math.random() - 0.5));
      });
    },

    'SET_IMPORTED_DATA' (state, data) {
      state.userStocks = data.userStocks || [];
      state.funds = data.funds;
      state.stocks = data.stocks;

    }
  },

  actions: {
    sellStock({commit}, order) {
      commit('SELL_STOCK', order);
    },

    buyStock({commit}, order) {
      commit('BUY_STOCK', order);
    },

    randomizeStocks ({commit}) {
      commit('RND_STOCKS');
    },

    fetchData ({commit}) {
      Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
          if (data) {
            commit('SET_IMPORTED_DATA', data);
          } else {
            commit('SET_STOCKS', stocks);
          }
        })
    }
  },

  getters: {
    userStocks: state => {
      return state.userStocks;
    },
    stocks: state => {
      return state.stocks;
    },
    getUserFunds: state => {
      return state.funds;
    },
    stockPrice: (state) => (name) => {
      let stock = state.stocks.find(stock => stock.name === name);
      return stock.price;
    }
  }
});
