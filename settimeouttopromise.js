function fetchUser(id, callback) {
  setTimeout(() => {
    console.log("Fetching user with id:", id);
    callback({ id: id, name: "Jyoti" });
  }, 1000);
}

function showUser(user) {
  console.log("User data:", user);
}

fetchUser(1, showUser);

function profetchuser(id) {
  return new Promise((res, req) => {
    setTimeout(() => {
      console.log("Fetching user with id:", id);
      res({ id: id, name: "Jyoti" });
    }, 1000);
  });
}

profetchuser(1).then((user)=>console.log("User data:" ,user ))


async function asyncuser(id){
    const user = await  profetchuser(id)
    console.log("User data:" ,user )
}
asyncuser(1)