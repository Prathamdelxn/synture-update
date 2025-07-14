import dbConnect from "@/utils/db";
import Recruiter from "@/models/Recruiter";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET;

export async function OPTIONS() {
  const res = NextResponse.json({}, { status: 200 });
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}

export async function POST(req) {
  await dbConnect();

  const { contactEmail, password } = await req.json();

  if (!contactEmail || !password) {
    const res = NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
    res.headers.set("Access-Control-Allow-Origin", "*");
    return res;
  }

  const recruiter = await Recruiter.findOne({ contactEmail });
  if (!recruiter) {
    const res = NextResponse.json({ error: "Recruiter not found" }, { status: 404 });
    res.headers.set("Access-Control-Allow-Origin", "*");
    return res;
  }

  const isMatch = await bcrypt.compare(password, recruiter.password);
  if (!isMatch) {
    const res = NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    res.headers.set("Access-Control-Allow-Origin", "*");
    return res;
  }


  console.log("recruiter._id:", recruiter._id);


  const token = jwt.sign(
    {
      userId: recruiter._id.toString(), 
      email: recruiter.contactEmail,
      role: recruiter.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  const safeRecruiter = {
    _id: recruiter._id,
    companyName: recruiter.companyName,
    contactEmail: recruiter.contactEmail,
    contactPhone: recruiter.contactPhone,
    companyWebsite: recruiter.companyWebsite,
    companyLogo: recruiter.companyLogo,
    description: recruiter.description,
    address: recruiter.address,
    role: recruiter.role, // keep frontend consistent
    token,
  };

  const response = NextResponse.json(
    { message: "Login successful", recruiter: safeRecruiter },
    { status: 200 }
  );

  response.cookies.set({
    name: 'auth_token',
    value: token,
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === 'production', // 🔒 secure in production
  });

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
