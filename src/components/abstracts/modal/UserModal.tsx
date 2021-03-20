import style from './UserModal.module.css'

export const UserModal = (props: {toggleMySelf: () => void}) => {
    const okFn = () => {
        window.alert('ok');
        props.toggleMySelf();
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
