import { AuthFlow } from "@/components/auth/AuthFlow"

export const metadata = {
  title: "Create Account - ALLEGRA Protocol",
  description: "Create your ALLEGRA Protocol account to start earning sustainable yields with AI-powered DeFi strategies.",
}

export default function AuthPage() {
  return (
    <div className="pt-20">
      <AuthFlow />
    </div>
  )
}
