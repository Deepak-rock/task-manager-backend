const express = require("express");
const router = express.Router();

module.exports = (taskRepo) => {
  router.get("/", async (_, res) => {
    res.send("Hello World!")
  })
  // GET /tasks
  router.get("/tasks", async (_, res) => {
    const tasks = await taskRepo.find();
    res.json(tasks);
  });

  // POST /tasks
  router.post("/tasks", async (req, res) => {
    const task = taskRepo.create(req.body);
    const result = await taskRepo.save(task);
    res.status(201).json(result);
  });

  // PUT /tasks/:id
  router.put("/tasks/:id", async (req, res) => {
    await taskRepo.update(req.params.id, req.body);
    const updated = await taskRepo.findOneBy({ id: req.params.id });
    res.json(updated);
  });

  // DELETE /tasks/:id
  router.delete("/tasks/:id", async (req, res) => {
    await taskRepo.delete(req.params.id);
    res.status(204).end();
  });

  return router;
};
