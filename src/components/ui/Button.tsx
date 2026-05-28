"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      isLoading = false,
      icon,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    // Style configurations based on theme variables
    const baseStyles =
      "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-lg cursor-pointer select-none active:scale-[0.98] disabled:opacity-75 disabled:pointer-events-none disabled:active:scale-100 shrink-0";

    const variantStyles = {
      primary:
        "bg-[var(--highlight-color)] text-[var(--button-text)] border border-transparent hover:brightness-105 shadow-md shadow-[var(--highlight-color)]/25 hover:shadow-[var(--highlight-color)]/35",
      secondary:
        "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white shadow-sm",
      outline:
        "bg-transparent border border-[var(--card-border-color)] hover:bg-[var(--highlight-color)] hover:text-[var(--button-text)] hover:border-[var(--highlight-color)] text-[var(--heading-color)] shadow-sm",
      ghost:
        "bg-transparent border border-transparent hover:bg-[var(--highlight-color)]/10 text-[var(--heading-color)]",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-xs gap-1.5",
      md: "px-6 py-2.5 text-[13px] sm:text-sm gap-2",
      lg: "px-8 py-2.5 text-[14px] sm:text-[15px] gap-2.5",
    };

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && icon && <span className="shrink-0">{icon}</span>}
        {children}
      </>
    );

    // If an href is supplied, render as Next.js Link
    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          ref={ref as any}
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          {...(props as any)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={classes}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
