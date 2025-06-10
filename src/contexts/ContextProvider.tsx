import GSAPProvider from "./GSAPContext/GSAPProvider";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <GSAPProvider>{children}</GSAPProvider>;
};
export default ContextProvider;
