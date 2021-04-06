import style from './UserModal.module.css'
import {ok} from "assert";

export const UserModal = (props: { toggleMySelf?: () => void }) => {
  const okFn = () => {
    window.alert('OK')
  }
  const cancelFn = () => {
    window.alert('cancel')
  }
  const toggleMySelf = props.toggleMySelf
  return (
    <div className={style.spaShellModal}>
      <div className={style.spaShellModalContent}>
        <p>Modal</p>
        <p onClick={toggleMySelf}>X</p>
      </div>
      <div>
        <input type="text"/>
      </div>
      <div>
        <button onClick={okFn}>OK</button>
        <button onClick={cancelFn}>cancel</button>
      </div>
    </div>
  );
}
