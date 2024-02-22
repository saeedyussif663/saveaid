import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("saveaid");

    const res = await db.collection("upcoming_projects").find({}).toArray();

    return NextResponse.json(res);
  } catch (e) {
    console.log(e);
  }
}
