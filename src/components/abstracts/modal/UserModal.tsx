import style from './UserModal.module.css'
import {useLoginState} from '../loginState/useLoginState';

export const UserModal = (props: { toggleMySelf: () => void }) => {
  const loginState = useLoginState();
  const okFn = () => {
    window.alert(loginState.isLogin);
    loginState.login();
    props.toggleMySelf();
  }
  const cancelFn = () => {
    window.alert("cancel")
    props.toggleMySelf();
  }
  const toggleMySelf = props.toggleMySelf;
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
