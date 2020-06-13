class Authenticate {
  constructor() {
    this.database = [];
    this.session = {};
    this.isAuthenticated = false;
  }

  createUser(userInfo = { username, name, password }) {
    if (userInfo && Object.keys(userInfo).length > 0) {
      if (this.isUsernameTaken(userInfo.username)) {
        throw new Error("Sorry, username already taken");
      } else {
        this.database.push(userInfo);
        console.log("User successfully registered");
      }
    } else {
      throw new Error("Provide user details");
    }
  }

  isUsernameTaken(username) {
    const result = this.database.find((info) => info.username === username);
    return result === null;
  }
  loginUser(cred = { username, password }) {
    if (cred && Object.keys(cred).length === 0) {
      throw new Error("Provide credentials");
    }
    const result = this.database.find(
      (info) => info.username === cred.username
    );
    if (!result) {
      throw new Error("user not found");
    }
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
    for (let [key, value] of Object.entries(info)) {
      updateInfo[key] = value;
    }

    return updateInfo;
  }
}

const authenticate = new Authenticate();

const reqBody = {
  username: "3V",
  name: "Vincent Asamoah",
  password: 1234,
};

authenticate.createUser(reqBody);

const reqLogin = {
  username: "3V",
  password: 1234,
};

authenticate.loginUser(reqLogin);

const reqUpdate = {
  email: "firstlast@me.com",
  contact: "2030459405",
  address: "Accra, Ghana",
  home: "Box e",
};

authenticate.updateUserInfo(reqUpdate);
