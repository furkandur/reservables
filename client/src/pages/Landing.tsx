import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Container from "@/containers/AppContainer";

const Landing = () => {
  const array = [1, 2, 3];
  return (
    <Container>
      <AspectRatio ratio={21 / 9} className="bg-muted rounded-lg">
        <img
          src="https://picsum.photos/1920/1080"
          alt="Landing Image"
          className="h-full w-full rounded-lg object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-black opacity-30 rounded-lg"></div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-col jutify-center items-center gap-4 text-white">
            <h2 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
              Reserve your Reservables.
            </h2>
            <h4 className="scroll-m-20 text-center text-md font-bold tracking-tight text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              animi ut hic. Autem excepturi doloribus cupiditate?
            </h4>
            <Button>Get Started</Button>
          </div>
        </div>
      </AspectRatio>

      <div className="mt-12">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight text-balance">
          Find your perfect space
        </h2>
        <p className="mt-3 text-sm">
          Reservables offers a range of features to help you find and reserve
          the perfect space for your needs.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {array.map((e) => (
            <div className="w-full">
              <AspectRatio ratio={16 / 9} className="rounded-lg">
                <img
                  src={`https://picsum.photos/1920/1080?random=${e}`}
                  className="h-full w-full rounded-lg object-cover"
                />
              </AspectRatio>
              <h3 className="text-lg font-semibold mt-2">
                Reserve shared spaces
              </h3>
              <p className="text-sm text-muted-foreground">
                Easily book meeting room, event space, or shared workspace.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight text-balance">
          Explore Our Features
        </h2>
        <p className="mt-3 text-sm">
          You can create, manage, and reserve spaces with ease. Our platform
          streamlines the reservation process, making it simple and efficient
          for everyone.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {array.map((e) => (
            <div className="w-full">
              <AspectRatio ratio={3 / 4} className="rounded-lg">
                <img
                  src={`https://picsum.photos/1080/1920?random=${e}`}
                  className="h-full w-full rounded-lg object-cover"
                />
              </AspectRatio>
              <h3 className="text-lg font-semibold mt-2">
                Reserve shared spaces
              </h3>
              <p className="text-sm text-muted-foreground">
                Easily book meeting room, event space, or shared workspace.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center space-y-4">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight text-balance">
          Ready to Connect?
        </h2>
        <Button>Sign Up Now!</Button>
      </div>
    </Container>
  );
};

export default Landing;
