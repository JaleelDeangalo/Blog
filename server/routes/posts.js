const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/validation").auth;
const Post = require("../models/Posts");
const User = require("../models/User");
const checkObjectId = require("../middleware/checkObjectId");

// make a post
router.post("/post", 
auth,
[
    check("text", "Text is required").notEmpty()
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try {
        const user = await User.findById(req.user.id).select("-password");

        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        });

        const post = await newPost.save();
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: "Server Error"});
    }
});

router.get("/post",
 auth,
  async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({Message: "Server Error"});
  }
});

// Get specific post by id
router.get("/post/:id",
 auth, 
 checkObjectId,
  async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if(!post){
        return res.status(404).json({Message: "Post not found"});
    }

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
});

router.delete("/post/:id",
 auth,
 checkObjectId, 
 async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ Message: "User not authorized" });
    }

    await post.remove();

    res.json({ Message: "Post successfully removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({Message: "Server Error"});
  }
});


// <-- likes --> //

router.put("/like/:id",
 auth,
checkObjectId,
  async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (post.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ Message: "Post already has a like" });
    }
    post.likes.unshift({ user: req.user.id });

    await post.save();

    return res.json(post.likes);
  } catch (error) {
    console.log(error);
    res.status(500).json({Message: "Server Error"});
  }
});

router.put("/unlike/:id",
auth,
checkObjectId,
 async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ Message: "Post has no likes"});
    }
    // remove the like
    post.likes = post.likes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    await post.save();

    return res.json(post.likes);
  } catch (error) {
    console.log(error);
    res.status(500).json({Message: "Server Error"});
  }
});


router.post("/comment/:id",
  auth,
  checkObjectId,
 [
  check("text", "Text is required").notEmpty()
 ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (error) {
        console.log(error);
      res.status(500).json({Message: "Server Error"});
    }
  }
);

router.delete("/comment/:id/:comment_id",
 auth,
  async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ Message: "Comment not found" });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ Message: "User not authorized" });
    }

    post.comments = post.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );

    await post.save();
        res.json({Message: "Comment Deleted"});
    return res.json(post.comments);
  } catch (error) {
    console.log(error);
    return res.status(500).json({Message: "Server Error"});
  }
});

module.exports = router;
