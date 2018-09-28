let actions = {
  ADD_COMMENT({commit}, comment) {

    return new Promise((resolve, reject) => {
      axios.post(`/comments`, comment)
        .then(response => {
          resolve(response)
        }).catch(err => {
        reject(err)
      })
    })

  },

  GET_COMMENTS({commit}) {
    axios.get('/comments')
      .then(res => {
        {
          commit('GET_COMMENTS', res.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default actions
