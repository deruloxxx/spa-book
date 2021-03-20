import style from './UserModal.module.css'
import {useLoginState} from "../loginState/useLoginState";

export const UserModal = (props: {toggleMySelf: () => void}) => {
    const loginState = useLoginState();
    const okFn = () => {
        window.alert(loginState.isLogin);
        props.toggleMySelf();
        loginState.login();
    }
    const cancelFn = () => {
        window.alert('cancel');
        props.toggleMySelf();
    }
    return (
        <div className={style.spaShellModal}>
            <div className={style.spaShellModalContent}>
                <p onClick={props.toggleMySelf}>X</p>
            </div>
            <div>
                <input type="text"/>
            </div>
            <button onClick={okFn}>OK</button>
            <button onClick={cancelFn}>Cancel</button>
        </div>
    );
}
