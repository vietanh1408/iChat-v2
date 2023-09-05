"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  Icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  href,
  Icon,
  label,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `
            group
            flex
            gap-3
            rounded-md
            p-3
            text-sm
            leading-6
            font-semibold
            text-gray-500
            hover:text-black
            hover:bg-gray-100
      `,
          active && "bg-gray-100 text-back"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
