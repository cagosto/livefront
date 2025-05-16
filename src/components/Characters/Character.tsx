import { Character } from '@/interfaces/characters';
import Image from 'next/image';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

interface CharacterProps {
  character: Character;
  searchTerm: string;
}
export default function CharacterItem({
  character,
  searchTerm,
}: CharacterProps) {
  const matches = match(character.name, searchTerm, { insideWords: true });
  const parts = parse(character.name, matches);
  return (
    <div className="bg-secondary rounded p-2 lg:min-h-36 relative overflow-hidden group shadow-sm shadow-accent">
      <div className="absolute scale-x-0 bottom-0 top-0 p-1 bg-accent/80 right-0 left-0 transition group-hover:scale-x-100 origin-right group-hover:origin-left">
        <h2>
          {parts.map((parts, index) => (
            <span
              className={`${parts.highlight ? 'font-bold' : 'font-normal'}`}
              key={index}
            >
              {parts.text}
            </span>
          ))}
        </h2>
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

