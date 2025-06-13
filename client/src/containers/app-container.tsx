const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-4 sm:px-15 py-6 mt-6 space-y-6">
      {children}
    </div>
  );
};
export default Container;

//className="container mx-auto px-4 sm:px-15 py-6 space-y-6"
