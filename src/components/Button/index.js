import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

function Button({to, href, primary= false, outline = false, text = false, rounded = false, small = false, large = false, children, onClick, ...passProps}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps
    }
    if (to) {
        Comp = Link;
        props.to = to;
    }
    else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classes = cx('wrapper', {
        primary,
        outline, 
        text,
        rounded,
        small,
        large
    });

    return ( 
    <Comp className={classes} {...props}>
        <span>{children}</span>
    </Comp>);
}

export default Button;