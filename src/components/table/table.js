import React from 'react';

import NameCell from './cells/name-cell';
import StringCell from './cells/string-cell';
import ProgressCell from './cells/progress-cell';
import IndicatorCell from './cells/indicator-cell';

import styles from './table.module.css';

const STAGES_ORDER = {
  'development': 1,
  'phase1': 2,
  'phase2': 3,
  'phase3': 4,
  'register': 5,
}

export default function Table({tableData}) {
  return (
    <table>
      <thead>
        <tr colSpan={9} className={`${styles.row} ${styles.firstHeaderRow}`}>
          <th colSpan={4} className={`${styles.cell} ${styles.firstHeaderRow}`}>Информация о продукте</th>
          <th colSpan={5} className={`${styles.cell} ${styles.firstHeaderRow}`}>Этапы разработки</th>
        </tr>
        <tr colSpan={9} className={`${styles.row} ${styles.secondHeaderRow}`}>
          <th className={`${styles.typeCol} ${styles.secondHeaderRow}`}></th>
          <th className={`${styles.nameCol} ${styles.secondHeaderRow}`}>Наименование</th>
          <th className={`${styles.agent} ${styles.secondHeaderRow}`}>Механизм действия терапевтического агента</th>
          <th className={`${styles.diagnosis} ${styles.secondHeaderRow}`}>Показание</th>
          <th className={`${styles.progress} ${styles.secondHeaderRow}`}>Разработка</th>
          <th className={`${styles.progress} ${styles.secondHeaderRow}`}>КИ Фаза I</th>
          <th className={`${styles.progress} ${styles.secondHeaderRow}`}>КИ Фаза II</th>
          <th className={`${styles.progress} ${styles.secondHeaderRow}`}>КИ Фаза III</th>
          <th className={`${styles.progress} ${styles.secondHeaderRow}`}>Регистрация</th>
        </tr>
      </thead>
      <tbody>
      {tableData.map((drug, index) => {
        const stageNumber = STAGES_ORDER[drug.stage];
        const isLastRow = index === tableData.length - 1;
        const cellClassName = isLastRow ? `${styles.cell} ${styles.cellBottom}` : styles.cell;
        return (
          <tr key={`${drug.name}-${drug.diagnosis}`} className={`${styles.row} ${styles.bodyRow}`}>
            <IndicatorCell type={drug.type} className={cellClassName}/>
            <NameCell name={drug.name} className={cellClassName}/>
            <StringCell text={drug.agent} className={cellClassName} />
            <StringCell text={drug.diagnosis} className={cellClassName} />
            <ProgressCell status={getProgressStatus(stageNumber, 'development')} className={cellClassName}/>
            <ProgressCell status={getProgressStatus(stageNumber, 'phase1')} className={cellClassName}/>
            <ProgressCell status={getProgressStatus(stageNumber, 'phase2')} className={cellClassName}/>
            <ProgressCell status={getProgressStatus(stageNumber, 'phase3')} className={cellClassName}/>
            <ProgressCell status={getProgressStatus(stageNumber, 'register')} className={cellClassName}/>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

function getProgressStatus(productStage, stage) {
  if (productStage === STAGES_ORDER[stage]) {
    return 'end';
  } else if (productStage > STAGES_ORDER[stage]) {
    return 'progress';
  } else {
    return '';
  }
  // return productStage >= STAGES_ORDER[stage] ? (productStage === stage ? 'end' : 'progress') : '';
}
