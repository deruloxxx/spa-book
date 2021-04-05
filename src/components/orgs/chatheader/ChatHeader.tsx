import './ChatHeader.css'
import {LoginButton} from "../../mols/LoginButton/LoginButton";

export const ChatHeader = () => {
  return (
    <div className="spa-shell-head">
      <div className="spa-shell-head-logo"/>
      <div className="spa-shell-head-acct">
        <LoginButton/>
      </div>
      <div className="spa-shell-head-search"/>
    </div>
  )
}