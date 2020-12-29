interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

const newUser: User = {
  id: 123,
  username: 'usernameHere',
  firstName: 'Sean',
  lastName: 'McQuaid',
};

console.log(newUser);