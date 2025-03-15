import React, { useEffect, useRef } from 'react';
import styles from './Loading.css';
import i1 from './img/i1.svg';
import i2 from './img/i2.svg';
import i3 from './img/i3.svg';
import i4 from './img/center2.svg';
import left_most from './img/left_most.svg';
import right_most from './img/right_most.svg';
import oc from './img/oc.svg';
import oc_dashed from './img/oc_dashed.svg';
import c1 from './img/c1.svg';
import c2 from './img/c2.svg';
import c3 from './img/c3.svg';
import center from './img/center.svg';
import tflogo from './img/yugatf.png';

const Loading = () => {

  return (
    <div className="loading">
      <img src={tflogo} className="rotate0" alt="tf" />
      <img src={i1} className="rotate1" alt="i1" />
      <img src={i2} className="rotate2" alt="i2" />
      <img src={i3} className="rotate3" alt="i3" />
      <img src={i4} className="rotate4" alt="i4" />
      <img src={left_most} className="rotate5" alt="left_most" />
      <img src={right_most} className="rotate6" alt="right_most" />
      <img src={oc} className="rotate7" alt="oc" />
      <img src={oc_dashed} className="rotate8" alt="oc_dashed" />
      <img src={c1} className="rotate9" alt="c1" />
      <img src={c2} className="rotate10" alt="c2" />
      <img src={c3} className="rotate11" alt="c3" />
      <img src={center} className="rotate12" alt="center" />
    </div>
  );
};

export default Loading;