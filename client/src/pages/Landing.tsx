import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Container from "@/containers/app-container";

const Landing = () => {
  const array = [1, 2, 3];
  return (
    <Container>
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <img
          src="https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=188868&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!nFHNXVXH4UKYXH8EFJ2DcSTcaLXmck1LjbYRb8XWGe6YYcrtKgNhRL9VSqpz3min%2Fitems%2F01KKBJHQBQTURGJR4YQREI4I3PYUMHDS5V%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI1ZGNkNTE5Yy1jNzU1LTQyZTEtOTg1Yy03ZjA0MTQ5ZDgzNzEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzQ5NzUxMjAwIn0.wNo9ABe2EO7QKZVyWNFtC-apBps_dVr9jm-y2jS5at_03ULNWsQX46XCrck3bsjZaoA9WFqG_mkB-3l5wwlUB1RwByCqQZogmfZ5pEY6DlcDVCkPb_iEWN4qCT0PUPNSM8U11ssdix6ooHAlVDDac65T_Gx6JMhbzo8v2e6O5cYufiv0HdM_NkJqLugbLSsDzqHrWg-_-aQfXtj6fsgbGxptIz0xr1hAJn0akAHVhJu-BIPTn0lm_f4Bxtx2Gx6uP2SNvtNuZs0XNP6-MohjrtYBd5YS2LxRKQQTuIie1SB9xzdqI3O6eCTUXawddx5qakA2Dft92zf-uAuUscJySpKGJsQhdg9ogfFM5cR2VPJvfL_JNOeQFUYB2Nh6xJEGLvtlyQfISCkbKxuVYUEJViuV3VTU_Aq_xOfVe9x4lS0fb7yv_PyNmWDmVDtcMn2HIP5ejSBadicci7OgoKSIG8NPDTwK5DYqhiVKQ-vBBpc.pCgu6pVFjFXc6g3oKJFD1TvCAKsGtwUn464L1jGtlik%26version%3DPublished&cb=63885331787&encodeFailures=1&width=827&height=827"
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
