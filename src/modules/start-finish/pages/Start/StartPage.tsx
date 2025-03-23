import {HandWithContent} from "@/modules/start-finish/components/HandsWithContent/HandWithContent";
import {getInitialData} from "@/modules/start-finish/api";
import {InitialScreen} from "@/modules/start-finish/features/InitialScreen/InitialScreen";

export async function StartPage () {
  const data = await getInitialData()
  console.log(data);

  // TODO: add error handling
  return (
     <HandWithContent page='start'>
        <InitialScreen data={data}></InitialScreen>
      </HandWithContent>

  );
}