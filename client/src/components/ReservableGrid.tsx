import { gql } from "@/__generated__";
import QueryResult from "./QueryResult";
import { useQuery } from "@apollo/client";
import ReservableCard from "@/containers/ReservableCard";

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

const ReservableGrid = () => {
  const { data, loading, error } = useQuery(GET_RESERVABLES);
  const todayIndex = new Date().getDay();

  return (
    <>
      <QueryResult data={data} loading={loading} error={error}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.reservables?.map((reservable) => (
            <ReservableCard
              key={reservable._id}
              reservable={reservable}
              todayIndex={todayIndex}
            />
          ))}
        </div>
      </QueryResult>
    </>
  );
};

export default ReservableGrid;
