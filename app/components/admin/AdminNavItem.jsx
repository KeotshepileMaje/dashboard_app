const AdminNavItem = ({ selected, icon: Icon, label }) => {
  return (
    <div
      className={`
        flex items-center justify-center
        text-center gap-1 p-2 border-b-2
        hover:text-slate-800
        transition
        cursor-pointer
        ${
          selected
          ? "border-slate-transparent text-slate-800"
          : "border-transparent text-slate-500"
        }
      `}
    >
      <div className="hidden md:block"><Icon size={20} /></div>
      
      <div
        className="
        font-medium
        text-sm
        text-center
        break-normal
        "
      >
        {label}
      </div>
    </div>
  );
};

export default AdminNavItem;
