import styles from './init-page.module.scss';
import {Button} from "@/shared/components/Button";
import {IStart} from "@/shared/types/apiContracts/start";

export const InitialScreen = ({data}: {data: IStart} ) => {
  const message = data?.greetingMessage || 'Hello, World!';
  console.log(message);
  return (
    <div className={styles.initialPage}>
      <h1>{message}</h1>
      <Button asLink={true} href={`/questions/${data.firstQuestionId}`}>Start</Button>
    </div>
  );
};