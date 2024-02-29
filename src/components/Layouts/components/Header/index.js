import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import { Wrapper as ProperWrapper } from "~/components/Proper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  });

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok"></img>
        </div>

        <Tippy
          // để selected phần tử
          interactive
          // hiển thị khi độ dài tìm kiếm lớn hơn 0
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className="search-result" tabIndex="-1" {...attrs}>
              <ProperWrapper>
                <h4 className={cx("search_title")}>Account</h4>

                <AccountItem />
                <AccountItem />
                <AccountItem />
              </ProperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search"></input>

            <button className={cx("clear-btn")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx("loading-btn")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
        <Button text>Upload</Button>
          <Button primary>Login</Button>
          <Button outline large>Register</Button>
          <Button rounded>Get app</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
