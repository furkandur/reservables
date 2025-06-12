import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

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

const Reservables = () => {
  const { data, loading, error } = useQuery(GET_RESERVABLES);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {data?.reservables?.map((resvbl) => (
        <div key={resvbl._id}>
          <h2 className="text-2xl font-semibold">{resvbl.name}</h2>
          <p>{resvbl.description}</p>
          <p>{resvbl.address}</p>
          <h3 className="text-lg font-medium">Open Days:</h3>
          <ul>
            {resvbl.openDays.map((day) => (
              <li key={day.day}>
                {day.day}: {day.startHour} - {day.endHour}
              </li>
            ))}
          </ul>
          <p>
            Created by: {resvbl.createdBy.name} {resvbl.createdBy.surname}
          </p>
          <p>Email: {resvbl.createdBy.email}</p>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default Reservables;
