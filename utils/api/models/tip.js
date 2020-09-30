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
  likes: {
    type: Number,
    default: 0,
  },
  imageData: {
    type: Object,
    // required:true,
  },
  link: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Tip = mongoose.models.Tip || mongoose.model("Tip", TipSchema); // mongoose.model("User", userSchema);
export default Tip;
