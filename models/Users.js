const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
      type: String,
      match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid e-mail address"],
      unique: true,
  },
  plans: [
    {
      type: Schema.Types.ObjectId,
      ref: "Plans"
    }
  ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
