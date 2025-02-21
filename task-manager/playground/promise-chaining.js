require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("65f28e56e104c0eb81b96b2b", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
}

updateAgeAndCount('65f286d33baf4f9441394b85', 2).then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
})
