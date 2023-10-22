import { twMerge } from "tailwind-merge";

import { ButtonProps } from "./button.interface";
import Spinner from "@/components/icons/spinner";
import {
  colorSchemeOutlineClasses,
  colorSchemeSolidClasses,
  sizeClasses,
} from "./button.constant";
import classNames from "classnames";

function Button(props: ButtonProps) {
  const isIcon = props.isLoading ? <Spinner /> : props.icon;
  const disabled = props.isLoading || props.disabled;
  const baseClassName =
    "flex items-center rounded-lg default-transition cursor-pointer disabled:cursor-not-allowed";

  const { variant = "solid", colorScheme = "primary", size = "md" } = props;

  function getVariantClasses() {
    switch (variant) {
      case "outline":
        return classNames(
          colorSchemeOutlineClasses[colorScheme],
          "border-2 bg-transparent"
        );
      case "ghost":
        return classNames(
          colorSchemeOutlineClasses[colorScheme],
          "bg-transparent"
        );
      case "link":
        return classNames(
          colorSchemeOutlineClasses[colorScheme],
          "border-b-2 rounded-none"
        );
      default:
        return classNames(
          colorSchemeSolidClasses[colorScheme],
          "text-black hover:bg-opacity-80"
        );
    }
  }

  const elementClassName = twMerge(
    baseClassName,
    props.href && "w-fit",
    disabled == false && "active:scale-90",
    getVariantClasses(),
    sizeClasses[size],
    props.className
  );

  if (props.href) {
    return (
      <a
        href={props.href}
        className={elementClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={elementClassName}
      onClick={props.onClick}
    >
      {isIcon && props.iconPos === "left" && (
        <span className="mr-2">{isIcon}</span>
      )}
      {props.children}
      {isIcon && props.iconPos === "right" && (
        <span className="ml-2">{isIcon}</span>
      )}
    </button>
  );
}

Button.defaultProps = {
  iconPos: "left",
  disabled: false,
  colorScheme: "primary",
};

export default Button;
