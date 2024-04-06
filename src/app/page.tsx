import styles from "./page.module.css";
import { getNextFifthBusinessDay } from "@/dates/payday";
import countDaysInBetween from "@/dates/countDaysInBetween";
import daysRemainingMessage from "@/dates/daysRemainingMessage";
import GitHubButtonClient from "@/components/GitHubButtonClient";

export default function Home() {
  const today = new Date();
  const nextFifth = getNextFifthBusinessDay(today);
  const daysRemaining = countDaysInBetween(today, nextFifth);

  return (
    <main className={styles.main}>
      <div className={styles.github}>
        <GitHubButtonClient
          href="https://github.com/th3rius/pagode"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Favoritar th3rius/pagode em GitHub"
        >
          Favoritar
        </GitHubButtonClient>
        <GitHubButtonClient
          href="https://github.com/sponsors/th3rius"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-heart"
          data-size="large"
          aria-label="Patrocinar @th3rius on GitHub"
        >
          Patrocinar
        </GitHubButtonClient>
      </div>

      <div className={styles.center}>
        <h1>{nextFifth.toLocaleDateString()}</h1>
        <p>{daysRemainingMessage(daysRemaining)}</p>
      </div>

      {/* TODO: add an adsense banner herer */}
      <div className={styles.banner} />
    </main>
  );
}
