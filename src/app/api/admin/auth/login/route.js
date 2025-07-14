import dbConnect from "@/utils/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
// Handle preflight OPTIONS request (for CORS)
export async function OPTIONS() {
  const res = NextResponse.json({}, { status: 200 });
  setCorsHeaders(res);
  return res;
}

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  await dbConnect();

  const { email, password } = await req.json();

  if (!email || !password) {
    const res = NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    setCorsHeaders(res);
    return res;
  }

  const admin = await Admin.findOne({ email });

  if (!admin) {
    const res = NextResponse.json({ error: "Account does not exist" }, { status: 404 });
    setCorsHeaders(res);
    return res;
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    const res = NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    setCorsHeaders(res);
    return res;
  }

  const token = jwt.sign(
    { userId: admin._id, email: admin.email, role: admin.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  const response = NextResponse.json({
    message: 'Login successful',
    token,
    admin
  });

  response.cookies.set({
    name: 'auth_token',
    value: token,
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7
  });

  setCorsHeaders(response);
  return response;
}

function setCorsHeaders(res) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
}
