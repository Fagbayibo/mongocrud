const mongoose = require("mongoose");

// Database connection
const url = "mongodb+srv://fagbayibo:Fagbayibo%402003@cluster0.xjrbkvg.mongodb.net/";
mongoose
  .connect(url)
  .then(() => console.log("Database connected succefully"))
  .catch((error) => console.error("Database Error : ", error));

//   User Mongoose Scheme
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: {type: Date, default: Date.now},
});

// User Model
const User = mongoose.model("User", userSchema);

// Functions

async function runQueryExamples() {
  try {
    // Create new Document

    const newUser = new User({
      name: "Updated Doe",
      email: "Updated@gmail.com",
      age: 25,
      isActive: false,
      tags: ["Deleted Business Idiot"],
    });
    console.log("created new user", newUser);
    await newUser.save();

    // Get all documents
    // const allUsers = await User.find()
    // console.log("All users", allUsers)

    // Get specific Document
    // const getActiveFalseUsers = await User.find({isActive: true});
    // console.log("Single User", getActiveFalseUsers);

    // Get specific by findOne
    // const getJohnDoe = await User.findOne({name: " John Doe"})
    // console.log(getJohnDoe);

    // // Get lastCreated user by Id
    //     const getLastCreatedUserByID = await User.findById(newUser._id)
    //     console.log('====================================');
    //     console.log(getLastCreatedUserByID);
    //     console.log('====================================');

    // Get single User By ID
    // const getUserByID = await User.findById({_id : "68068f511c49c3b14a2b776c"})
    // console.log('====================================');
    // console.log(getUserByID);
    // console.log('====================================');

    // Get selected fields
    // const selectedFields = await User.find().select('name email -_id')
    // console.log('====================================');
    // console.log(selectedFields);
    // console.log('====================================');

    // For pagination
    // const limitedUsers = await User.find().limit(5).skip(1);
    // console.log('====================================');
    // console.log(limitedUsers);
    // console.log('====================================');

    // Soring in descending order (-1) or ascending Order(1)
    // const sortedUsers = await User.find().sort({age: -1})
    // console.log('====================================');
    // console.log(sortedUsers);
    // console.log('====================================');

    // To count all documents available by specific
    // const countDocuments = await User.countDocuments({isActive :  true})
    // console.log('====================================');
    // console.log(countDocuments);
    // console.log('====================================');

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Delete a User

    // const deleteUser = await User.findByIdAndDelete(newUser._id);

    // console.log("====================================");
    // console.log(deleteUser);
    // console.log("====================================");

    // Update User
    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: {age: 100},
        $push: {tags: "Updated"},
      },
      {new: true}
    );
    console.log("====================================");
    console.log("Updated User", updateUser);
    console.log("====================================");
  } catch (error) {
    console.log("function errors", error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
