import type { Reservable } from "@/__generated__/graphql";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Link } from "react-router";

interface Props {
  reservable: Reservable;
  todayIndex: number;
}

const ReservableCard = ({ reservable, todayIndex }: Props) => {
  const openText = reservable.openDays[todayIndex]?.startHour
    ? `Today: ${reservable.openDays[todayIndex].startHour} - ${reservable.openDays[todayIndex].endHour}`
    : "Closed today";

  return (
    <div>
      <Link to={`/reservables/${reservable._id}`}>
        <AspectRatio
          ratio={4 / 3}
          className="rounded-lg shadow-sm overflow-hidden"
        >
          <img
            src={`https://picsum.photos/1920/1080?random=${reservable._id}`}
            alt={`Image of ${reservable.name}`}
            className="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
        <div className="py-3">
          <h2 className="scroll-m-20 text-l font-semibold">
            {reservable.name}
          </h2>
          <h3 className="scroll-m-20 text-l font-light text-muted-foreground">
            {openText}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ReservableCard;
