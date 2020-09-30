import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    // required:true,
  },
  website: {
    type: String,
    // required:true,
  },
  profile_url: {
    type: Object,
  },
});
const User = mongoose.models.User || mongoose.model("User", UserSchema); // mongoose.model("User", userSchema);
export default User;
