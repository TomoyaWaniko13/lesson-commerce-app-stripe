import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { createClient } from '@supabase/supabase-js';
import { Database, supabase } from '@/types/supabase';
import AuthClientButton from '@/components/ui/AuthClientButton';

const AuthServerButton = async () => {
  // https://supabase.com/docs/reference/javascript/auth-refreshsession
  const { data, error } = await supabase.auth.getSession();

  const { session } = data;

  return <AuthClientButton session={session} />;
};

export default AuthServerButton;
