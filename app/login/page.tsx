import { Suspense } from "react";
import LoginPage from "./LoginClient"; // Move your component into a separate client file

export const dynamic = "force-dynamic";

export default function LoginWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
}
