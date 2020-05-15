const express = require("express");
const router = express.Router();
const auth = require("../middleware/validation").auth;
const {check, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const normalize = require("normalize-url");
const Profile = require("../models/Profile");
const User = require("../models/User");
const Post = require("../models/Posts");

router.get("/me", 
auth,
async (req,res) => {

    try {
        const profile = await Profile.findOne({ user: req.user.id}).populate("user", ["name","avatar"]);

        if(!profile){
            return res.status(404).json({Message: "Profile not found"});
        }

        res.json(profile);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: "Error"});
    }
});

router.post("/",
      auth,
      [
        check("status", "Status is required").notEmpty(),
        check("skills", "Skills is required").notEmpty()
      ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {
        company,
        location,
        website,
        bio,
        skills,
        status,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook
      } = req.body;
  
      const profileFields = {
        user: req.user.id,
        company,
        location,
        website: website === '' ? '' : normalize(website, { forceHttps: true }),
        bio,
        skills: Array.isArray(skills)
          ? skills
          : skills.split(",").map((skill) => ' ' + skill.trim()),
        status

      };
  
      // Build social object and add to profileFields
      const socialfields = { youtube, twitter, instagram, linkedin, facebook };
  
      for (const [key, value] of Object.entries(socialfields)) {
        if (value && value.length > 0)
          socialfields[key] = normalize(value, { forceHttps: true });
      }
      profileFields.social = socialfields;
  
      try {
        // Using upsert option (creates new doc if no match is found):
        let profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true, upsert: true }
        );
        res.json(profile);
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
    }
  );
  
  router.get("/",
   async (req, res) => {
    try {
      const profiles = await Profile.find().populate("user", ["name", "avatar"]);
      res.json(profiles);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error");
    }
  });
  
  router.get("/user/:user_id", 
  async ({ params: { user_id } }, res) => {
    // check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(user_id))
      return res.status(400).json({ Message: "Invalid user ID" });
  
    try {
      const profile = await Profile.findOne({
        user: user_id
      }).populate("user", ["name", "avatar"]);
  
      if (!profile) return res.status(404).json({ Message: "Profile not found" });
  
      return res.json(profile);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Error" });
    }
  });
  

  router.delete("/",
   auth,
    async (req, res) => {
    try {
      // Remove user posts
      await Post.deleteMany({ user: req.user.id });
      // Remove profile
      await Profile.findOneAndRemove({ user: req.user.id });
      // Remove user
      await User.findOneAndRemove({ _id: req.user.id });
  
      res.json({ Message: "User deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error");
    }
  });
  

  router.put("/experience",
      auth,
      [
        check("title", "Title is required").notEmpty(),
        check('company', "Company is required").notEmpty(),
        check("from", "From date is required and needs to be from the past").notEmpty()
          .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
      ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
      } = req.body;
  
      const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
      };
  
      try {
        const profile = await Profile.findOne({ user: req.user.id });
  
        profile.experience.unshift(newExp);
  
        await profile.save();
  
        res.json(profile);
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
    }
  );
  
  
  router.delete("/experience/:exp_id", 
  auth,
   async (req, res) => {
    try {
      const foundProfile = await Profile.findOne({ user: req.user.id });
  
      foundProfile.experience = foundProfile.experience.filter(
        (exp) => exp._id.toString() !== req.params.exp_id
      );
  
      await foundProfile.save();
      return res.status(200).json(foundProfile);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ Message: "Error" });
    }
  });
  

  router.put("/education",
      auth,
      [
        check("school", "School is required").notEmpty(),
        check("degree", "Degree is required").notEmpty(),
        check('fieldofstudy', "Field of study is required").notEmpty(),
        check("from", "From date is required and needs to be from the past").notEmpty()
          .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
      ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
      } = req.body;
  
      const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
      };
  
      try {
        const profile = await Profile.findOne({ user: req.user.id });
  
        profile.education.unshift(newEdu);
  
        await profile.save();
  
        res.json(profile);
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
    }
  );
  
  router.delete("/education/:edu_id",
   auth,
    async (req, res) => {
    try {
      const foundProfile = await Profile.findOne({ user: req.user.id });
      foundProfile.education = foundProfile.education.filter(
        (edu) => edu._id.toString() !== req.params.edu_id
      );
      await foundProfile.save();
      return res.status(200).json(foundProfile);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Error" });
    }
  });
  
  module.exports = router;