import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <section className="h-full 2xl:pb-24">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-10">
          <div className="text-center xl:text-left order-2 xl:order-0">
            <span className="text-xl">Sotware Developer</span>
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br />{" "}
              <span className="text-white">Marlon Hario</span>
            </h1>
            <p className="max-w-125 mb-9 text-white/80">
              A Software Developer with experience in building modern
              applications and systems. I focus on delivering high-quality
              solutions that meet real-world needs.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant={"outline"} size={"lg"} className="uppercase  ">
                <a
                  href="/assets/Marlon_Hario_CV.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FaDownload className="text-xl" />
                </a>
              </Button>
              <div className="xl:mb-none">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
