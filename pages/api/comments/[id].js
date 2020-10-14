import connectdb from "../../../utils/api/connectdb";
//   import imageUploader from "../../utils/api/cloudinary";
import Comment from "../../../utils/api/models/comment";
export default async (req, res) => {
  await connectdb();
  // console.log(req.)
  if (req.method === "POST") {
    //handle post request to /api/user
    //add new user
    res.status(404).json("not found");
  } else if (req.method === "GET") {
    const {
      query: { id },
    } = req;
    console.log(id);
    const sorter = { createdAt: -1 };
    Comment.find({ tipId: id })
      .sort(sorter)
      .then((comments) => {
        res.json({ comments });
      })
      .catch((err) => res.json({ err }));
  }
};
