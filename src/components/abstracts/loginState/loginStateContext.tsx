import * as React from 'react';

const defaultValue: {isLogin: boolean; login: () => void} = {
  isLogin: false,
  login: ()=> {throw new Error('forget set loginFunction')},
}

export const MyContext = React.createContext(defaultValue);
