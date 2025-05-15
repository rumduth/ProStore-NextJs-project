"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultsValue } from "@/lib/constants";
import Link from "next/link";
import { useActionState } from "react";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";
export default function CredentialsSignInForm() {
  const [data, action, isPending] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div className="flex gap-2 items-center">
          <Label htmlFor="email" className="w-1/4">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultsValue.email}
            name="email"
          />
        </div>
        <div className="flex gap-2 items-center">
          <Label htmlFor="password" className="w-1/4">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={signInDefaultsValue.password}
            name="password"
          />
        </div>
        <div>
          <Button className="w-full" variant="default" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign in"}
          </Button>
        </div>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="sign-up" target="_self" className="link">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
}
