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
      console.log(`Successfully registered user`, availUser);
    } else {
      throw new Error("User does not exit");
    }
  }
}

const reqBody = {
  username: "venividivic",
  name: "Vincent Asamoah",
  email: "3vdata@gmail.com",
  password: 1234,
};

const authentication = new Authentication(reqBody);
authentication.userRegistration();
