import taskModles from "./../models/todolist.models.js";
import expressAsyncHandler from "express-async-handler";
import crypto from "crypto";

export const taskCreateControllers = expressAsyncHandler(async (req, res) => {
    const { title, description } = req.body;

    const id = parseInt(crypto.randomBytes(5).toString("hex"), 16);

    const task = new taskModles({
      id,
      title,
      description,
      owner: req.user.id,
    });

    task.save();

    res.status(201).json({
        "id": id,
        "title": title,
        "description": description
    });
});

export const taskUpdateControllers = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const task = await taskModles.findOne({ id });

  if(!task) return res.status(400).json({ "message": "Wrong id" });

  if(task.owner != req.user.id) return res.status(400).json({ "message": "Forbidden" });

  await taskModles.updateOne({id}, {title, description});

  res.status(200).json({
    "id": +id,
    "title": title,
    "description": description
  });
});

export const taskDeleteControllers = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await taskModles.findOne({ id });

  if(!task) return res.status(400).json({ "message": "Wrong id" });

  if(task.owner != req.user.id) return res.status(400).json({ "message": "Forbidden" });

  await taskModles.deleteOne({ id });

  res.status(200).json({ message: "Done delete task"})
});

export const taskGetControllers = expressAsyncHandler(async (req, res) => {
  let { page = 1, limit = 30 } = req.query;

  page = parseInt(page, 10);
  limit = parseInt(limit, 10);

  const skip = (page - 1) * limit;

  const count = await taskModles.countDocuments();
  const tasks = await taskModles.find({ owner: req.user.id })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .select("-__v -_id -owner")
  
  res.status(200).json({
      data: tasks,
      page,
      limit,
      total: count
  });
});