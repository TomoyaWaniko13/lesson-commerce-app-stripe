import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = createClient();
  const { data: lessons } = await supabase.from('lesson').select();

  return <pre>{JSON.stringify(lessons, null, 2)}</pre>;
}
