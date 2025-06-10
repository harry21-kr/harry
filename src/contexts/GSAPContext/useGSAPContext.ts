import { useContext } from "react";
import GSAPContext from "./GSAPContext";

const useGSAPContext = () => {
  return useContext(GSAPContext);
};

export default useGSAPContext;
