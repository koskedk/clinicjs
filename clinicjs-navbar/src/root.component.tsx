import React, { useEffect, useState } from "react";
import { TopNav } from "@clinicjs/ui";
import { links } from "./root-helper";

export default function Root(props) {
  const [activelink, setActiveLink] = useState("/");

  useEffect(() => {
    const current = window.location.pathname.split("/")[1];
    const getLink = links.filter((x) => `/${current.toLowerCase()}` === x.href);
    if (getLink.length > 0) {
      setActiveLink(getLink[0].href);
    }
  }, []);

  const getActiveLink = (href) => {
    return activelink === href ? "active" : "";
  };

  return (
    <TopNav
      title={" liveCLINIC"}
      tenant={"Nairobi West Clinic"}
      links={links}
      setActiveLink={getActiveLink}
    ></TopNav>
  );
}
