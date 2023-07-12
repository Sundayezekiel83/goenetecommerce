import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "325672615643-lnfi16crsev1g0ha4rslp1etem6mg2fm.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "f3fdc56be2e9fd84911253a12f0b090f",
});
