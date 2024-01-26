import { NextResponse } from "next/server";
import collection from './collection.json'

export async function GET(request) {
    console.log({url: request.url, request});
    return NextResponse.json(collection);
}