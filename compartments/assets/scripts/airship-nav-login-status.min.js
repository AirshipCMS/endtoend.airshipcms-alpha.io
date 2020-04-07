"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavLoginStatus = function () {
  function NavLoginStatus(domain) {
    _classCallCheck(this, NavLoginStatus);

    this.id_token = localStorage.getItem("id_token");
    this.element = document.getElementById("nav-login-status");
    this.domain = domain;

    this.checkContainer();
  }

  _createClass(NavLoginStatus, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.signInButtonEl = document.createElement("a");
      this.element.appendChild(this.signInButtonEl);
      this.signInButtonEl.innerHTML = "Sign In";
      this.signInButtonEl.href = "/signin";
      this.signInButtonEl.className = "nav-login-status-signin";

      this.dropDownEl = document.createElement("ul");
      this.userEmailEl = document.createElement("li");
      var logoutEl = document.createElement("li");

      this.element.appendChild(this.dropDownEl);
      this.dropDownEl.appendChild(this.userEmailEl);
      this.dropDownEl.appendChild(logoutEl);
      this.dropDownEl.className = "nav-login-status-dropdown hidden";

      logoutEl.innerHTML = "Logout";
      logoutEl.className = "nav-login-status-logout";
      logoutEl.addEventListener("click", function () {
        return _this.logout();
      });

      if (this.id_token !== null) {
        this.getProfile(function (err, xhr) {
          if (xhr.status === 200) {
            _this.userEmailEl.innerHTML = JSON.parse(xhr.response).email;
            _this.toggleElements();
          }
        });
      }
    }
  }, {
    key: "toggleElements",
    value: function toggleElements() {
      this.signInButtonEl.classList.toggle("hidden");
      this.dropDownEl.classList.toggle("hidden");
    }
  }, {
    key: "getProfile",
    value: function getProfile(done) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://" + this.domain + "/api/users/profile");
      xhr.setRequestHeader("Authorization", "bearer " + this.id_token);
      xhr.onload = function () {
        return done(null, xhr);
      };
      xhr.onerror = function () {
        return done(xhr.xhr);
      };
      xhr.send();
    }
  }, {
    key: "logout",
    value: function logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('profile');
      localStorage.removeItem('account');
      localStorage.removeItem('id_token');
      localStorage.removeItem('access_token');
      this.toggleElements();
    }
  }, {
    key: "isValidDomain",
    value: function isValidDomain(domain) {
      var valid = false;
      var substring = ".airshipcms.io";
      var substring2 = ".airshipcms-alpha.io";
      if (domain.includes(substring) || domain.includes(substring2)) {
        valid = true;
      }
      return valid;
    }
  }, {
    key: "checkContainer",
    value: function checkContainer() {
      if (this.domain === undefined || !this.isValidDomain(this.domain)) {
        throw new Error("valid airship domain required");
      }
      if (this.element === null) {
        throw new Error("Nav Login Status container not found");
      } else {
        this.render();
      }
    }
  }]);

  return NavLoginStatus;
}();