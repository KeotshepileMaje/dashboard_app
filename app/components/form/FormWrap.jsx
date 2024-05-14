const FormWrap = ({ children }) => {
  return (
    <div
      className="
        min-h-fit
        h-full
        flex
        items-center
        justify-center
        pb:2
        pt-2
        md:pb-12
        md:pt-24
        "
    >
      <div
        className="
            w-full
            flex
            flex-col
            gap-6
            items-center
            rounded-md
            
            md:p-8
            "
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrap;
