import connectdb from "../../../utils/api/connectdb";
// import imageUploader from "../../utils/api/cloudinary";
import Comment from "../../../utils/api/models/comment";
export default async (req, res) => {
  await connectdb();
  if (req.method === "POST") {
    const { commentId } = req.body;
    console.log(req.body.id);
    Comment.findByIdAndDelete({ _id: commentId })
      .then((comments) => {
        res.json({ comments });
      })
      .catch((err) => res.json({ err }));
  } else if (req.method === "GET") {
    // Handle any other HTTP method
    // if get request return all users
    res.json({ success: false });
  }
};
