import './LoginButton.css';
import {useToggle} from "react-use";
import {UserModal} from "../../abstracts/modal/UserModal";

export const LoginButton = () => {
    const [isModal, toggleModal] = useToggle(false);
    return (
        <>
            <div className="login-button">
                <div onClick={toggleModal}>
                    <p>Please</p>
                </div>
            </div>
            {isModal &&
            <UserModal toggleMySelf={toggleModal} />
            }
        </>
    )
}