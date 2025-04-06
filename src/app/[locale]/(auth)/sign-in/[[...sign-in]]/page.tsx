import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn afterSignInUrl="/levez-des-fonds" afterSignOutUrl="/" />
    </div>
  );
}
