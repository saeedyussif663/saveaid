import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("saveaid");

    const users = await db
      .collection("Users")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(users);
  } catch (e) {
    console.error(e);
  }
}
