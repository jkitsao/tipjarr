import connectdb from "../../utils/api/connectdb";
import imageUploader from "../../utils/api/cloudinary";
import Tip from "../../utils/api/models/tip";
export default async (req, res) => {
  await connectdb();
  if (req.method === "POST") {
    //handle post request to /api/user
    //add new user
    // res.json(req.body);
    const { title, body, image } = req.body.tip;
    const imageData = await imageUploader(image);
    console.log({ imageData });
    Tip.create({
      title,
      body,
      imageData,
    })
      .then((user, err) => {
        res.json({ user, err });
      })
      .catch((err) => console.log({ err }));
  } else if (req.method === "GET") {
    // Handle any other HTTP method
    // if get request return all users
    Tip.find({})
      .then((tips, err) => {
        res.json({ tips, err });
      })
      .catch((err) => res.json({ err }));
  }
};
