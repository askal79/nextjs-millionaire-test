import styles from '@/modules/start-finish/components/HandsWithContent/hands-content.module.scss';
import {PropsWithChildren} from "react";
import {HandImage} from "@/modules/start-finish/components/HandsWithContent/HandImage/HandImage";

export interface IHandWithContent {
  page: 'start' | 'finish';
}
export const HandWithContent = ({page, children}: PropsWithChildren<IHandWithContent>) => {

  return (
    <div className={`${styles[page]}`}>
      <div className={`${styles.pageGreeting__container}`}>
        <div className={`${styles.pageGreeting__content}`}>
          <div className={styles.pageGreeting__imageHolder}>
            <HandImage />
          </div>
          {/*<div>*/}
            {children}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};