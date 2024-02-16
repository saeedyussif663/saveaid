import projects from "@/lib/projects";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-[90%] mt-8 md:mt-16 md:w-full md:px-6"
    >
      <h1 className="text-xl mb-2 tracking-wider">Our Projects</h1>
      <Marquee pauseOnHover autoFill speed={50} gradient gradientWidth={10}>
        <div className="flex gap-8 items-center">
          {projects.map(
            ({
              title,
              image,
              id,
              description,
              amountExpected,
              amountRaised,
            }) => {
              const donationPrecentage = Math.floor(
                (amountRaised / amountExpected) * 100
              );
              const donationWidth = String(donationPrecentage) + "%";
              return (
                <div
                  key={id}
                  className="border h-[20rem] w-[10%] md:h-auto bg-neutral-100 p-2 rounded-md"
                >
                  <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={10}
                    className="h-[200px] md:h-[150px] w-[400px] rounded-xl hover:scale-x-105"
                  />
                  <p className="my-4 md:my-2 font-semi-bold tracking-wide">
                    {title}
                  </p>
                  <div className="mb-3 w-full rounded-full bg-yellow-300">
                    <div
                      className={`h-[6px] md:h-[4px] w-[${donationWidth}] bg-yellow-600 rounded-full`}
                    ></div>
                  </div>
                  <div className="text-sm flex justify-between">
                    <div>₵ {amountRaised}</div>
                    <div>₵ {amountExpected}</div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </Marquee>
      <div className="flex justify-center mt-4 ">
        <button className="bg-blue-500 hover:bg-blue-600 transition-all text-white rounded-md cursor-pointer px-3 py-1">
          See more...
        </button>
      </div>
    </section>
  );
}
