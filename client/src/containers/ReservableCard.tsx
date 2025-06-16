import type { Reservable } from "@/__generated__/graphql";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card className="flex flex-col h-full pt-0">
      <AspectRatio ratio={12 / 8} className="overflow-hidden">
        <img
          src={`https://picsum.photos/1920/1080?random=${reservable._id}`}
          alt={`Image of ${reservable.name}`}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </AspectRatio>
      <CardHeader className="flex-1">
        <CardTitle>{reservable.name}</CardTitle>
        <CardDescription>{reservable.description}</CardDescription>
        <CardDescription>{openText}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={`/reservables/${reservable._id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ReservableCard;
