"use strict";

var id_token = localStorage.getItem("id_token");
var element = document.getElementById("nav-login-status");
var signInButtonEl = document.createElement("a");
var dropDownContainer = document.createElement("div");
var userEmailEl = document.createElement("span");
var dropDownEl = document.createElement("ul");
var logoutEl = document.createElement("li");

if (element) {
  element.className = "nav-login-status";
  render();
}
function render() {
  element.appendChild(signInButtonEl);
  signInButtonEl.innerHTML = "Sign In";
  signInButtonEl.href = "/signin";
  signInButtonEl.className = "nav-login-status-signin";
  element.appendChild(dropDownContainer);
  dropDownContainer.appendChild(userEmailEl);
  dropDownContainer.appendChild(dropDownEl);
  dropDownEl.appendChild(logoutEl);
  dropDownEl.className = "nav-login-status-dropdown login-status-hidden";
  dropDownContainer.className = "nav-login-status-logged-in login-status-hidden";
  userEmailEl.className = "nav-login-status-username";
  userEmailEl.addEventListener("click", function () {
    return toggleDropdown();
  });
  logoutEl.innerHTML = "Logout";
  logoutEl.className = "nav-login-status-logout";
  logoutEl.addEventListener("click", function () {
    return logout();
  });
  if (id_token !== null) {
    getProfile(function (err, xhr) {
      if (xhr.status === 200) {
        userEmailEl.innerHTML = JSON.parse(xhr.response).email;
        toggleStatus();
      }
    });
  }
}

function toggleDropdown() {
  dropDownEl.classList.toggle("login-status-hidden");
}

function toggleStatus() {
  signInButtonEl.classList.toggle("login-status-hidden");
  signInButtonEl.classList.toggle("nav-login-status-signin");
  dropDownContainer.classList.toggle("login-status-hidden");
}

function getProfile(done) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", '/api/users/profile');
  xhr.setRequestHeader("Authorization", "bearer " + id_token);
  xhr.onload = function () {
    return done(null, xhr);
  };
  xhr.onerror = function () {
    return done(xhr.xhr);
  };
  xhr.send();
}

function logout() {
  delete localStorage.id_token;
  toggleStatus();
}