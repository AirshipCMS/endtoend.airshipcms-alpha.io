class NavLoginStatus {
  constructor(domain) {
    this.id_token = localStorage.getItem("id_token");
    this.element = document.getElementById("nav-login-status");
    this.domain = domain;

    this.checkContainer();
  }

  render() {
    this.signInButtonEl = document.createElement("a");
    this.element.appendChild(this.signInButtonEl);
    this.signInButtonEl.innerHTML = "Sign In";
    this.signInButtonEl.href = "/signin";
    this.signInButtonEl.className = "nav-login-status-signin";

    this.dropDownContainer = document.createElement("div");
    this.userEmailEl = document.createElement("span");
    this.dropDownEl = document.createElement("ul");
    let logoutEl = document.createElement("li");

    this.element.appendChild(this.dropDownContainer);
    this.dropDownContainer.appendChild(this.userEmailEl);
    this.dropDownContainer.appendChild(this.dropDownEl);
    this.dropDownEl.appendChild(logoutEl);

    this.dropDownEl.className = "nav-login-status-dropdown login-status-hidden";
    this.dropDownContainer.className = "nav-login-status-logged-in login-status-hidden";
    this.userEmailEl.className = "nav-login-status-username";
    this.userEmailEl.addEventListener("click", () => this.toggleDropdown());

    logoutEl.innerHTML = "Logout";
    logoutEl.className = "nav-login-status-logout";
    logoutEl.addEventListener("click", () => this.logout());

    if (this.id_token !== null) {
      this.getProfile((err, xhr) => {
        if (xhr.status === 200) {
          this.userEmailEl.innerHTML = JSON.parse(xhr.response).email;
          this.toggleStatus();
        }
      });
    }
  }

  toggleDropdown() {
    this.dropDownEl.classList.toggle("login-status-hidden");
  }

  toggleStatus() {
    this.signInButtonEl.classList.toggle("login-status-hidden");
    this.signInButtonEl.classList.toggle("nav-login-status-signin");
    this.dropDownContainer.classList.toggle("login-status-hidden");
  }

  getProfile(done) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://${this.domain}/api/users/profile`);
    xhr.setRequestHeader("Authorization", `bearer ${this.id_token}`);
    xhr.onload = () => done(null, xhr);
    xhr.onerror = () => done(xhr.xhr);
    xhr.send();
  }

  logout() {
    delete localStorage.id_token;
    this.toggleStatus();
  }

  isValidDomain(domain) {
    let valid = false;
    let substring = ".airshipcms.io";
    let substring2 = ".airshipcms-alpha.io";
    if (domain.includes(substring) || domain.includes(substring2)) {
      valid = true;
    }
    return valid;
  }

  checkContainer() {
    if (this.domain === undefined || !this.isValidDomain(this.domain)) {
      throw new Error("valid airship domain required");
    }
    if (this.element === null) {
      throw new Error("Nav Login Status container not found");
    } else {
      this.render();
    }
  }
}
