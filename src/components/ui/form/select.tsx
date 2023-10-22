import { replaceWith } from "@/utilities/common";
import { SelectProps } from "./form.interface";
import { twMerge } from "tailwind-merge";

function Select(props: SelectProps) {
  return (
    <div>
      <label htmlFor={replaceWith(props.label)} className="sr-only">
        {props.label}
      </label>
      <select
        id={replaceWith(props.label)}
        name={props.name ?? replaceWith(props.label)}
        className={twMerge(
          "block py-2.5 px-0 w-full text-sm text-gray-400 focus:text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 default-transition peer",
          props.className
        )}
        onChange={props.onChange}
      >
        <option defaultValue={props.defaultValue}>{props.defaultValue}</option>
        {props.options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {props.validationError && (
        <p className="text-red-500 text-sm">{props.validationError}</p>
      )}
    </div>
  );
}

export default Select;
