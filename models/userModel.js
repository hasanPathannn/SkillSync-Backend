import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    googleId: { type: String, unique: true, sparse: true }, // For Google OAuth
    skillsToTeach: [{ type: String }], // Skills the user can teach
    skillsToLearn: [{ type: String }], // Skills the user wants to learn
    bio: { type: String, default: "" },
    experience: { type: String, default: "" },
    availability: { type: String, default: "" },
    tokens: { type: Number, default: 0 }, // Skill Tokens
    xp: { type: Number, default: 0 }, // Gamification XP
    badges: [{ type: String }], // Earned badges
    createdAt: { type: Date, default: Date.now },
  });

const User= mongoose.model("User", userSchema);

export default User;