import {BASE_URL} from "@/shared/api";
import {IStart} from "@/shared/types/apiContracts/start";

export const getInitialData = async (): Promise<IStart | Error> => {
  try {
    const data = await fetch(`${BASE_URL}/start`);
    return data.json();
  } catch (error: unknown | Error) {
    console.error(error);
    return error as Error;
  }
}