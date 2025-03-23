import styles from './hexagon.module.scss'

export interface IHexagonSmallProps {
  state: 'active' | 'default' | 'disabled';
  text: string;
}

export const HexagonSmall = ({state = 'default', text}: IHexagonSmallProps) => {
  return (
    <div className={styles.hexagon__wrapper}>
    <div className={`${styles.hexagon} ${styles.small} ${styles[state]}`}>
      <div className={styles.price__wrapper}>
        {text}
      </div>
    </div>
    </div>
  );
};