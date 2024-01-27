import { NextResponse } from "next/server";
import collection from './collection.json'

export async function GET(request) {
    console.log({url: request.url, request});
    return NextResponse.json(collection);
}

export async function POST(request) {
    const { body, message } = await request.json();
    const template = {
      id: Date.now().toString(),
      body,
      message,
    };
  
    collection.push(template);
    console.log({ templateFromServer: template });
    return NextResponse.json({ template, status: 201 });
  }