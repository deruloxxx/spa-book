import React from "react";

const foo: number = 12;

function _bar(arg: string) {
  return 12
}

const bar: (arg: string) => number = _bar;

const boo: {
  say: string,
  fn: (arg: string) => number
} = {
  say: 'hello',
  fn: _bar
}

// 宿題: body/controller という、任意のコンポーネントを受け取る Modal というコンポーネントを定義してください。
// 宿題: 明示的に型定義をする
const homework = {
  say: 'hello',
  fn: async (param: { first: number, second: (arg: number) => void }) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(param.second(param.first * 10))
    }, 1000)
  })
}

const defaultValue: { isLogin: boolean; login: () => void } = {
  isLogin: false,
  login: () => {
    throw new Error('forget set loginFunction')
  },
}

export const MyContext = React.createContext(defaultValue);
