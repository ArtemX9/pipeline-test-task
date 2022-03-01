import React from 'react';
import styles from './indicator-cell.module.css';

export default function Indicator({type, className}) {
  return <td className={className}>
    <span className={`${styles.indicator} ${styles[type]}`}/>
  </td>;
}
