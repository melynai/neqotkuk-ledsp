import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import melynLogo from "@/assets/melyn-logo.png";

const PASS_HASH = "melynNeqotkuk2026!";

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem("unlocked") === "true");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASS_HASH) {
      sessionStorage.setItem("unlocked", "true");
      setUnlocked(true);
    } else {
      setError(true);
      setValue("");
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <form onSubmit={handleSubmit} className="card-elevated rounded-2xl p-8 w-full max-w-sm text-center space-y-6">
        <img src={melynLogo} alt="melyn" className="h-10 mx-auto" />
        <div>
          <h1 className="font-display text-xl font-bold mb-1">Confidential Proposal</h1>
          <p className="text-sm text-muted-foreground">Enter the password to continue</p>
        </div>
        <Input
          type="password"
          placeholder="Password"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false); }}
          className={error ? "border-destructive" : ""}
          autoFocus
        />
        {error && <p className="text-sm text-destructive">Incorrect password</p>}
        <Button type="submit" className="w-full">Enter</Button>
      </form>
    </div>
  );
};

export default PasswordGate;
