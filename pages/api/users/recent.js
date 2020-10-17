import connectdb from "../../../utils/api/connectdb";
//   import imageUploader from "../../utils/api/cloudinary";
import User from "../../../utils/api/models/user";
export default async (req, res) => {
  await connectdb();
  // console.log(req.)
  if (req.method === "POST") {
    //handle post request to /api/user
    //add new user
    res.status(404).json("not found");
  } else if (req.method === "GET") {
    // const sorter = { createdAt: -1 };
    User.find({})
      //   .sort(sorter)
      .then((user) => {
        console.log(user);
        res.json(user);
      })
      .catch((err) => res.json({ err }));
  }
};
//   const {
//     query: { id },
//   } = req;

//   res.end(`Post: ${id}`);
