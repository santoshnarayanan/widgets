import React from "react";

const Link = ({className, href, children}) => {
    const onMenuClick= (event) =>{
        //! metakey is in Mac machines and ctrlKey is on windows machine
        if(event.metaKey || event.ctrlKey){
            return;
        }
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