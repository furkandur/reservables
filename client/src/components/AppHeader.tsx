import { Link } from "react-router";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const AppHeader = () => {
  return (
    <header>
      <div className="flex flex-col sm:flex-row gap-2 w-full items-center justify-between p-4">
        <div className="flex items-center h-8">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
            Reservables
          </h1>
        </div>
        <div className="flex items-center gap-2 h-8">
          <Link to="/">
            <Button variant="link">Home</Button>
          </Link>
          <Link to="/reservables">
            <Button variant="link">Reservables</Button>
          </Link>
          <Link to="/about">
            <Button variant="link">About</Button>
          </Link>
          <Link to="/contact">
            <Button variant="link">Contact</Button>
          </Link>
          <Link to="/login">
            <Button variant="default">Login</Button>
          </Link>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default AppHeader;
