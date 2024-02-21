import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function Landing() {
  return (
    <section
      id="home"
      className="flex flex-col justify-between md:flex-row mx-auto w-[90%] gap-6 mt-8 md:mt-16 md:w-full md:px-6"
    >
      <div className="flex flex-col justify-end">
        <h1 className="text-2xl">Together, we can make a difference.</h1>
        <h3 className="text-lg mt-3 font-mono">
          Help a child at a time by donating <br /> to causes you care about.
        </h3>
        <p className="hidden md:block max-w-[30rem] font-mono text-lg mt-6">
          Welcome to Save-Aid, a platform where everyday people can come
          together to make a difference. We seek to help the less previleged
          with medical bills or education costs, or you want to support a
          community project or important social issue, Save-Aid is here to help.
        </p>
        <Link
          href="#about"
          className="bg-blue-400 text-white w-max mt-6 px-3 py-2 rounded-md hover:bg-blue-500 transition-all duration-500"
        >
          Learn More
        </Link>
      </div>
      <div className="border-2 border-gray-300 w-full md:w-auto h-[390px] rounded-2xl grid gap-x-3 gap-y-2 place-items-center grid-cols-2 p-2">
        {images.map((image) => (
          <Image
            key={image.alt}
            src={image.src}
            className="rounded-lg flex-1 h-[175px]"
            width={170}
            height={120}
            alt="sad-image"
          />
        ))}
      </div>
    </section>
  );
}
