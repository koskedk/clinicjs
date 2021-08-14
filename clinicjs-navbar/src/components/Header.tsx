import React, { useEffect, useState } from "react";
import { TopNav } from "@clinicjs/ui";
import { links } from "./header-links";

export const Header = () => {
  const [activelink, setActiveLink] = useState("/");

  useEffect(() => {
    const current = window.location.pathname.split("/")[1];
    const getLink = links.filter((x) => `/${current.toLowerCase()}` === x.href);
    if (getLink.length > 0) {
      setActiveLink(getLink[0].href);
    }
  }, []);

  const checkActive = (href) => {
    return activelink === href ? "active" : "";
  };

  return (
    <TopNav
      title={" liveCLINIC"}
      tenant={"Nairobi West Clinic"}
      links={links}
      getActiveLink={checkActive}
    ></TopNav>
  );
};
