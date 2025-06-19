const express = require("express");
const router = express.Router();

module.exports = (taskRepo) => {
  router.get("/", async (_, res) => {
    res.send("Hello World!")
  })

  // GET /tasks
  router.get("/tasks", async (_, res) => {
    try {
      const tasks = await taskRepo.find();
      res.json(tasks);
    }
    catch (err) {
      res.status(500).json({error: 'Failed to fetch task manager data'});
    }
  });

  // GET /task/id
  router.get("/task/:id", async (req, res) => {
    try {
      const task = await taskRepo.findOneBy({ id: req.params.id });
      if (!task) return res.status(404).json({ error: 'Task not found' });
  
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  // POST /tasks
  router.post("/tasks", async (req, res) => {
    try {
      const task = taskRepo.create(req.body);
      const result = await taskRepo.save(task);
      res.status(201).json(result);
    }
    catch (err) {
      console.error('Creation failed', err);
      res.status(500).json({error: 'Failed to create a task'});
    }
  });

  // PUT /tasks/:id
  router.put("/tasks/:id", async (req, res) => {
    try {
      await taskRepo.update(req.params.id, req.body);
      const updated = await taskRepo.findOneBy({id: req.params.id});
      res.status(201).json(updated);
    }
    catch (err) {
      console.error('Updation failed', err);
      res.status(500).json({error: 'Failed to update a task'});
    }
  });

  // DELETE /tasks/:id
  router.delete("/tasks/:id", async (req, res) => {
    try {
      await taskRepo.delete(req.params.id);
      res.status(204).end();
    }
    catch (err) {
      console.error('Deletion failed', err);
      res.status(500).json({error: 'Failed to delete a task'});
    }
  });

  return router;
};
