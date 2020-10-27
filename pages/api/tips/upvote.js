import connectdb from "../../../utils/api/connectdb";
import Tip from "../../../utils/api/models/tip";
export default async (req, res) => {
  await connectdb();
  if (req.method === "POST") {
    console.log(req.body);
    const { userid, tipid } = req.body.vote;
    Tip.findOne({ _id: tipid }, (err, tip) => {
      if (err) return res.json({ success: false, message: "tip not found" });
      if (tip.upvotes.includes(userid)) {
        const index = tip.upvotes.indexOf(userid);
        tip.upvotes.splice(index, 1);
        tip.save((err, tip) => {
          if (err) res.json({ success: false, message: "an error occured" });
          res.json(tip);
        });
      } else {
        //add the user to the array
        tip.upvotes.push(userid);
        tip.save((err, tip) => {
          if (err) res.json({ success: false, message: "could not upvote " });
          res.json(tip);
        });
        // res.json({ success: true, message: "upvoted" });
      }
    });
  }
};
