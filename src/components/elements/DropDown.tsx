import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { LV } from "@/types";
// import IconButton from "./IconButton";
import dropDownIcon from "../../../public/common/arrow-down.svg";

interface IProps {
  label: string;
  options: LV[];
  selectedOptions: LV[] | undefined;
  setSelectedOptions: Dispatch<SetStateAction<LV[] | undefined>>;
  isMulti?: boolean;
  uniqueValue?: string;
  isRequired?: boolean;
  labelClassName?: string;
}

const ControlledDD: React.FC<IProps> = ({
  options,
  selectedOptions,
  setSelectedOptions,
  isMulti = false,
  uniqueValue,
  label,
  isRequired = false,
  labelClassName,
}) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (option: LV) => {
    console.log("fxn runs1");

    const isUnique = option.value === uniqueValue;
    setSelectedOptions((prev) => {
      console.log("fxn runs2");
      if (isUnique) return [option];
      console.log("fxn runs3");
      const filtered = prev?.filter((sel) => sel.value !== uniqueValue);
      if (filtered) {
        console.log("fxn runs4");
        return isMulti
          ? prev?.some((sel) => sel.value === option.value)
            ? filtered?.filter((sel) => sel.value !== option.value)
            : [...filtered, option]
          : [option];
      }
      console.log("fxn runs5");
    });
    console.log("fxn runs6");
    if (!isMulti || isUnique) setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) =>
    dropdownRef.current &&
    !dropdownRef.current.contains(e.target as Node) &&
    setIsOpen(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    // if (e.key === "Backspace") {
    //   e.preventDefault();
    //   setSelectedOptions((prev) => (isMulti ? prev?.slice(0, -1) : []));
    // } else
    if (["ArrowDown", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev === null
          ? 0
          : (prev + (e.key === "ArrowDown" ? 1 : -1) + options.length) %
            options.length
      );
    } else if (e.key === "Enter" && highlightedIndex !== null) {
      handleOptionClick(options[highlightedIndex]);
    }
  };

  const scrollToHighlighted = (index: number) => {
    if (optionsRef.current) {
      const option = optionsRef.current.children[index] as HTMLElement;
      if (option) {
        optionsRef.current.scrollTop =
          option.offsetTop - optionsRef.current.offsetTop;
      }
    }
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [highlightedIndex]);

  useEffect(() => {
    if (highlightedIndex !== null) scrollToHighlighted(highlightedIndex);
  }, [highlightedIndex]);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {label && (
        <label className={labelClassName} htmlFor="">
          {label}
          {isRequired && <span className="  text-[#118810]">&nbsp;*</span>}
        </label>
      )}
      <div
        className="flex min-h-[44px] cursor-pointer items-center gap-2  rounded-[8px] border-[1px] bg-white p-1 px-[8px] text-[#101828] placeholder-gray-500 shadow-sm outline-none outline-offset-0 focus:outline-4 disabled:pointer-events-none disabled:bg-[#F9FAFB] disabled:text-[#667085]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-1 flex-wrap gap-1 ">
          {selectedOptions?.length ? (
            selectedOptions?.map((option) => (
              <span
                key={option.value}
                className={`${
                  isMulti &&
                  "rounded bg-[#E1F3E0] px-2 py-1 text-[12px] text-[#118810]"
                }`}
              >
                {option.label}
              </span>
            ))
          ) : (
            <span className="text-gray-500">Select options</span>
          )}
        </div>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <span className="ml-2 cursor-pointer text-[#000]">&times;</span>
        </div>
      </div>
      <div
        ref={optionsRef}
        className={`absolute z-10 mt-2  flex w-full flex-col gap-1 overflow-auto rounded border bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 "
        }`}
      >
        {options.map((option, index) => {
          const isSelected = selectedOptions?.some(
            (sel) => sel.value === option.value
          );
          const isHighlighted = highlightedIndex === index;

          return (
            <div
              key={option.value}
              className={`flex items-center justify-between p-2 ${
                isSelected
                  ? " bg-[#E1F3E0]  text-[#000]"
                  : isHighlighted
                  ? "bg-gray-200"
                  : "hover:bg-[#E1F3E0]"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
              {isSelected && isMulti && (
                <span className="ml-2 cursor-pointer text-[#000]">&times;</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlledDD;
