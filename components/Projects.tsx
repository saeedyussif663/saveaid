import Image from "next/image";
import image from "@/assets/mosque.jpeg";
import { fetchUpcomingProject } from "@/lib/fetchUpcomingProjects";

export async function Projects() {
  const projects: [] = await fetchUpcomingProject();

  return (
    <section
      id="projects"
      className="mx-auto w-[90%] mt-8 md:mt-16 md:w-full md:px-6"
    >
      <h1 className="text-xl mb-2 tracking-wider">Our Projects</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {projects.map(({ title, _id, amountExpected, amountRaised }) => {
          const donationPrecentage = Math.floor(
            (amountRaised / amountExpected) * 100
          );
          const donationWidth = String(donationPrecentage) + "%";
          return (
            <div
              key={_id}
              className="border h-[20rem] md:h-auto bg-neutral-100 p-2 rounded-md"
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
        })}
      </div>
      <div className="flex justify-center mt-4 ">
        <button className="bg-[#2185d0] hover:bg-blue-600 transition-all text-white rounded-md cursor-pointer px-3 py-1">
          See more...
        </button>
      </div>
    </section>
  );
}
