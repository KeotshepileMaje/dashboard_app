const Container = ({ children }) => {
  return (
    <div
      className="
        max-w-[1440px]
        mx-auto
        xl-px-20
        md-px-2
        px-8
        "
    >
      {children}
    </div>
  );
};

export default Container;
