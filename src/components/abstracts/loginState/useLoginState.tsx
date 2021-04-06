import {useContext} from "react";
import {MyContext} from "./loginStateContext";

export function useLoginState() {
  return useContext(MyContext);
};