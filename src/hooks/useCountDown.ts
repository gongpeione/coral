import { useState, useEffect, useMemo } from 'react';

const addZero = (num: number) => num < 10 ? `0${num}` : String(num);

/**
 *
 * @param endTime 结束时间
 * @param curTime 准确的当前时间，默认取本机时间
 */
export default (endTime: number, curTime: number, start = false) => {
  const [timeLeftObj, setTimeObj] = useState({ hour: '99', min: '99', sec: '99', timeUp: false });
  const timeGap = useMemo(() => (curTime || Date.now()) - Date.now(), []);

  useEffect(() => {
    if (!endTime || !start) return;
    const cb = () => {
      let timeLeft = endTime - Date.now() + timeGap;
      if (timeLeft <= 0) {
        timeLeft = 0;
        clearInterval(t);
        return setTimeObj({ hour: '00', min: '00', sec: '00', timeUp: true });
      }
      const hour = timeLeft / 1000 / 60 / 60;
      const min = hour % 1 * 60;
      const sec = min % 1 * 60;
      setTimeObj({ hour: addZero(~~hour), min: addZero(~~min), sec: addZero(~~sec), timeUp: false });
    };
    const t = setInterval(cb, 1e3);

    cb();

    return () => clearInterval(t);
  }, [endTime, timeGap, start]);

  return timeLeftObj;
}
