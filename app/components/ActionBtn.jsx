"use client";

const ActionBtn = ({
  icon: Icon,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex
        items-center
        justify-center
        rounded
        cursor-pointer
        w-[40px]
        h-[30px]
        text-slate-700
        border-4
        border-slate-400
        ${disabled && "opacity-50 cursor-not-allowed"}
        `}
    >
      <Icon size={18} />
    </button>
  );
};

export default ActionBtn;
