import { createContext, useContext, useReducer } from "react";

//Prepare the data layer

export const Statecontext = createContext();

//Wrap our app and provide the data layer

export const StateProvider = ({ reducer, initialState, children }) => {
  <Statecontext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Statecontext.Provider>;
};

//Pull information from the data layer

export const useStateValue = () => useContext(Statecontext);
