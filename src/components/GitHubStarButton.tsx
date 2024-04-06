import styles from "./githubButtons.module.css";
import { StarIcon } from "@primer/octicons-react";

async function getRepo() {
  const res = await fetch("https://api.github.com/repos/th3rius/pagode");
  return res.json();
}

export default async function GitHubStarButton() {
  const repo = await getRepo();

  return (
    <span>
      <div className={styles.widget}>
        <a
          className={styles.btn}
          href={repo.html_url}
          rel="noopener"
          target="_blank"
          aria-label="Favoritar th3rius/pagode em GitHub"
        >
          <StarIcon />
          &nbsp;<span>Favoritar</span>
        </a>
        <a
          className={styles.socialCount}
          href={repo.stargazers_url}
          rel="noopener"
          target="_blank"
          aria-label={`${repo.stargazers_count} favoritos em GitHub`}
        >
          {repo.stargazers_count}
        </a>
      </div>
    </span>
  );
}
