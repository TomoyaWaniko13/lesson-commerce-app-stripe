import { createClient } from '@supabase/supabase-js';
import { Database, supabase } from '@/types/supabase';

// https://supabase.com/docs/reference/javascript/single
const getOneLesson = async (id: number) => {
  const { data: lessons } = await supabase.from('lesson').select().eq('id', id).single();
  return lessons;
};

const LessonDetailPage = async ({ params }: { params: { id: string } }) => {
  const lesson = await getOneLesson(Number(params.id));
  return (
    <div className={'w-full max-w-3xl mx-auto py-16 px-8'}>
      <h1 className={'text-4xl font-bold mb-6'}>{lesson?.title}</h1>
      <p>{lesson?.description}</p>
    </div>
  );
};

export default LessonDetailPage;
