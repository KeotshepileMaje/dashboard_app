
const AdminNav = ({children}) => {
  return (
    <div
      className="
        w-full
        shadow-sm
        top-20
        border-b-[1px]
        pt-4"
    >
      <div
        className="
                flex
                flex-row
                items-center
                justify-between
                md:justify-center
                gap-3
                md:gap-12
                overflow-x-auto
                flex-nowrap
                "
      >
        {children}
      </div>
    </div>
  );
};

export default AdminNav;
