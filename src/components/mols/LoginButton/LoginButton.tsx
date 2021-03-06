import './LoginButton.css';
import {useToggle} from "react-use";
import {_UserModal} from "../../abstracts/modal/UserModal";

export const LoginButton = () => {
    const [isModal, toggleModal] = useToggle(false);

    return (
        <>
            <div className="login-button">
                <div onClick={toggleModal} style={{padding: '2em'}}>
                    <p>login button</p>
                </div>
            </div>
            {_UserModal({toggleMySelf: () => {return "hello"}})}

            {isModal &&
            // <UserModal onClick={toggleMySelf} />
                <div>Foo</div> //
            }
        </>

    )
}