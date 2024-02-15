import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black md:rounded-t-lg text-white flex flex-col justify-between md:flex-row w-full px-6 mt-8 md:mt-16 md:px-7 mx-auto"
    >
      <div className="py-3 flex justify-between md:w-2/5">
        <div>
          <Link href="/" className="text-xl">
            SaveAid
          </Link>
          <p className="text-base font-mono mt-2">
            helping a child, at a time.
          </p>
        </div>
        <div className="flex flex-col tracking-wide">
          <h2 className="text-lg">socials</h2>
          <div className="flex text-lg gap-4 mt-2">
            <FaFacebook className="hover:cursor-pointer" />
            <FaInstagram className="hover:cursor-pointer" />
            <FaXTwitter className="hover:cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="py-3 mb-4">
        <form className="flex flex-col">
          <label>Sign up for our newsletter:</label>
          <input
            type="text"
            className="outline-none w-full md:w-[18rem] rounded-md p-1 text-black mt-3 tracking-wide"
          />
        </form>
      </div>
    </section>
  );
}
