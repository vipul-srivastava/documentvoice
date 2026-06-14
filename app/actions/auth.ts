"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return { error: "Please provide both email and password." };
  }

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { error: "Invalid email or password." };
    }

    // Redirect on success happens in the form action
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { error: "Invalid email or password." };
      }
      return { error: error.message || "Authentication failed." };
    }
    throw error;
  }
}
