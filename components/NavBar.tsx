import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CustomButton } from '@/components/index';

const NavBar: FC = () => {
  return (
    <header className={'w-full absolute z-10'}>
      <nav
        className={'max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'}
      >
        <Link className={'flex justify-center items-center'} href={'/'}>
          <Image
            className={'object-contain'}
            src={'/logo.svg'}
            width={118}
            height={18}
            alt={'logo'}
          />
        </Link>

        <CustomButton
          title={'Sign In'}
          btnType={'button'}
          containerStyles={'text-primary-blue rounded-full bg-white min-w-[130px]'}
        ></CustomButton>
      </nav>
    </header>
  );
};

export default NavBar;
