const availUser = [];
class Authentication {
  constructor({ username, name, email, password }) {
    this._username = username;
    this._name = name;
    this._email = email;
    this._password = password;
  }

  userRegistration() {
    const newUser = {
      username: this._username,
      name: this._name,
      email: this._email,
      password: this._password,
    };

    if (Object.keys(newUser).length > 0) {
      availUser.push(newUser);
      console.log("User Successfuly added", availUser);
    } else {
      throw new Error("User do not exist");
    }
  }

  loginUser({ username, password }) {
    console.log("username and password", { username, password });
    if (username === 0 && password === 0) {
      console.log("provide user credentials");
    }
    const result = availUser.find((d) => d.username === username);
    if (result && Object.keys(result).length > 0) {
      if (result.password === password) {
        console.log("login success");
      } else {
        console.log("password mismatch");
      }
    } else {
      throw new Error("user not found");
    }
  }
}

const reqBody = {
  username: "3V",
  name: "Vincent",
  email: "vincentasaomah@gmail.com",
  password: 1234,
};

const authentication = new Authentication(reqBody);
authentication.userRegistration();

const reqLogin = {
  username: "3V",
  password: 1234,
};

authentication.loginUser(reqLogin);
