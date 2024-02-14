import { NextResponse } from "next/server";

export async function GET(requst: Request) {
  if (requst.method === "GET") {
    const res = await fetch(
      "https://saveaid-990d8-default-rtdb.firebaseio.com/projects/done.json"
    );
    const data = await res.json();
    console.log(data);

    return NextResponse.json({ status: 200 });
  }
}
