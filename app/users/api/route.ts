import clientPromise from "@/lib/mongodb";
import { ok } from "assert";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password, firstName, lastName, email } =
    await request.json();
  if (password.length <= 6) {
    return NextResponse.json({
      ok: false,
      message: "password should have more than 6 characters",
    });
  }

  const client = await clientPromise;

  const db = client.db("saveaid");

  // check if user name already exists
  const user = await db.collection("users").find({ username }).toArray();
  if (user.length > 0) {
    return NextResponse.json({
      ok: false,
      message: "username already exists",
    });
  }

  // check if email already exists
  const emailAddress = await db.collection("users").find({ email }).toArray();
  if (emailAddress.length > 0) {
    return NextResponse.json({
      ok: false,
      message: "email already exists",
    });
  }

  const res = await db.collection("users").insertOne({
    firstName,
    lastName,
    email,
    username,
    password,
  });

  if (!res.acknowledged) {
    return NextResponse.json({
      ok: false,
      message: "an error occured creating your account. try again!!!",
    });
  }

  return NextResponse.json({
    ok: true,
    message: "accoount created successfully",
  });
}
