import { getCharacterInfo } from '@/actions/characters';
import Bio from '@/components/Bio';
import Headline from '@/components/Headline';

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const bio = await getCharacterInfo(name);

  return (
    <section>
      <Headline type="h2" variant="h1">
        {decodeURIComponent(name)}
      </Headline>
      <hr className="my-4 border-accent" />
      <Bio bio={bio} />
    </section>
  );
}

