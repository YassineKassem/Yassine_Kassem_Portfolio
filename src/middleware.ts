import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'fr', 'es'], // Define supported locales directly here
    defaultLocale: 'en',
});

export const config = {
    matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)', '/(en|fr|es)/:path*'],
};
