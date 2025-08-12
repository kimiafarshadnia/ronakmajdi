"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

import Link from "next/link";
import { clsx } from "@/utils";

type Variant = "primary" ;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconProp;
  iconSize?: SizeProp;
  children?: ReactNode;
  className?: string;
  variant?: Variant;
  fullWidth?: boolean;
  href?: string;
}

export const Button = ({
  icon,
  iconSize = "sm",
  children,
  className = "",
  variant = "primary",
  fullWidth = false,
  href,
  ...rest
}: Props) => {
  const baseStyles =
    "inline-flex items-center rounded-full justify-center cursor-pointer px-8 py-2 text-sm font-medium duration-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<Variant, string> = {
    primary: "border border-black text-black hover:border-2 focus:ring-black ",
  };

  const content = (
    <>
      {icon && <FontAwesomeIcon icon={icon} size={iconSize} className="me-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          baseStyles,
          variants[variant],
          fullWidth && "w-full",
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {content}
    </button>
  );
};
