"use client";

import Link from "next/link";
import "../styles/Header.css";
import { Inter, Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["700"], display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: "500", display: "swap" });

const Header = () => {
  const pathname = usePathname();
  const [links, setLinks] = useState([
    { tag: "HOME", path: "/" },
    { tag: "HOW IT WORKS", path: "/how-it-works" },
    { tag: "TOURNAMENTS", path: "/tournaments" },
    { tag: "BLOG", path: "/blog" },
    { tag: "FORUMS", path: "/forums" },
    { tag: "SHOP", path: "/shop" },
    { tag: "CONTACT", path: "/contact" },
  ]);

  return (
    <div className="container">
      <div className="header_left">
        <img src="/images/header-logo.png" alt="Logo" />
        <h1 className={`${inter.className} title`}>VIRTUALITY</h1>
      </div>
      <div className="header_links">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`link ${roboto.className} ${
              pathname === link.path ? "active-link" : ""
            }`}
          >
            {link.tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
