import { NextResponse } from "next/server";
import collection from './collection.json'

export async function GET(request) {
    console.log({url: request.url, request});
    return NextResponse.json(collection);
}

export async function POST(request) {
    let { title, body, message } = await request.json();

    body = body.replace(/"/g,'|&');

    const template = {
      id: Date.now().toString(),
      title,
      body,
      message,
    };

    collection.push(template);
    console.log({ templateFromServer: body });

    return NextResponse.json({ template, status: 201 });
  }