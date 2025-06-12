import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        <Button variant={"ghost"}>Go to Home</Button>
      </Link>
    </div>
  );
};
export default NotFound;
