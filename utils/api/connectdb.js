import mongoose from "mongoose";

export default async () => {
  if (mongoose.connections[0].readyState) return;
  // Using new database connection
  const dburi =
    process.env.NODE_ENV == "production"
      ? process.env.MONGODB_PROD
      : process.env.MONGODB_PROD;
  await mongoose
    .connect(dburi, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log("database connected and running successfully"))
    .catch((err) => console.log(err));
};
