import styles from "./page.module.css";
import { greet, hello } from '@repo/shared'


export default function Home() {
  const content = greet('from web');
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {content} ({hello})
      </main>
    </div>
  );
}
