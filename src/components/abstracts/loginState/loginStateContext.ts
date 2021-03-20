import React from "react";

const defaultValue = {
    isLogin: false,
    login: () => { throw new Error('forget set loginFunction') },
}

export const MyContext = React.createContext(defaultValue);
