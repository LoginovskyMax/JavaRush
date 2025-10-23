import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
export async function proxy(request: NextRequest) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  if (token) {
    return NextResponse.next()
  }
 
  return NextResponse.redirect(new URL('/register', request.url))
}
 
export const config = {
  matcher: '/basket',
}