const express = require("express");
const router = express.Router();
const Projects = require("../models/projects.model");

// GET all projects
router.get("/projects", async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST create a new project
router.post("/projects", async (req, res) => {
  try {
    const project = req.body;
    const newProject = await Projects.create(project);
    res.status(201).json(newProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE a project by ID
router.delete("/projects/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    const deletedProject = await Projects.findByIdAndDelete(projectId);
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(deletedProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE (PUT) a project by ID
router.put("/projects/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    const updatedProject = await Projects.findByIdAndUpdate(projectId, req.body, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
