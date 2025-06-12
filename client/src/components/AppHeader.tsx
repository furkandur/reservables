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
          <Button variant="link">Home</Button>
          <Button variant="link">Locations</Button>
          <Button variant="link">About</Button>
          <Button variant="link">Contact</Button>
          <Button variant="default">Login</Button>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default AppHeader;
