import mongoose from "mongoose";
const TipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
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
  link: {
    type: Object,
  },
  imageData: {
    type: Object,
    // required:true,
  },
  code: {
    type: Object,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Tip = mongoose.models.Tip || mongoose.model("Tip", TipSchema); // mongoose.model("User", userSchema);
export default Tip;
