import classNames from "classnames"
import NavigationContext from "./context/Navigation";
import { useContext } from "react";

function Link({to, children, className, activeClassName}) {
    const { navigate, currentPath } = useContext(NavigationContext)

    const classes = classNames(
        "text-blue-500 cursor-pointer",
        className,
        currentPath === to && activeClassName
    )

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to)
    }

    return <a className={classes} onClick={handleClick}>{children}</a>
}

export default Link;