import projects from "@/lib/projects";

import Image from "next/image";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-[90%] mt-8 md:mt-16 md:w-full md:px-6"
    >
      <h1 className="text-xl mb-2 tracking-wider">Our Projects</h1>
      <div className="flex flex-col md:flex-row items-center w-full gap-[1.5rem]">
        {projects.map(
          ({ title, image, id, description, amountExpected, amountRaised }) => (
            <div
              key={id}
              className="border h-[20rem] bg-neutral-100 p-2 rounded-md"
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
              <div className="h-[4px] w-full rounded-full bg-yellow-300"></div>
              <div className="text-sm flex justify-between">
                <div>₵ {amountRaised}</div>
                <div>₵ {amountExpected}</div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
