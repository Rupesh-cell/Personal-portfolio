const express = require("express");
const router = express.Router();
const Tech = require("../models/techmastered.model");

router.get("/techs", async (req, res) => {
    try {
      const techs = await Tech.find();
      res.status(200).json(techs);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post("/techs", async (req, res) => {
    try {
      const tech = new Tech({
        title: req.body.title,
        progress: req.body.progress,
        image: req.body.image,
      });
  
      await tech.save();
      res.status(201).json(tech);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put("/techs/:id", async (req, res) => {
    try {
      const tech = await Tech.findById(req.params.id);
  
      if (!tech) {
        return res.status(404).json({
          message: "Tech not found",
        });
      }
  
      tech.title = req.body.title;
      tech.progress = req.body.progress;
      tech.image = req.body.image;
  
      await tech.save();
      res.status(200).json(tech);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete("/techs/:id", async (req, res) => {
    try {
      const tech = await Tech.findByIdAndDelete(req.params.id);
  
      if (!tech) {
        return res.status(404).json({
          message: "tech not found",
        });
      }
  
      res.status(200).json({
        message: "tech deleted",
      });
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({
        message: "An error occurred while deleting the tech",
      });
    }
  });

  module.exports=router;