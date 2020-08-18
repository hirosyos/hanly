export const state = () => ({
  txt: '',
})

export const getters = {
  txt(state) {
    return state.txt
  },
}

export const mutations = {
  setTxt(state, txt) {
    state.txt = txt
  },
}

export const actions = {
  async fetchFilms({ commit }) {
    // axios は AJAX 用の関数
    // 要は JavaScript で、URL からデータをとってきて変数にいれるためのもの
    const res = await this.$axios('https://ghibliapi.herokuapp.com/films')
    const films = res.data // 配列で映画データが入ってくる
    commit('setFilms', films) // mutations に渡す
  },
}
