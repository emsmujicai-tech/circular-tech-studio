import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import type { User } from "@supabase/supabase-js";
import { LogIn, LogOut, UserRound } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function AuthControl() {
  const { t } = useLang();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    void supabase.auth.getUser().then(({ data }) => {
      if (!active) return;
      setUser(data.user ?? null);
      setReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    void navigate({ to: "/login", replace: true });
  }

  if (!ready) return <div className="h-9 w-28" aria-hidden />;

  if (!user) {
    return (
      <Button asChild variant="outline" size="sm">
        <Link to="/login">
          <LogIn />
          {t.auth.signInTab} / {t.auth.signUpTab}
        </Link>
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <Button asChild variant="ghost" size="sm">
        <Link to="/account">
          <UserRound />
          <span className="max-w-40 truncate">{user.email}</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" aria-label={t.account.signOut} onClick={() => void signOut()}>
        <LogOut />
      </Button>
    </div>
  );
}
