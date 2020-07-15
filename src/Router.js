(function () {
  'use strict';

  const api = new EventEmitter;

  window.addEventListener('popstate', () => api.emit('update'));

  api.getHashObject = function getHashObject() {
    if (!location.hash) {
      return {};
    }

    return JSON.parse(decodeURI(location.hash).slice(1));
  };

  api.setHashObject = function setHashObject(obj = null) {
    if (!obj || !Object.keys(obj).length) {
      location.hash = '';
    } else {
      location.hash = JSON.stringify(obj);
    }
  };

  window.Router = api;
})();
