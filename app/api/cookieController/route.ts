import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({ success: true });
  
  response.cookies.set('meu-cookie', 'valor', {
    httpOnly: true, 
    secure: false,
    sameSite: true,
    path: '/',
  });
  
  return response;
}