/* this class get user info*/
class UserEntity {
  constructor({ username, fullname, email, password }) {
    this._username = username;
    this._fullname = fullname;
    this._email = email;
    this._password = password;
  }

  getUsername() {
    return this._username;
  }

  getFullName() {
    return this._fullname;
  }

  getUserEmail() {
    return this._email;
  }

  getUserPassword() {
    return this._password;
  }
}

// instantiate user entity
const userEntity = new UserEntity({
  username: "venividivici",
  fullname: "Vincent Asamoah",
  email: "3vdatacon",
  password: 1234,
});

// print to console

console.log(userEntity.getUsername());

console.log(userEntity.getFullName());

console.log(userEntity.getUserEmail());

console.log(userEntity.getUserPassword());
