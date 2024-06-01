import { auth, clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const protectedRouters = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/meeting(.*)'
])
export default clerkMiddleware((auth,req) => {
    if(protectedRouters(req)){
        auth().protect()
    }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};