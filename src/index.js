var m = require("mithril");

var Layout = require('./views/Layout');
var UserForm = require('./views/UserForm');
var UserList = require('./views/UserList');

m.route(document.body, '/list', {
  '/list': {
    render: function() {
      return m(Layout, m(UserList));
    }
  },
  '/edit/:id': {
    render: function(vnode) {
      return m(Layout, m(UserForm, vnode.attrs));
    }
  }
});
