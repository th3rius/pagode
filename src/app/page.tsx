import styles from "./page.module.css";
import { getNextFifthBusinessDay } from "@/dates/payday";
import daysRemainingMessage from "@/dates/daysRemainingMessage";
import GitHubStarButton from "@/components/GitHubStarButton";
import GitHubFollowButton from "@/components/GitHubFollowButton";
import { DateTime } from "luxon";
import diffDaysInBetween from "@/dates/diffDaysInBetween";

export const dynamic = "force-dynamic";

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
        <div>
          <span>
            <h1 className={styles.title}>{nextFifth.toLocaleString()}</h1>,{" "}
          </span>
          <span>{nextFifth.weekdayLong}</span>
        </div>
        <p>{daysRemainingMessage(daysRemaining)}</p>
      </div>

      {/* TODO: add an adsense banner herer */}
      <div className={styles.banner} />
    </main>
  );
}
