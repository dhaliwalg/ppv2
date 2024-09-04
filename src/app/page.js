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
    <main className="flex min-h-screen max-w-full flex-col items-start justify-between p-24 bg-paggbrown text-white">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="relative lg:h-24 h-36 w-68 flex z-[1] bg-paggbrown">
        <Navbar />
      </div>
      <div
        className="grid text-center lg:max-w-5xl lg:w-full lg:items-center mx-auto"
      >
        <div className="flex justify-center">
          <Slideshow />
        </div>
        <div className={`${playfairbold.className}`}>
          <h1 className="mt-[5%] text-xl lg:text-5xl italic">
            Our Pros Know Paggs.
          </h1>
        </div>

        <p className={`${playfairreg.className} mt-[5%] sm:text-lg lg:text-xl text-base`}>
          <br />
          The Turban, more traditionally known as a Pagg
          <span className={gurmukhi.className}> ਪੱਗ</span> or Dastaar{" "}
          <span className={gurmukhi.className}>ਦਸਤਾਰ </span>
          is a staple in Eastern Culture.<br />
          Affiliated with royalty, they were primarily worn by kings and
          nobility as a sign of status. Paggs remain an integral part of
          religion and special occasions, such as weddings. Pagg tying is a
          precise artform, with techniques passed down through generations. It
          takes skill to perfectly tie a pagg - trust <strong>us</strong>.
        </p>

        <div
          id="lookbook"
          className={`${playfairbold.className} relative`}
        >
          <div className="flex justify-center mt-8 lg:mt-12">
            <Lookbook p={4} />
          </div>
        </div>

        <div id="about" className="relative mt-4">
          <h2 className={`${playfairbold.className} mt-10 mb-10 lg:mt-32 text-3xl`}>
            About Us
          </h2>
          <div className={`${playfairreg.className} flex justify-center lg:mb-0 mb-44 text-xl`}>
            <p>
              Pagg Pros provides turban tying services in the DMV for weddings,
              bhangra events, and any occasion calling for elegantly styled
              paggs. We can deliver flawlessly tied Sikh paggs, wedding saafas,
              turla paggs, and any other style you desire. Our extensive
              experience means we can expertly tie turbans for grooms, entire
              wedding parties, or even corporate events. Our stylists transform
              turbans into a statement of personal style and honor for each
              client&apos;s special day. We handle every detail so you can focus
              on moments that matter most.{" "}
            </p>
          </div>
        </div>

        <div id="contact" className="mt-24 lg:text-xl">
          <h2 className={`${playfairbold.className} mt-24 lg:mt-20`}>
            Contact For a Quote
          </h2>
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
