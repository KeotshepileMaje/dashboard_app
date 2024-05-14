"use client";

const Button = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-xl
        hover:opacity-80
        transition
        w-full
        border-slate-700
        flex
        items=center
        justify-center
        gap-2
        ${outline ? "bg-white hover:bg-emerald-200" : "bg-slate-700"}
        ${outline ? "text-slate" : "text-white"}
        ${small ? "text-sm font-light" : "text-md font-semibold"}
        ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2"}
        ${custom ? custom : ""}
        `}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;