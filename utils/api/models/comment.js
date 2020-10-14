import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  tipId: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Comment =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema); // mongoose.model("User", userSchema);
export default Comment;
