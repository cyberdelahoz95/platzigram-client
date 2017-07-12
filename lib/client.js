'use strict'

const request = require('request-promise')
const Promise = require('bluebird')

class Client {
  constructor (options) {
    this.options = options || {
      endpoints: {
        pictures: 'https://platizgram.test/picture',
        user: 'https://platizgram.test/user',
        auth: 'https://platizgram.test/auth'
      }
    }
  }

  getPicture (id, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.pictures}/${id}`,
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  savePicture () {}

  likePicture () {}

  listPictures () {}

  listPicturesByTag () {}

  saveUser () {}

  getUser () {}

  auth () {}
}

module.exports = Client
