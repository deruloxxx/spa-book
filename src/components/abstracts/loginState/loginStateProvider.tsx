import {MyContext} from './loginStateContext';
import {ReactChild} from 'react';

export function LoginStateProvider(props: { children: ReactChild }) {
  return <MyContext.Provider value={{
    isLogin: false,
    login: () => {
      window.alert('this is stub')
    },
  }}>{props.children}</MyContext.Provider>
}
