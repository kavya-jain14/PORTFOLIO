import { CinematicIntro } from '../features/cinematic-intro/CinematicIntro';
import styles from './App.module.css';

export function App() {
  return (
    <main id="main-content" className={styles.root}>
      <CinematicIntro />
    </main>
  );
}
