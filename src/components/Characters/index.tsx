'use client';

import { Character } from '@/interfaces/characters';
import CharacterItem from './Character';
import { ChangeEvent, useState } from 'react';

interface CharacterProps {
  data: Character[];
}
export default function Characters({ data }: CharacterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="sticky top-0 z-50 bg-primary p-9">
        <div className="flex flex-row gap-3 items-center">
          <label>Search:</label>
          <input
            type="search"
            value={searchTerm}
            className="rounded border-2 border-accent bg-secondary text-text"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data
          .filter((v) => v.name.toLowerCase().includes(searchTerm))
          .map((c) => (
            <CharacterItem searchTerm={searchTerm} character={c} key={c.id} />
          ))}
      </div>
    </div>
  );
}

