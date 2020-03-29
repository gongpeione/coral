import React, { useEffect, useContext, useState } from 'react';
import { Toast } from 'antd-mobile';
import { getRewardList, RewardList } from '../../api';
import Card from '../../components/card';
import Content from '../../components/content';
import Buttons from '../../components/buttons';


import './index.pcss';
import { MainCtx } from '..';
import config from '../../config';

export default () => {
  const [list, setList] = useState([] as RewardList);
  const ctx = useContext(MainCtx);

  useEffect(() => {
  }, []);

  return (
    <div className="coral-words">
      <ul className="coral-words__list">
        <li><Card><Content>ddd</Content></Card></li>
        <li><Card><Content>ddd</Content></Card></li>
        <li><Card><p>测试</p><Content>ddd</Content></Card></li>
      </ul>
      <Buttons />
    </div>
  )
}
