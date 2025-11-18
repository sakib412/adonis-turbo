import { greet, hello } from '@repo/shared'


export default function Home() {
  const content = greet('from web');
  return (
    <div >
      <main>
        {content} ({hello})
      </main>
    </div>
  );
}
