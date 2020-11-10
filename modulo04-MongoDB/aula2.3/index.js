import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
