const router = require('express').Router();
const Projects = require("../models/projectModel")

router.route("/projects").get((req, res) => {
    Projects.find((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
});

module.exports = router;