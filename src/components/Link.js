import React from "react";

const Link = ({className, href, children}) => {
    const onMenuClick= (event) =>{
        event.preventDefault();
        window.history.pushState({},'',href); //! update url but it will not do page refresh

        const navEvent =  new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
    <a onClick={onMenuClick} className={className} href={href}>
    {children}
    </a>
    );
};

export default Link;