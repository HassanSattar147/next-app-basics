"use client";
import { GenericElements, THPositions } from "@/types";
import React, { CSSProperties, useMemo } from "react";

type TIntrinsicInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps extends TIntrinsicInputProps {
  containerStyle?: CSSProperties;
  containerClassname?: string;
  inputWrapperStyle?: CSSProperties;
  label?: string;
  labelStyle?: CSSProperties;
  iconComp?: GenericElements;
  onIconClick?: () => void;
  iconPosition?: THPositions;
  errorIconPosition?: THPositions;
  errorIcon?: GenericElements;
  inputPrevSibling?: GenericElements;
  inputNextSibling?: GenericElements;
  errorMsg?: string;
  infoMsg?: string;
  infoMsgClassName?: string;
  isRequired?: boolean;
  isRequiredDouble?: boolean;
  lefttTextForInputWeb?: string | undefined;
  onEnterPress?: () => void;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  containerClassname,
  inputWrapperStyle,
  label,
  labelStyle,
  iconComp,
  onIconClick,
  iconPosition = "left",
  errorIconPosition = "right",
  errorIcon,
  errorMsg = "",
  infoMsg = "",
  inputPrevSibling,
  inputNextSibling,
  isRequired = false,
  isRequiredDouble = false,
  onEnterPress,
  infoMsgClassName,
  inputClassName,
  ...props
}) => {
  const getIconClasses = (p: THPositions) => {
    return `absolute ${p === "left" ? "left-[14px]" : "right-[14px]"}`;
  };

  const _id = props.id || props.name || label;
  const isCb = props.type === "checkbox";

  const inputClasses = () => {
    const dimClasses = isCb ? "w-[100%] " : "w-[100%] ";
    const baseClasses =
      " px-[8px] rounded-[8px] disabled:pointer-events-none disabled:bg-[#F9FAFB] disabled:text-[#667085] shadow-sm border-[1px] outline-none outline-offset-0 focus:outline-4 placeholder-gray-500 text-[#101828]";
    const variantClasses = errorMsg
      ? "  border-[#FDA29B] focus:outline-[#FEE4E2] "
      : " border-gray-300 focus:outline-[#F4EBFF] ";

    return `${dimClasses} ${baseClasses} ${variantClasses} ${props.className}`;
  };

  return (
    <div
      className={`flex w-[100%] flex-col ${containerClassname}`}
      style={containerStyle}
    >
      {label && (
        <label
          htmlFor={_id}
          className="mb-1 text-sm font-medium text-[#344054] "
          style={labelStyle}
        >
          {label}
          {isRequired && (
            <span className="  text-[#118810]">
              &nbsp;* {isRequiredDouble ? "*" : ""}
            </span>
          )}
        </label>
      )}
      <div
        className={"relative h-[40px] box-border flex items-center gap-2"}
        style={inputWrapperStyle}
      >
        {inputPrevSibling}
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEnterPress?.();
            }
          }}
          {...props}
          id={_id}
          className={`h-[100%] w-[100%] ${inputClasses} ${inputClassName}`}
        />
        {inputNextSibling}
        {iconComp && (
          <div className={getIconClasses(iconPosition)} onClick={onIconClick}>
            {iconComp}
          </div>
        )}
        {errorIcon && (
          <div className={getIconClasses(errorIconPosition)}>{errorIcon}</div>
        )}
      </div>
      {infoMsg && (
        <p
          className={`${infoMsgClassName} mt-[6px] text-[14px] text-[#667085]`}
        >
          {infoMsg}
        </p>
      )}
      {errorMsg && <p className="text-[#be8b87]">{errorMsg}</p>}
    </div>
  );
};

export default Input;
