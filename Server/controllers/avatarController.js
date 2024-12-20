const Avatar = require("../models/avatars");

async function avatarController(req, res) {
  const { link } = req.body;
  if (!link) {
    return res.status(400).send({ message: "Link is required" });
  }
  try {
    const newAvatar = new Avatar({ link });
    await newAvatar.save();
    return res.status(201).send({ message: "Avatar added successfully" });
  } catch (error) {
    console.error("Error in avatarController: ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
}

async function getAllAvatars(req, res) {
  try {
    // Fetch all avatars from the database
    const avatars = await Avatar.find();
    // Return the list of avatars
    return res.status(200).json({ success: true, avatars });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = { avatarController, getAllAvatars };
