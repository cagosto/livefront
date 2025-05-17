import { Character } from '@/interfaces/characters';

interface BioProps {
  bio: Character;
}
export default function Bio({ bio }: BioProps) {
  return <div>{bio.house}</div>;
}
