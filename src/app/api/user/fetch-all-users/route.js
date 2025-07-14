import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import User from '@/models/User';
import { protectRoute } from '@/lib/protectedRoute';

export async function GET(req) {
  try {
    await dbConnect();
    const user = protectRoute(req, ['recruiter', 'Super_Admin']);
    console.log("inside protectedroute" , user)
    const users = await User.find();

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: error.statusCode || 500 });
  }
}
