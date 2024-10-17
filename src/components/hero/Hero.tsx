import Image from "next/image";
import hero from "../../../public/images/hero.gif";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div>
            <h2 className="capitalize text-6xl font-bold text-[#161616] leading-[1.1]">
              bring your <span className="text-primary">business</span> <br />{" "}
              online <span className="text-primary">with</span> <br />{" "}
              <span className="text-primary">Bluefox</span> Pvt Ltd.
            </h2>
            <p className="text-lg text-justify font-semibold text-[#161616] tracking-wide pt-3">
              From website development to digital marketing, we provide scalable
              solutions to help startups and established businesses thrive in
              the digital world.
            </p>
            <div className="py-3 px-8 font-semibold mt-5 bg-primary text-center inline-block rounded-[8px] group cursor-pointer">
              <Link
                href="#"
                className="text-center uppercase text-white  group-hover:tracking-wider duration-500 transition-all ease-in-out"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="giff">
            <Image src={hero} alt="Hero Animation" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
