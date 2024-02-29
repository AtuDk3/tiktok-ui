import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5418a692b6fdb78966c04459bb79ee03.jpeg?lk3s=a5d48078&x-expires=1709290800&x-signature=z4eHZO9da%2BD4UcMYCd8qp3pPyEU%3D" alt="Thanh Tú"></img>
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span> Đỗ Thanh Tú</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>@ThanhTuDzx</span>
      </div>
    </div>
  );
}

export default AccountItem;
