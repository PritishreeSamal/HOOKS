import logo from './logo.svg';
import './App.css';
import UseStateComponent from './Components/UseStateComponent';
import UseEffectComponent from './Components/UseEffectComponent';
import UseMemoComponent from './Components/UseMemoComponent';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import ClassTakeName from './Components/ClassTakeName';
import HookTakeName from './Components/HookTakeName';
import HookCounterArray from './Components/HookCounterArray';
import ClassUseEffectALT from './Components/ClassUseEffectALT';
import HookUseEffect from './Components/HookUseEffect';
import ClassMouse from './Components/ClassMouse';
import HookMouse from './Components/HookMouse';
import { MosqueTwoTone } from '@mui/icons-material';
import MouseContainer from './Components/MouseContainer';
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC';
import React, { useReducer } from 'react';
import HookUseContext from './Components/HookUseContext';
import HookUseReducer from './Components/HookUseReducer';
import HookUseReducerTwo from './Components/HookUseReducerTwo';
import HookUseReducerThree from './Components/HookUseReducerThree';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentD from './Components/ComponentD';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';
import UseCallBack from './Components/UseCallBack';
import ParentVomponent from './Components/ParentComponent';
import Counter from './Components/Counter';
import FocusInput from './Components/FocusInput';
import ClassTimer from './Components/ClassTimer';
import HookTimer from './Components/HookTimer';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()
const InitialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return InitialState
    default:
      return state
  }
}



function App() {
  const [count, dispatch] = useReducer(reducer, InitialState)
  return (
    <>
      {/* <UseStateComponent /> */}
      {/* <UseEffectComponent/> */}
      {/* <UseMemoComponent/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounter /> */}
      {/* <ClassTakeName /> */}
      {/* <HookTakeName/> */}
      {/* <HookCounterArray/> */}
      {/* <ClassUseEffectALT/> */}
      {/* <HookUseEffect/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/>  */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/>  */}
      {/* <DataFetching/> */}


      {/* <div className='text-center mt-5'>
        <UserContext.Provider value={'Pritishree'}>
          <ChannelContext.Provider value={'Pritishree Samal'}>
            <ComponentC/>
          </ChannelContext.Provider>
        </UserContext.Provider>
      </div> */}

      {/* <HookUseReducer /> */}
      {/* <HookUseReducerTwo /> */}
      {/* <HookUseReducerThree/> */}

      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <h4 className='text-center mt-5'>{count}</h4>
        <div className='text-center'>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo/> */}
      {/* <UseCallBack/> */}
      {/* <ParentVomponent/> */}
      {/* <Counter/> */}
      <FocusInput/>
      <ClassTimer/>
      <br />
      <HookTimer/>
    </>
  );
}

export default App;
