class AuthSevice {
  constructor() {
    this.database = [{name:"ddd"}];
    this.session = {};
    this.isAuthenticated = false;
  }

  createUser(userInfo = { username, name, password }) {
    if (userInfo && Object.keys(userInfo).length > 0) {
      if (this.isUsernameTaken(userInfo.username)) {
        throw new Error("Sorry, username already taken ):");
      } else {
        this.database.push(userInfo);
        return console.log("user successfully registered (:");
      }
    } else {
      throw new Error("provide user information ):");
    }
  }

  isUsernameTaken(username) {
    const result = this.database.find((info) => info.username === username);
    return result === null;
  }

  loginUser(cred = { username, password }) {
    if (cred && Object.keys(cred).length === 0) {
      throw new Error("provide credentials");
    }

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
      console.log("sesssion: ",this.session)
      const userId = this.database.indexOf(this.session);
      console.log('index: ',userId);
      // result contains new object that is (session + contact,address)
      const result = this.getNewUserProfile(info);
      this.database[userId] = result;
      console.log("user profile updated", this.database[userId]);
    }
  }

  getNewUserProfile(info) {
    // destructuring the session object
    const { username, name, password } = this.session;
    // create a new obj to hold the new data, because the db has a const object which is immutable
    // when we have a key and it's variable to be the same, we just type one name. eg
    //{username: username} can become => {username}.
    const updateInfo = {
      username,
      name,
      password,
    };
    
    // info.entries is an array, so we have to destructure key and values
    for (let [key, values] of Object.entries(info)) {
      // so now we append key to the updateInfo object eg: {key:value} => {contact: "02020303030"}
      updateInfo[key] = values;
    }

    // then we return the modified userInfo 
    return updateInfo;
  }

  showAvailUsers() {
    console.log("Available users", this.database);
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

/**
 * show all users in the database
 */
// authService.showAvailUsers();
