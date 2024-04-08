import styles from "./page.module.css";
import { getNextFifthBusinessDay } from "@/dates/payday";
import daysRemainingMessage from "@/dates/daysRemainingMessage";
import GitHubStarButton from "@/components/GitHubStarButton";
import GitHubFollowButton from "@/components/GitHubFollowButton";
import { DateTime } from "luxon";
import diffDaysInBetween from "../dates/diffDaysInBetween";

export default function Home() {
  const today = DateTime.local();
  const nextFifth = getNextFifthBusinessDay(today);
  const daysRemaining = diffDaysInBetween(nextFifth, today);

  return (
    <main className={styles.main}>
      <div className={styles.github}>
        <GitHubStarButton />
        <GitHubFollowButton />
      </div>

      <div className={styles.center}>
        <h1>{nextFifth.toLocaleString()}</h1>
        <p>{daysRemainingMessage(daysRemaining)}</p>
      </div>

      {/* TODO: add an adsense banner herer */}
      <div className={styles.banner} />
    </main>
  );
}
