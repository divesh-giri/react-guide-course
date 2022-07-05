import styles from "./Overlay.module.css";

const Overlay = (props) => {
  const onClickHandler = (e) => {
    props.onClickExit();
  };
  const onBlurClickHandler = (e) => {
    if (e.target.classList.contains("blurArea")) {
      props.onClickExit();
    }
  };
  return (
    <div
      onClick={onBlurClickHandler}
      className={`blurArea ${styles["viewport-container"]}`}
    >
      <div className={styles["overlay-container"]}>
        <h1>ERROR!!</h1>
        <p>{props.error[1]}</p>
        <button onClick={onClickHandler} className={styles.exitBtn}>
          X
        </button>
      </div>
    </div>
  );
};

export default Overlay;
