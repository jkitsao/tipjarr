import connectdb from "../../utils/api/connectdb";
import imageUploader from "../../utils/api/cloudinary";
import Tip from "../../utils/api/models/tip";
export default async (req, res) => {
  await connectdb();
  if (req.method === "POST") {
    //handle post request to /api/user
    //add new user
    // res.json(req.body);
    const { title, body, image, links, user, code } = req.body.tip;
    const imageData = image ? await imageUploader(image) : {};
    console.log(req.body);
    Tip.create({
      title,
      body,
      user,
      code,
      link: links,
      imageData,
    })
      .then((tip) => {
        res.json({ tip });
      })
      .catch((err) => console.log({ err }));
  } else if (req.method === "GET") {
    // Handle any other HTTP method
    // if get request return all users
    const sorter = { createdAt: -1 };
    Tip.find({})
      .sort(sorter)
      .then((tips, err) => {
        res.json({ tips, err });
      })
      .catch((err) => res.json({ err }));
  }
};
