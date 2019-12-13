let getUsers = numberOfUsers => {
  let usersArr = [];
  for (let i = 1; i <= numberOfUsers; i++) {
    users.push({ id: i, name: `User ${i}` });
  }

  return usersArr;
};

export const users = getUsers(100);
