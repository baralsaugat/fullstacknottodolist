import Tasklist from "./Tasklists.schema.js";

export const insertTask = (newTask) => {
  return new Promise((resolve, reject) => {
    try {
      Tasklist(newTask)
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });
};

// export const readTask = (readTask) =>
// return new Promise ((resolve,  reject) =>
// try{
//     Tasklist(readTask)
//     read()

// })

export const getTasks = () => {
  return new Promise((resolve, reject) => {
    try {
      Tasklist.find()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const deleteTasks = (ids) => {
  if (!ids.length) return false;

  return new Promise((resolve, reject) => {
    try {
      Tasklist.deleteMany({
        _id: {
          $in: ids,
        },
      })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const updateToDo = ({ _id, todo }) => {
  return new Promise((resolve, reject) => {
    try {
      Tasklist.findByIdAndUpdate(_id, { $set: { todo } }, { new: true })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
