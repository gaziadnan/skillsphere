
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);


// authentication


import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('GAZI');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    
    client
  }),

  emailAndPassword: { 
    enabled: true, 
  }, 

   socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
    }





});

export const isLoggedIn = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("user");
  }
  return null;
};