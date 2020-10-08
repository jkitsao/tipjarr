import connectdb from "../../../utils/api/connectdb";
//   import imageUploader from "../../utils/api/cloudinary";
import Tip from "../../../utils/api/models/tip";
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
    Tip.findOne({ _id: id })
      .then((tip, err) => {
        res.json({ tip, err });
      })
      .catch((err) => res.json({ err }));
  }
};
//   const {
//     query: { id },
//   } = req;

//   res.end(`Post: ${id}`);
