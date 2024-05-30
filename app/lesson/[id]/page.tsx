import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// https://supabase.com/docs/reference/javascript/single
const getOneLesson = async (id: number) => {
  const supabase = createClient<Database>(
    'https://hrmdgeryfnbhfwkkucro.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhybWRnZXJ5Zm5iaGZ3a2t1Y3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMjAxOTQsImV4cCI6MjAzMjU5NjE5NH0.xN_SoR_TfzhsLF_prYWEErqvYm3qe064_0x2hfzvP4o',
  );
  const { data: lessons } = await supabase.from('lesson').select().eq('id', id).single();
  return lessons;
};

const LessonDetailPage = async ({ params }: { params: { id: string } }) => {
  const lesson = await getOneLesson(Number(params.id));
  return (
    <div>
      <div>{lesson?.title}</div>
    </div>
  );
};

export default LessonDetailPage;
