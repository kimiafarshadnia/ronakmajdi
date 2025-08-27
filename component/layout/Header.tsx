"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../ui/Icon";
import { faBars, faChevronDown, faX } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "@/types";
import { menuItems } from "@/constant";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function RenderSubMenu({
  items,
  mobile = false,
  onCloseMobileMenu,
}: {
  items: MenuItem[];
  mobile?: boolean;
  onCloseMobileMenu?: () => void;
}) {
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  if (mobile) {
    return (
      <ul className="pr-3">
        {items.map((item) => (
          <li key={item.title} className="mb-2">
            <div className="flex justify-between items-center">
              <Link
                href={item.href}
                className="block py-2 text-white/70 hover:text-white"
                onClick={() => {
                  if (onCloseMobileMenu) onCloseMobileMenu();
                }}
              >
                {item.title}
              </Link>
              {item.sub && item.sub.length > 0 && (
                <button
                  onClick={() => toggleSubMenu(item.title)}
                  aria-label="Toggle submenu"
                  className="ml-2"
                >
                  <Icon
                    iconName={faChevronDown}
                    className={`transition-transform ${
                      openSubMenus[item.title] ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              )}
            </div>

            <AnimatePresence>
              {openSubMenus[item.title] && item.sub && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <RenderSubMenu
                    items={item.sub}
                    mobile
                    onCloseMobileMenu={onCloseMobileMenu}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="bg-[#111111] mt-1 min-w-[200px]">
      {items.map((item) => (
        <li key={item.title} className="relative group">
          <Link
            href={item.href}
            className="block px-4 py-2 hover:bg-black whitespace-nowrap"
          >
            {item.title}
          </Link>
          {item.sub && item.sub.length > 0 && (
            <div className="absolute top-0 right-full ml-1 hidden group-hover:block z-50">
              <RenderSubMenu items={item.sub} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-row items-center justify-between">
        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <Icon iconName={mobileOpen ? faX : faBars} size="xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-52 sm:w-64 h-full bg-black shadow-lg z-50 p-6 overflow-y-auto md:hidden"
            >
              {/* Logo */}
              <div className="mb-6 flex justify-center shrink-0 h-10">
                <Link href="/">
                  <img
                    src="/images/completeLogo.svg"
                    className="w-full h-full object-contain"
                    alt="BRAND_LOGO"
                    loading="lazy"
                  />
                </Link>
              </div>

              {/* Menu items */}
              <RenderSubMenu
                items={menuItems}
                mobile
                onCloseMobileMenu={closeMobileMenu}
              />
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row-reverse items-center justify-end gap-8 w-fit max-w-7xl px-4">
          <ul className="flex flex-row gap-10 py-4">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.sub &&
                  item.sub.some((sub) => pathname.startsWith(sub.href)));

              return (
                <li
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.sub && setOpenMenu(item.title)}
                  onMouseLeave={() => item.sub && setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 font-medium cursor-pointer ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.title}
                    {item.sub && (
                      <Icon
                        iconName={faChevronDown}
                        className="text-xs mt-[2px]"
                      />
                    )}
                  </Link>

                  {/* Dropdown Submenu */}
                  <AnimatePresence>
                    {openMenu === item.title && item.sub && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 z-50"
                      >
                        <RenderSubMenu items={item.sub} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex justify-center items-center shrink-0 w-[120px] sm:w-[150px]">
          <Link href="/">
            <img
              src="/images/nameLogo-white.svg"
              className="w-full h-full object-contain shrink-0"
              alt="BRAND_LOGO"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/" className="hover:scale-130 duration-300">
            <Icon iconName={faWhatsapp} size="lg" />
          </Link>
          <Link href="/" className="hover:scale-130 duration-300">
            <Icon iconName={faInstagram} size="lg" />
          </Link>
        </div>
      </div>
    </header>
  );
}
