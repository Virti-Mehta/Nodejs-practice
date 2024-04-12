require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("65f291544d06aff07e72d229")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const tasks = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({completed: false});
  return count;
};

deleteTaskAndCount("65f2916e1e1d4f3cdbe7400d").then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
})
