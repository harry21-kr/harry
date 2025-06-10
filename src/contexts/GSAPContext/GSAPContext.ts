import { createContext } from "react";

interface GSAPContextType {
  timeline: GSAPTimeline | null;
}

const initialState: GSAPContextType = {
  timeline: null,
};

const GSAPContext = createContext(initialState);

export default GSAPContext;
