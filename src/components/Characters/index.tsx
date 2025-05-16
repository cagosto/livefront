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
    <div>
      <input
        type="search"
        value={searchTerm}
        className="rounded border-2 border-accent bg-white text-primary"
        onChange={handleChange}
      />
      <div className="grid grid-cols-4 gap-3">
        {data
          .filter((v) => v.name.toLowerCase().includes(searchTerm))
          .map((c) => (
            <CharacterItem searchTerm={searchTerm} character={c} key={c.id} />
          ))}
      </div>
    </div>
  );
}

