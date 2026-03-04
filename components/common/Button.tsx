import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

import IconBtnDefaultCornerShape from "@/components/icons/buttons/default/IconBtnDefaultCornerShape";
import IconBtnDefaultMidShape from "@/components/icons/buttons/default/IconBtnDefaultMidShape";
import IconDiamondLeft from "../icons/buttons/secondary/IconDiamondLeft";
import IconDiamondRight from "../icons/buttons/secondary/IconDiamondRight";
import IconSecondaryBtnDecorTop from "../icons/buttons/secondary/IconSecondaryBtnDecorTop";
import IconSecondaryBtnDecorBottom from "../icons/buttons/secondary/IconSecondaryBtnDecorBottom";

type ButtonVariant = "default" | "secondary";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  active?: boolean;
  additionalText?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  children,
  variant = "default",
  className = "",
  href,
  active = false,
  additionalText,
  ...props
}: ButtonProps) {
  const baseClass =
    (variant === "secondary" ? "secondary-btn" : "default-btn") +
    " relative group";

  const classes = baseClass + (className ? ` ${className}` : "");

  const dataAttrs = active ? { "data-active": "true" } : {};

  const content = (
    <>
      {variant === "default" && (
        <>
          <div className="default-btn-shapes">
            <IconBtnDefaultCornerShape className="default-btn-shape default-btn-shape--corner-top-left" />
            <IconBtnDefaultCornerShape className="default-btn-shape default-btn-shape--corner-top-right" />
            <IconBtnDefaultCornerShape className="default-btn-shape default-btn-shape--corner-bottom-left" />
            <IconBtnDefaultCornerShape className="default-btn-shape default-btn-shape--corner-bottom-right" />
            <IconBtnDefaultMidShape className="default-btn-shape default-btn-shape--mid-top" />
            <IconBtnDefaultMidShape className="default-btn-shape default-btn-shape--mid-bottom" />
          </div>

          <div className="default-btn-text">
            <span>{children}</span>
            <span className="default-btn-text--border-top-left" />
            <span className="default-btn-text--border-top-right" />
            <span className="default-btn-text--border-bottom-left" />
            <span className="default-btn-text--border-bottom-right" />
          </div>
        </>
      )}

      {variant === "secondary" && (
        <>
          <div className="secondary-btn-text">
            <span className="secondary-btn-label">{children}</span>

            <div className="secondary-btn-borders">
              <span className="secondary-btn-borders--corner-top-left" />
              <span className="secondary-btn-borders--corner-top-right" />
              <span className="secondary-btn-borders--corner-bottom-left" />
              <span className="secondary-btn-borders--corner-bottom-right" />

              <span className="secondary-btn-borders--border-top-left" />
              <span className="secondary-btn-borders--border-top-right" />
            </div>

            <div className="secondary-btn-hover-state" />
          </div>

          <div className="secondary-btn-decos">
            <IconDiamondLeft className="secondary-btn-decos--icon-diamond-left" />
            <IconDiamondRight className="secondary-btn-decos--icon-diamond-right" />

            <IconSecondaryBtnDecorTop className="secondary-btn-decos--icon-decor-top" />
            <IconSecondaryBtnDecorBottom className="secondary-btn-decos--icon-decor-bottom" />
          </div>
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...dataAttrs} prefetch={false}>
        {content}
        <span className="sr-only">{additionalText}</span>
      </Link>
    );
  }

  return (
    <button className={classes} {...props} {...dataAttrs}>
      {content}
      <span className="sr-only">{additionalText}</span>
    </button>
  );
}
