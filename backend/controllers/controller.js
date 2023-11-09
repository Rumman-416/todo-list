const todoModel = require("../models/todoModle");

//show todo lists
async function showList(req, res) {
  try {
    const todo = await todoModel.find();
    res.status(201).json({
      success: true,
      todo,
    });
  } catch (error) {
    console.log(error);
  }
}

//post todo list
async function postList(req, res) {
  try {
    const todo = await todoModel.create(req.body);

    res.status(201).json({
      success: true,
      todo,
    });
  } catch (error) {
    console.log(error);
  }
}

//update list
async function updateList(req, res) {
  try {
    let todo = await todoModel.findById(req.params.id);
    if (!todo) {
      res.status(400).json({ success: false, Message: " Item not found" });
    }

    todo = await todoModel.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      success: true,
      todo,
    });
  } catch (error) {
    console.log(error);
  }
}

//delete list
async function deleteList(req, res) {
  try {
    let todo = await todoModel.findById(req.params.id);
    if (!todo) {
      res.status(400).json({ success: false, Message: " Item not found" });
    }

    await todoModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      Message: " Item Deleted",
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  showList,
  postList,
  updateList,
  deleteList,
};
