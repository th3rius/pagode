import styles from "./page.module.css";
import { getNextFifthBusinessDay } from "@/dates/payday";
import countDaysInBetween from "@/dates/countDaysInBetween";
import daysRemainingMessage from "@/dates/daysRemainingMessage";
import Script from "next/script";

export default function Home() {
  const today = new Date();
  const nextFifth = getNextFifthBusinessDay(today);
  const daysRemaining = countDaysInBetween(today, nextFifth);

  return (
    <main className={styles.main}>
      <Script async defer src="https://buttons.github.io/buttons.js" />
      <div className={styles.github}>
        <a
          className="github-button"
          href="https://github.com/th3rius/pagode"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Favoritar th3rius/pagode em GitHub"
        >
          Favoritar
        </a>
        <a
          className="github-button"
          href="https://github.com/th3rius"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-size="large"
          aria-label="Seguir @th3rius em GitHub"
        >
          Seguir @th3rius
        </a>
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
