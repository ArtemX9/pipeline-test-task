import React from 'react';
import styles from './progress-cell.module.css';

export default function ProgressCell({className, status}) {
  let ccn;
  let isProgress = false;
  switch (status) {
    case 'progress':
      ccn = styles.progressCellProgress;
      isProgress = true;
      break;
    case 'end':
      ccn = styles.progressCellEnd;
      break;
    default:
      break;
  }
  return (
    <td className={`${styles.cell} ${isProgress ? styles.cellProgress : ''} ${className}`}>
      <div className={ccn}/>
    </td>
  )
}
