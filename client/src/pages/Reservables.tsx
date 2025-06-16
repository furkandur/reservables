import ReservableGrid from "@/components/ReservableGrid";
import ReservableCarousel from "@/components/ReservableCarousel";
import Container from "@/containers/AppContainer";

const Reservables = () => {
  return (
    <Container>
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-3xl font-bold">Popular Reservables</h2>
        <ReservableCarousel />
      </div>
      <div className="mt-16 space-y-6">
        <h2 className="scroll-m-20 text-3xl font-bold">Nearby Reservables</h2>
        <ReservableGrid />
      </div>
    </Container>
  );
};

export default Reservables;
