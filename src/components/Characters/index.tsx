import { Character } from '@/interfaces/characters';
import Image from 'next/image';

interface CharacterProps {
  data: Character[];
}
export default function Characters({ data }: CharacterProps) {
  return (
    <div className="grid grid-cols-4">
      {data.map((c) => (
        <div key={c.id}>
          <p>{c.name}</p>
          {c.image && (
            <Image
              src={c.image}
              alt={c.name}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}

