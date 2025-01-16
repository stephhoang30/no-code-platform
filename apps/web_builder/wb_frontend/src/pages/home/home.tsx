import { DefaultFcProps, HasClasses } from "../../react-utils";

export const HomePage: React.FC<DefaultFcProps & HasClasses> = ({
  classes
}) => {
  return (
    <div className={classes.pageWrapper}>
      <h1 className="text-yellow-500 font-bold">This's home</h1>
    </div>
  );
};
