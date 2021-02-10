export const UserModule = {
    namespaced: true,

    // How you reference a user in a state
    state: {
      user: null
    },
  
  // Difference between mutations and actions:
  // Mutations are functions that effects the state. Mutations is not called directly.
    mutations: {
      // Passing a user, and setting state object to the user we pass in. Mutations is the only thing affecting the state
      SET_USER(state, user){
        state.user = user;
      }
    },
  
    // Actions are functions you call through the application that call mutations. Actions runs a bunch of processes, and is the only thing running mutations.
    // You then run actions from your components etc.
    actions: {
      setUser({ commit }, user) {
        commit('SET_USER', user);
      }
    },

  
  }