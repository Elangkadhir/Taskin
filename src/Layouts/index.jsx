import Header from "../Shared/Header";
import SideMenu from "../Shared/SideMenu";

function Layouts({ children }) {
  return (
    <div className=" h-screen flex flex-col">
      <div className="h-[100px] ">
        <Header />
      </div>
      <div className="h-full flex">
        <div className="h-full w-[20%] p-2">
          <SideMenu />
        </div>
        <div className="p-2 overflow-y-scroll w-full ">{children}</div>
      </div>
    </div>
  );
}

export default Layouts;
