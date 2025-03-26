import styles from './index.module.css';
import LoveTimer from './components/LoveTimer';

import loveImg from '@/assets/love.jpeg';
import Timeline from './components/Timeline';
import AntdTimeline from './components/AntdTimeline';

export default function IndexPage() {
  return (
    <div className={styles.app}>
      {/* <LoveTimer /> */}
      <AntdTimeline />
      <Timeline />
      <img src={loveImg} height={100} />
    </div>
  );
}
