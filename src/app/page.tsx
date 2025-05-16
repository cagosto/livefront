import { getAllCharacters } from '@/actions/characters';
import Characters from '@/components/Characters';

export default async function Home() {
  const c = await getAllCharacters();

  return (
    <section>
      <Characters data={c} />
    </section>
  );
}

