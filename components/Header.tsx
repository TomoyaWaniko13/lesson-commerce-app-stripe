import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AuthServerButton from '@/components/AuthServerButton';

const Header = () => {
  return (
    <div className='flex justify-between p-2 border border-b-1'>
      <div className={'flex gap-3'}>
        <Link href={'/'}>
          <Button variant={'outline'}>home</Button>
        </Link>
        <Link href={'/'}>
          <Button variant={'outline'}>pricing</Button>
        </Link>
      </div>
      <div>
        <AuthServerButton />
      </div>
    </div>
  );
};

export default Header;
