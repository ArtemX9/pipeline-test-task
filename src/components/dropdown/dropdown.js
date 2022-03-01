import React from 'react';
import {Select} from 'antd';

import styles from './dropdown.module.css';

export default function Dropdown({elements, defaultName, onChange, value}) {
  return (
    <div className={styles.dropdown}>
      <Select placeholder={defaultName} value={value} onChange={onChange}>
        {elements.map(element => (
          <Select.Option
            key={element.key}
            value={element.key}
            disabled={!element.isActive}
          >
            {element.name}
          </Select.Option>))}
      </Select>
      {value && <span className={styles.delete} onClick={() => onChange(null)}/>}
    </div>

  )
}
