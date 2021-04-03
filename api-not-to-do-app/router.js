import express from "express";
const router = express.Router();

import {
  getTasks,
  insertTask,
  deleteTasks,
  updateToDo,
} from "./models/tasklists/Tasklist.model.js";

router.get("/", async (req, res) => {
  const result = await getTasks();
  console.log(result);
  res.json({
    status: "success",
    message: "Here are all the searched task lists",
    result,
  });
});
// router.get("*", (req, res, next) => {
// 	console.log("user is verified");
// 	next();
// });

// router.get("/", (req, res) => {
// 	res.send("Now you have reached the get");
// });
// router.get("/new", (req, res) => {
// 	res.send("Now you have reached the new");
// });

// create
router.post("/", async (req, res) => {
  console.log(req.body);

  const result = await insertTask(req.body);

  if (result._id) {
    return res.json({
      status: "success",
      message: "Your new task is added",
      result,
    });
  }
  res.json({
    status: "error",
    message: "Unable to add your new task, Please try again later",
  });
});
router.patch("/", async (req, res) => {
  const { data } = req.body;
  try {
    const result = await updateToDo(data);
    res.json({
      status: "success",
      message: "task had been updated",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.put("/", (req, res) => {
  
  res.send("Now you have reached the put");
});

router.delete("/", async (req, res) => {
  try {
    const ids = req.body;
    console.log(ids);

    const result = await deleteTasks(ids);

    if (result?.deletedCount) {
      return res.json({
        status: "success",
        message: "your data has been deleted",
      });
    }
    res.json({
      status: "success",
      message: "nothing to delete",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }

  // call function that delete the data from our database
});

export default router;
