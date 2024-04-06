import styles from "./githubButtons.module.css";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function GitHubFollowButton() {
  return (
    <span>
      <div className={styles.widget}>
        <a
          className={styles.btn}
          href="https://github.com/th3rius"
          rel="noopener"
          target="_blank"
          aria-label="Seguir @th3rius em GitHub"
        >
          <MarkGithubIcon />
          &nbsp;
          <span>Seguir @th3rius</span>
        </a>
      </div>
    </span>
  );
}
