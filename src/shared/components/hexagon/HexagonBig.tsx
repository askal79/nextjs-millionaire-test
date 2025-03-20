'use client';
import {ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, useState} from "react";
import styles from './hexagon.module.scss'

export interface IQuestionText {
  id: number | string;
  marker: string;
  text: string;
}
export interface IHexagonBigProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  state: 'selected' | 'wrong' | 'correct' | 'default'
  questionText: IQuestionText
  onClick?: () => void
}

export const HexagonBig = ({state, questionText, onClick}: IHexagonBigProps) => {
  const [hexagonState, setHexagonState] = useState<IHexagonBigProps['state']>(state || 'default');

  return (
    <div className={styles.hexagon__wrapper}>

    <button className={[styles.hexagon, styles.big, styles[hexagonState]].join(' ')} onClick={() =>setHexagonState('selected')}>
      <>
        <div className={styles.question__wrapper}>
          <div className={styles.question__marker}>{questionText.marker}</div>
          <div className={styles.question__text}>{questionText.text}</div>
        </div>
      </>
    </button>
    </div>
  );
};