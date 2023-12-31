'use client';

import React, { useState } from 'react';
import { SearchManufacturer } from '@/components/index';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button className={`-ml-3 z-10 ${otherClasses}`} type={'submit'}>
    <Image
      className={'object-contain'}
      src={'/magnifying-glass.svg'}
      alt={'magnifying glass'}
      width={40}
      height={40}
    />
  </button>
);

const SearchBar = ({ setManufacturer, setModel }) => {
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar');
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className={'searchbar'} onSubmit={handleSearch}>
      <div className={'searchbar__item'}>
        <SearchManufacturer selected={searchManufacturer} setSelected={setSearchManufacturer} />

        <SearchButton otherClasses={'sm:hidden'} />
      </div>

      <div className={'searchbar__item'}>
        <Image
          className={'absolute w-[20px] h-[20px] ml-4'}
          src={'/model-icon.png'}
          alt={'car model'}
          width={25}
          height={25}
        />
        <input
          className={'searchbar__input'}
          type='text'
          name={'model'}
          value={searchModel}
          onChange={e => setSearchModel(e.target.value)}
          placeholder={'Tiguan'}
        />
        <SearchButton otherClasses={'sm:hidden'} />
      </div>

      <SearchButton otherClasses={'max-sm:hidden'} />
    </form>
  );
};

export default SearchBar;
