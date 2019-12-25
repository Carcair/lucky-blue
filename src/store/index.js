import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 171,
    timer: '02 : 00',
    runda: 7
  },
  mutations: {
    mutate_counter(state) {
      let temp = state.counter - 51;
      let tempMin = Math.floor(temp/60);
      let tempSek = temp%60;

      if(temp <= 0 && state.runda <= 69) {
        state.timer = 'Runda ' + Math.floor(state.runda/7);
        state.runda++;
      } else {
        if(tempSek < 10) {
          state.timer = '0' + tempMin + " : " + "0" + tempSek;
        } else {
          state.timer = '0' + tempMin + " : " + tempSek;
        }
      }
      state.counter--;
    }
  },
  actions: {
    action_counter(context) {
      let cInt = setInterval(() => {
        context.commit('mutate_counter');
      },1000);
      setTimeout(() => {
        clearInterval(cInt);
      }, 171000);
    }
  },
  modules: {
  }
})
