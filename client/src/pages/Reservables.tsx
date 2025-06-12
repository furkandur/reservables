import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

const GET_RESERVABLES = gql(`
  query allLocations {
  locations {
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
  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {data?.locations?.map((loc) => (
        <div>
          <h2 className="text-2xl font-semibold">{loc.name}</h2>
          <p>{loc.description}</p>
          <p>{loc.address}</p>
          <h3 className="text-lg font-medium">Open Days:</h3>
          <ul>
            {loc.openDays.map((day) => (
              <li key={day.day}>
                {day.day}: {day.startHour} - {day.endHour}
              </li>
            ))}
          </ul>
          <p>
            Created by: {loc.createdBy.name} {loc.createdBy.surname}
          </p>
          <p>Email: {loc.createdBy.email}</p>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default Reservables;
