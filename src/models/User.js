var m = require('mithril');

var REM_API_URL = 'https://rem-rest-api.herokuapp.com/api/users/';

var User = {
  current: {},
  load: function(id) {
    return m.request({
      method: 'GET',
      url: REM_API_URL + id,
      withCredentials: true
    }).then(function(result) {
      User.current = result;
    });
  },
  loadList: function() {
    return m.request({
      method: 'GET',
      url: REM_API_URL,
      withCredentials: true
    }).then(function(result) {
      User.list = result.data;
    });
  },
  list: [],
  save: function() {
    return m.request({
      method: 'PUT',
      url: REM_API_URL + User.current.id,
      data: User.current,
      withCredentials: true
    });
  }
};

module.exports = User;
