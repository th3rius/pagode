import styles from "./page.module.css";
import { getNextFifthBusinessDay } from "@/dates/payday";
import countDaysInBetween from "@/dates/countDaysInBetween";
import daysRemainingMessage from "@/dates/daysRemainingMessage";
import GitHubStarButton from "@/components/GitHubStarButton";
import GitHubFollowButton from "@/components/GitHubFollowButton";

export default function Home() {
  const today = new Date();
  const nextFifth = getNextFifthBusinessDay(today);
  const daysRemaining = countDaysInBetween(today, nextFifth);

  return (
    <main className={styles.main}>
      <div className={styles.github}>
        <GitHubStarButton />
        <GitHubFollowButton />
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
