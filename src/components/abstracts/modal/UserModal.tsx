import style from './UserModal.module.css'

export function _UserModal (boo) {
    return "<div>" + "Modal value is: " + boo.toggleMySelf() + "</div>"
}

_UserModal({toggleMySelf: function () {return "hello"}})

export const UserModal = (props: {toggleMySelf?: () => void}) => {
    console.log(props);

    const toggleMySelf = props.toggleMySelf || (() => window.alert("hello"))
    return (
        <div className={style.spaShellModal}>
            <div className={style.spaShellModalContent}>
                <p>Modal</p>
                <p onClick={toggleMySelf}>X</p>
            </div>
        </div>
    );
}
