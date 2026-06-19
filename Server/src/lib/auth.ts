import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { expo } from "@better-auth/expo";
// If your Prisma file is located elsewhere, you can change the path



export const auth = betterAuth({
    plugins: [expo()],
    emailAndPassword: {
        enabled: true,
    },
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    trustedOrigins: [
        "linkchatapp://",
        ...(process.env.NODE_ENV !== "production" ? ["exp://",
            "exp://**",
            "exp://192.168.*.*:*/**",] : [])
    ],
    debug: process.env.NODE_ENV !== "production",
    allowDangerousConnections: process.env.NODE_ENV !== "production",

});