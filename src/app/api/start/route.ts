import 'server-only'
import { cookies } from 'next/headers'

export async function GET () {
  const cookieStore = await cookies()
  cookieStore.set('session', '1234', {
    httpOnly: true,
    secure: true,
  })
  console.log(cookieStore);
  const responseData = {
    greetingMessage: 'Who wants to be a millionaire?',
    firstQuestionId: 1
  }
  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: {
      'Set-Cookie': cookieStore.toString(),
    },
  })
  // return Response.json(,
  // )
}