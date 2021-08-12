import React, {useEffect, useState} from "react";
import {links} from "./root-helper";

export default function Root(props) {

  const [activelink, setActiveLink] = useState("/");

  useEffect(() => {
    const current = window.location.pathname.split('/')[1]
    const getLink = links.filter(x => `/${current.toLowerCase()}` === x.href);
    if (getLink.length > 0) {
      setActiveLink(getLink[0].href);
    }
  }, []);

  return (
      <div className="topnav">
        {links.map((link, index) => {
          return (
              <a className={activelink === link.href ? "active" : ""} href={link.href} key={index}>{link.name}</a>
          );
        })}
      </div>
  );
}
