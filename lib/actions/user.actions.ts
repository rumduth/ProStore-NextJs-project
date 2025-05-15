"use server";

import { signInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign in the user with credentials

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);
    return { success: true, message: "Sign in succesfully" };
  } catch (err) {
    if (isRedirectError(err)) throw err;
    return { success: false, message: "Invalid email or password" };
  }
}

//Sing user out
export async function signOutUsers() {
  await signOut();
}
