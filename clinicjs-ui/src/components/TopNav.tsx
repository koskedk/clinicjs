import React, { useEffect, useState } from "react";

interface IProps {
  title: string;
  tenant: string;
  activelink: string;
  links: [
    {
      href: string;
      name: string;
    }
  ];
}

export default function TopNav(props: IProps) {
  return (
    <div>
      <header>
        <div className="grid">
          <div className="col-fixed">{props.title}</div>
          <div className="col">
            <div className="flex align-items-center justify-content-center">
              {props.tenant}
            </div>
          </div>
        </div>
      </header>
      <nav className="topnav">
        {props.links.map((link, index) => {
          return (
            <a
              className={props.activelink === link.href ? "active" : ""}
              href={link.href}
              key={index}
            >
              {link.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
