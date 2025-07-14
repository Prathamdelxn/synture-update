import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }, // e.g., "super_admin" or "moderator"
  },
  { timestamps: true }
);

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
