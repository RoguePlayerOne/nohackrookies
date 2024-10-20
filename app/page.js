import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to SiteName</h1>
      <main className={styles.main}>
        <div>
          <Link href='/'>Home</Link>
          <Link href='./pages/activities'>Activities</Link>
          <Link href='./pages/dashboard'>Dashboard</Link>
          <Link href='./pages/achievement'>Achievements and Badges</Link>
          <Link href='./pages/leaderboard'>Leaderboard</Link>
        </div>
      </main>
    </div>
  );
}
