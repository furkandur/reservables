import { Button } from "./ui/button";

const AppFooter = () => {
  return (
    <footer className="mt-30 py-4">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-4 px-4 sm:px-15">
          <Button variant="link" className="text-sm text-muted-foreground">
            Terms of Service
          </Button>
          <Button variant="link" className="text-sm text-muted-foreground">
            Privacy Policy
          </Button>
          <Button variant="link" className="text-sm text-muted-foreground">
            Contact Us
          </Button>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4 font-light">
          ©2025 Reservables. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default AppFooter;
