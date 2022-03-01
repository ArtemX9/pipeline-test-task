import React from 'react';

import styles from './string-cell.module.css';

export default function StringCell({text, className}) {
  return (
    <td className={className}>
      <div className={styles.cell}>
        {text}
      </div>
    </td>
  )
}
