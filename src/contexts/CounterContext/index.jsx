import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from "react";
import { reducer } from './reducer';
import { buildActions } from './build-actions';

export const initialState = {
  counter: 0,
  loading: false
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if(typeof context === 'undefined') {
    throw new Error('You have to use useCounterContex inside <CounterContextProvider />')
  }

  return [...context];
}
