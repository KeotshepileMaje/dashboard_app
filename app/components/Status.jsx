"use client";

const Status = ({ text, icon: Icon, bg, color }) => {
  return (
    <div
      className={`
        ${bg}
        ${color}
        px-1
        rounded
        flex
        items-center
        gap-1
        h-6
        mt-3
        w-fit
        `}
    >
      {text} <Icon size={15} />
    </div>
  );
};

export default Status;
