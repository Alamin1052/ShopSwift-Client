import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // আপনার Express সার্ভারে লগইন রিকোয়েস্ট পাঠানো
                const res = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                    }),
                });

                const user = await res.json();

                // যদি ইউজার পাওয়া যায় এবং কোনো এরর না থাকে
                if (res.ok && user) {
                    return user;
                }
                // লগইন ফেইল করলে null রিটার্ন করবে
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user._id;
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        }
    },
    pages: {
        signIn: '/login', // আপনার কাস্টম লগইন পেজ থাকলে
    },
    session: {
        strategy: "jwt",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };