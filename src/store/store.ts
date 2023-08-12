import { createStore } from 'vuex'

export interface State {
    name: string
}

export const store = createStore<State>({
  state: {
      name: 'Иванов Иван Иванович',
  },
  getters: {
      getName(state) {
          return state.name
      }
  },
  mutations: {
      addName(state, body: string) {
          state.name = body
          console.log(state.name)
      }
  },
  actions: {
  },
  modules: {
  }
})
