class AuthSevice {
  constructor() {
    this.database = [];
    this.session = {};
    this.isAuthenticated = false;
  }

  createUser(userInfo = { username, name, password }) {
    if (userInfo && Object.keys(userInfo).length > 0) {
      if (!this.isUsernameTaken)
        throw new Error("Sorry, username already taken ):");
      this.database.push(userInfo);
      return console.log("user successfully registered (:");
    }
    throw new Error("provide user information ):");
  }

  isUsernameTaken(username) {
    const result = this.database((info) => info.username === username);
    return result !== null;
  }

  loginUser(cred = { username, password }) {
    if (cred && Object.keys(cred).length === 0)
      throw new Error("provide credentials");

    const result = this.database.find(
      (info) => info.username === cred.username
    );

    if (!result) throw new Error("username not found ):");
    if (result.password === cred.password) {
      this.session = result;
      this.isAuthenticated = true;
      console.log(`Welcome back ${cred.username}`);
    }
  }

  updateUserInfo(info = { contact, address }) {
    if (!this.isAuthenticated) throw new Error("Unauthorize access ):");
    if (info && Object.keys(info).length > 0) {
      const userId = this.database.indexOf(this.session);
      const result = this.getNewUserProfile(info);
      this.database[userId] = result;
      console.log("user profile updated", this.database[userId]);
    }
  }

  getNewUserProfile(info) {
    const { username, name, password } = this.session;
    const updateInfo = {
      username,
      name,
      password,
    };
    for (let [key, values] of Object.entries(info)) {
      updateInfo[key] = values;
    }

    return updateInfo;
  }
}

const authService = new AuthSevice();

/* 
 ** request user registration
 */

const reqRegistration = {
  username: "user1",
  name: "First Last name",
  password: "1234",
};
authService.createUser(reqRegistration);

/**
 * request user login
 */

const reqLogin = {
  username: "user1",
  password: "1234",
};

authService.loginUser(reqLogin);

/**
 * request user info update
 */

const reqUpdate = {
  email: "firstlast@me.com",
  contact: "2030459405",
  address: "Accra, Ghana",
  home: "Box e",
};

authService.updateUserInfo(reqUpdate);
