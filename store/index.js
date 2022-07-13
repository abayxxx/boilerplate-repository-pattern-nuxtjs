import Vuex from 'vuex';
import snackbar from './snackbar';

const createStore = () => {
  return new Vuex.Store({
    // namespaced: true,
    modules: {
     snackbar,
    }
  });
};

export default createStore
