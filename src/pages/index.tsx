import styles from './index.module.css';
import LoveTimer from './components/LoveTimer';

import loveImg from '@/assets/love.jpeg';

export default function IndexPage() {
  return (
    <div className={styles.app}>
      <LoveTimer />
      <img src={loveImg} height={100} />
    </div>
  );
}
