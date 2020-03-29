import React, { useEffect, useContext, useState } from 'react';
import { Toast } from 'antd-mobile';

import './buttons.pcss';

export default () => {
  useEffect(() => {
  }, []);

  return (
    <div className="coral-buttons-wrapper">
      <div className="coral-buttons">
        <div className="coral-button">
          <span>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M23.33 3.908L15.237 12l8.093 8.093a2.29 2.29 0 01-3.237 3.237L12 15.237 3.908 23.33A2.29 2.29 0 01.67 20.093L8.763 12 .671 3.908A2.288 2.288 0 113.908.67L12 8.763 20.093.671a2.288 2.288 0 113.237 3.237z" fill="#F44336" fill-rule="nonzero"/></svg>
          </span>
        </div>
        <div className="coral-button">
          <span>
            <svg width="30" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M11.51 20.805c-.59 0-1.177-.227-1.627-.677l-9.21-9.246a2.321 2.321 0 010-3.27 2.296 2.296 0 013.256 0l7.582 7.612L25.998.679a2.292 2.292 0 013.255 0 2.318 2.318 0 010 3.267L13.138 20.128c-.45.45-1.04.677-1.627.677z" fill="#00B87A" fill-rule="nonzero"/></svg>
          </span>
        </div>
        <svg width="0" height="0">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 22 -8
                "
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}
