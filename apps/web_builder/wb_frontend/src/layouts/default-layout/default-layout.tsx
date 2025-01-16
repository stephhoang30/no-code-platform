import { Outlet } from "react-router-dom";
import { DefaultFcProps, HasClasses } from "../../react-utils";
import {
  Header,
  Sidebar,
} from "../../components";
import { ProjectList } from "../../components/project-card/project-list";

export const DefaultLayout: React.FC<DefaultFcProps & HasClasses> = ({
  classes
}) => {
  return (
    <div className={classes.pageWrapper} >
      <div className="flex w-full flex-1">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Outlet />
          <div className="bg-gray-100 min-h-screen">
            <ProjectList />
          </div>
        </div>
      </div>
      <footer className="bg-green-500">This's footer</footer>
    </div>
  );
};
