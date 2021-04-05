import style from './UserModal.module.css'

export const UserModal = (props: { toggleMySelf?: () => void }) => {

  const toggleMySelf = props.toggleMySelf || (() => window.alert("hello"))
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
        <button>OK</button>
        <button>cancel</button>
      </div>
    </div>
  );
}
