import connectdb from "../../utils/api/connectdb";
import User from "../../utils/api/models/user";
import imageUploader from "../../utils/api/cloudinary";
export default async (req, res) => {
  await connectdb();
  if (req.method === "POST") {
    //handle post request to /api/user
    //add new user
    // res.json(req.body);
    const { name, username, email, bio, image, uid } = req.body.profileData;
    const profile_url = await imageUploader(image);
    User.create({
      name,
      username,
      email,
      bio,
      uid,
      profile_url,
    })
      .then((user, err) => {
        res.json({ user, err });
      })
      .catch((err) => console.log({ err }));
  } else if (req.method === "GET") {
    // Handle any other HTTP method
    // if get request return all users
    User.find({})
      .then((users, err) => {
        res.json({ users, err });
      })
      .catch((err) => res.json({ err }));
  }
};
