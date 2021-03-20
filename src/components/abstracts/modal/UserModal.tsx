import style from './UserModal.module.css'

export const UserModal = (props: {toggleMySelf: () => void}) => {
    return (
        <div className={style.spaShellModal}>
            <div className={style.spaShellModalContent}>
                <p>Modal</p>
                <p onClick={props.toggleMySelf}>X</p>
            </div>
        </div>
    );
}
