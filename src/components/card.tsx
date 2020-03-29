import React, { useEffect, useContext, useState } from 'react';
import { Toast } from 'antd-mobile';

import './card.pcss';

export default (props: { children: React.ReactNode; }) => {
  useEffect(() => {
  }, []);

  return (
    <article className="coral-card">
      {props.children}
    </article>
  )
}
