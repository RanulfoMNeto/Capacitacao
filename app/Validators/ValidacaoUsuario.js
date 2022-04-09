'use strict'

class ValidacaoUsuario {
  get rules () {
    return {
      username: 'required|string',
      email: 'required|email',
      password: 'required|string'
    }
  }
}

module.exports = ValidacaoUsuario
