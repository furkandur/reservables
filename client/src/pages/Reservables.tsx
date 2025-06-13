import ReservableList from "@/components/ReservableList";
import Container from "@/containers/app-container";

const Reservables = () => {
  return (
    <Container>
      <div className=" space-y-3">
        <h2 className="scroll-m-20 text-2xl font-semibold">
          Nearby Reservables
        </h2>
        <ReservableList />
      </div>
      <div className="mt-8 space-y-3">
        <h2 className="scroll-m-20 text-2xl font-semibold">
          Other Reservables
        </h2>
        <ReservableList />
      </div>
    </Container>
  );
};

export default Reservables;
