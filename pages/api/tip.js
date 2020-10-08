import connectdb from "../../utils/api/connectdb";
import imageUploader from "../../utils/api/cloudinary";
import Tip from "../../utils/api/models/tip";
export default async (req, res) => {
  await connectdb();
  // console.log(req.)
  if (req.method === "POST") {
    //handle post request to /api/user
    //add new user
    res.status(404).json("not found");
    // const { title, body, image } = req.body.tip;
    // const imageData = await imageUploader(image);
    // console.log({ imageData });
    // Tip.create({
    //   title,
    //   body,
    //   imageData,
    // })
    //   .then((user, err) => {
    //     res.json({ user, err });
    //   })
    //   .catch((err) => console.log({ err }));
  } else if (req.method === "GET") {
    // Handle any other HTTP method
    // if get request return all users
    // const { id } = req.query;
    console.log(req.query);
    Tip.find({ _id: "5f65c58faa45ba4e38b6605d" })
      .then((tip, err) => {
        res.json({ tip, err });
      })
      .catch((err) => res.json({ err }));
  }
};
