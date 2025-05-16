import { Character } from '@/interfaces/characters';
import Image from 'next/image';

interface CharacterProps {
  character: Character;
}
export default function CharacterItem({ character }: CharacterProps) {
  return (
    <div className="bg-secondary rounded p-2 relative overflow-hidden group">
      <div className="absolute scale-x-0 bottom-0 top-0 p-1 bg-accent/80 right-0 left-0 transition group-hover:scale-x-100 origin-right group-hover:origin-left">
        <h2>{character.name}</h2>
        <hr />
        <ul>
          <li>Actor: {character.actor}</li>
          <li>Wizard {character.wizard ? 'True' : 'False'}</li>
          {character.patronus && <li>Patronus {character.patronus}</li>}
          {character.alternate_names.length > 1 && (
            <li>AKA: {character.alternate_names.join(',')}</li>
          )}
        </ul>
      </div>

      <Image
        src={character.image || '/images/image-not-found.jpg'}
        alt={character.name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

