import React, { useState, useEffect, useCallback } from 'react';
import TinyGesture from 'tinygesture';

import './fullpage.pcss';

const gesture = new TinyGesture(document.body);

// prevent bounce effect
const preventTouch = (e: HTMLDivElement | null) => {
  if (!e) return;
  e.addEventListener('touchstart', e => e.preventDefault());
};

interface IFullPage {
  pageList?: any[],
  className?: string,
  autoSlideIntervel?: number,
}
export default ({ pageList = [1, 2, 3, 4], className = '', autoSlideIntervel = 3000 }: IFullPage = {}) => {
  const [curPage, setCurPage] = useState(0);
  const next = useCallback(() => setCurPage(curPage >= pageList.length - 1 ? 0 : curPage + 1), [curPage]);
  const prev = useCallback(() => setCurPage(curPage === 0 ? 0 : curPage - 1), [curPage]);

  useEffect(() => {
    let t: NodeJS.Timeout;

    if (autoSlideIntervel) {
      t = setInterval(next, autoSlideIntervel);
    }

    // remove old event
    (gesture.handlers.swipeup || []).forEach((f: any) => gesture.off('swipeup', f));
    (gesture.handlers.swipedown || []).forEach((f: any) => gesture.off('swipedown', f));
    gesture.on('swipeup', () => curPage < pageList.length - 1 && next());
    gesture.on('swipedown', prev);

    return () => t && clearInterval(t);
  }, [curPage]);

  const element = (
    <div className={`fp__cover ${className}`} ref={e => preventTouch(e)}>
      <ol className="fp__content" style={{ transform: `translateY(-${curPage * 100}vh)` }}>
        {pageList.map((children: Pick<IFullPage, 'pageList'>) => <li>{ children }</li>)}
      </ol>
      {pageList.length > 1 ? (
        <ol className="fp__pagination">
          { pageList.map((_, index) => <li onClick={() => setCurPage(index)} className={index === curPage ? 'fp__pagination--cur' : ''}></li>) }
        </ol>
      ) : ''}
    </div>
  );

  return { element, setCurPage, next, prev };
}
