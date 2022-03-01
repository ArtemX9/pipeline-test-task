import React from 'react';

import styles from './name-cell.module.css';

export default function NameCell({name, className}) {
  return (
    <td className={className}>
      <div className={styles.cell}>
        {name}
      </div>
    </td>
  )
}

