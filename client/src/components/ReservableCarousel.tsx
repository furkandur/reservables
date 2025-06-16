import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import QueryResult from "./QueryResult";
import ReservableCard from "@/containers/ReservableCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const GET_RESERVABLES = gql(`
  query allReservables {
    reservables {
      _id
      name
      description
      address
      openDays {
        day
        startHour
        endHour
      }
      createdBy {
        _id
        name
        surname
        email
      }
    }
  }
`);

const ReservableList = () => {
  const { data, loading, error } = useQuery(GET_RESERVABLES);
  const todayIndex = new Date().getDay();

  return (
    <>
      <QueryResult data={data} loading={loading} error={error}>
        <Carousel className="w-full">
          <CarouselContent className="my-1">
            {data?.reservables?.map((reservable) => (
              <CarouselItem
                key={reservable._id}
                className="basis-1/1 md:basis-1/2 lg:basis-1/4"
              >
                <ReservableCard
                  key={reservable._id}
                  reservable={reservable}
                  todayIndex={todayIndex}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </QueryResult>
    </>
  );
};

export default ReservableList;
