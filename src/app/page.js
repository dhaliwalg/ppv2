import Lookbook from "./lookbook";
import Navbar from "./navbar";
import Slideshow from "./slideshow";
import Contact from "./contact";
import { Playfair_Display } from "next/font/google";
import { Noto_Serif_Gurmukhi } from "next/font/google";

const playfairbold = Playfair_Display({
  weight: "700",
  subsets: ["latin", "cyrillic"],
});

const playfairreg = Playfair_Display({
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

const gurmukhi = Noto_Serif_Gurmukhi({
  weight: "400",
  subsets: ["gurmukhi"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between bg-paggbrown text-white mb-[10%]">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="relative mb-[15%] lg:mb-[5%] lg:h-24 h-36 w-full flex z-[1] bg-paggbrown">
        <Navbar />
      </div>
      <div className="w-full px-4 md:px-8 lg:px-24 max-w-7xl mx-auto">
        <div className="flex justify-center">
          <Slideshow />
        </div>
        <div className={`${playfairbold.className}`}>
          <h1 className="mt-8 text-3xl lg:text-5xl italic text-center">
            Our Pros Know Paggs.
          </h1>
        </div>
        <p
          className={`${playfairreg.className} mt-8 text-lg lg:text-xl text-center`}
        >
          Known as Pagg
          <span className={gurmukhi.className}> (ਪੱਗ)</span> or Dastaar{" "}
          <span className={gurmukhi.className}>(ਦਸਤਾਰ) </span>
          is a symbol of royalty and spirituality in Eastern Culture.
          Tying a turban is an art form, requiring precision and skill.
          <br />
          <br />
          <strong>Trust Pagg Pros.</strong>
        </p>

        <div id="lookbook" className={`${playfairbold.className} relative`}>
          <div className="flex justify-center mt-8 lg:mt-12">
            <Lookbook p={4} />
          </div>
        </div>
        <div id="about" className="relative mt-4 text-center">
          <h2
            className={`${playfairbold.className} mt-10 mb-10 text-2xl lg:mt-32 lg:text-3xl`}
          >
            About Us
          </h2>
          <div
            className={`${playfairreg.className} lg:mb-0 mb-44 text-lg lg:text-xl mx-auto max-w-3xl`}
          >
            <p className="mb-4">
              Pagg Pros provides turban tying services in the DMV. We can
              deliver professionally tied turbans in various styles, including:
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Sikh Paggs</li>
              <li>Wedding Saafas</li>
              <li>Turla Paggs</li>
            </ul>
            <p>
              We handle the details, so you can focus on the moments that matter
              most.
            </p>
          </div>
        </div>
        <div id="contact" className="mt-[10%] lg:text-xl text-center">
          <div
            className={`${playfairreg.className} flex justify-center mt-2 lg:mt-2 text-xl`}
          >
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
