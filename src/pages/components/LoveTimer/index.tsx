import React, { useState, useEffect } from 'react';

const startDate = new Date('2023/10/7 00:00:00'); // 恋爱开始日期

function LoveTimer() {
 // 恋爱开始日期
  const [elapsedTime, setElapsedTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime(); // 获取时间戳，计算时间差
      const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // 计算天数
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 计算小时
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // 计算分钟
      const seconds = Math.floor((diff % (1000 * 60)) / 1000); // 计算秒数
      setElapsedTime(`${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`);
    }, 1000); // 每秒更新一次

    return () => clearInterval(interval); // 清除定时器
  }, [startDate]);

  return (
    <div>
      <h2>恋爱时间：{elapsedTime}</h2>
    </div>
  );
}

export default LoveTimer;
