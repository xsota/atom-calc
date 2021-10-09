export const state = () => ({
  address: '',
})

export const getters = {
  getAddress: (state) => state.address,
  getEllipsisAddress: (state) =>
    state.address
      ? `${state.address.substring(0, 4)}...${state.address.substring(
          state.address.length - 4
        )}`
      : null,
}

export const actions = {
  changeAccount({ commit, dispatch }, { account }) {
    console.log('account', account)
    commit('setAddress', account.address)
  },
}
export const mutations = {
  setAddress(state, address) {
    state.address = address
  },
}
