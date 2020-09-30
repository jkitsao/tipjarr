import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// export default { cloudinary };

const imageUploader = async (filestring) => {
  try {
    // const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(filestring);
    console.log(uploadResponse);
    // res.json({ msg: "uploaded successfully" });
    return uploadResponse;
  } catch (err) {
    console.error({ err });
    // res.status(500).json({ err: "Something went wrong" });
    return err;
  }
};
export default imageUploader;
