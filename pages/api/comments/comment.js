import connectdb from "../../../utils/api/connectdb";
// import imageUploader from "../../utils/api/cloudinary";
import Comment from "../../../utils/api/models/comment";
export default async (req, res) => {
  await connectdb();
  if (req.method === "POST") {
    const { body, user, tipId } = req.body.comment;
    // const imageData = image ? await imageUploader(image) : {};
    console.log(req.body);
    Comment.create({
      body,
      user,
      tipId,
    })
      .then((tip) => {
        res.json({ tip });
      })
      .catch((err) => console.log({ err }));
  } else if (req.method === "GET") {
    // Handle any other HTTP method
    // if get request return all users
    res.json({ success: false });
  }
};
