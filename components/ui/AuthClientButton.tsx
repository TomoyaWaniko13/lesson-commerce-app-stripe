'use client';

import { Session } from '@supabase/auth-js';
import { Button } from '@/components/ui/button';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

const AuthClientButton = ({ session }: { session: Session | null }) => {
  const handleSignIn = () => {
    console.log('test');
  };
  return <Button onClick={handleSignIn}>AuthClientButton</Button>;
};

export default AuthClientButton;
