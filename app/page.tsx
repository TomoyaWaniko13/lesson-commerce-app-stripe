import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, supabase } from '@/types/supabase';
import { createClient } from '@supabase/supabase-js';

const getAllLessons = async () => {
  const { data: lessons } = await supabase.from('lesson').select();
  return lessons;
};

export default async function HomePage() {
  const lessons = await getAllLessons();

  return (
    <main className={'w-full max-w-3xl mx-auto my-16 px-2 flex flex-col gap-4'}>
      {lessons?.map((lesson) => (
        <Link key={lesson.id} href={`/lesson/${lesson.id}`}>
          <Card>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{lesson.description}</p>
            </CardContent>
            <CardFooter>
              <p>
                {new Date(lesson.created_at).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </main>
  );
}
