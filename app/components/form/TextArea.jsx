const TextArea= ({
  id,
  label,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className=" w-full relative ">
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        className={`
            peer
            w-full
            max-h-[150px]
            min-h-[100px]
            p-4
            pt-6
            outline-none
            bg-white
            font-light
            border-2
            rounded-md
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${errors[id] ? "bordeer-rose-400" : "border-slate-300"}
            ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}
            `}
      />
      <label
        htmlFor={id}
        className={`
                absolute
                cursor-text
                text-md
                duration-150
                tranform
                -translate-y-3
                top-5
                z-10
                origin-[0]
                left-4
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-4
                ${errors[id] ? "text-rose-500" : "text-slate-500"}
                `}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
