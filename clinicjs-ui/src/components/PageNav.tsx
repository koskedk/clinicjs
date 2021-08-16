import React, { useEffect, useState } from "react";

interface IProps {
  title: string;
  tenant: string;
  getActiveLink(href: string): string;
  links: [
    {
      href: string;
      name: string;
    }
  ];
}

export default function PageNav(props: IProps) {
  return (
    <div>
      <nav className="pagenav">
        {props.links.map((link, index) => {
          return (
            <a
              className={props.getActiveLink(link.href)}
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
