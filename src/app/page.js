import Lookbook from './lookbook'
import Navbar from './navbar'
import Slideshow from './slideshow'
import Contact from './contact'
import { Playfair_Display } from 'next/font/google'
import { Noto_Serif_Gurmukhi } from 'next/font/google'

const playfairbold = Playfair_Display({
  weight: '700',
  subsets: ['latin', 'cyrillic']
})

const playfairreg = Playfair_Display({
  weight: '400',
  subsets: ['latin', 'cyrillic']
})

const gurmukhi = Noto_Serif_Gurmukhi({
  weight: '400',
  subsets: ['gurmukhi']
})



export default function Home() {
  return (

    <main className="flex min-h-screen max-w-full flex-col items-start justify-between p-24 bg-paggbrown text-white">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="relative h-32 w-68 flex z-[1] bg-paggbrown justify-center">
        <Navbar />
      </div>
      <div className="lg:ml-14 grid text-center lg:max-w-5xl lg:w-full lg:items-center">
        <div className="flex justify-center">
          <Slideshow />
        </div>
        <div className={`${playfairbold.className}`}>
          <h1 className='mt-2 text-lg lg:text-2xl italic'>Our Pros Know Paggs.</h1>
        </div>

        <p className={`${playfairreg.className} lg:text-lg text-base`}><br />The Turban, more traditionally known as a Pagg
          <span className={gurmukhi.className}> ਪੱਗ</span> or Dastaar <span className={gurmukhi.className}>ਦਸਤਾਰ </span>
          has been a staple in Eastern Culture for years. <br />Affiliated with royalty, they were primarily worn by kings and nobility
          as a sign of status. Paggs remain an integral part of religion and special occasions, such as weddings
          and bhangra performances. Each style has a story, a heritage. Pagg tying is a precise artform,
          with techniques passed down through generations. It takes skill to perfectly tie a pagg - trust <b>us</b>.
        </p>

        <div id='lookbook' className={`${playfairbold.className} mt-6 relative`}>
          <h2><br /><br />  </h2>
          <div className='flex justify-center mt-10'>
            <Lookbook p={4} />
          </div>
        </div>

        <div id='about' className='relative mt-24'>
          <h2 className={`${playfairbold.className} `}>About Us</h2>
          <div className={`${playfairreg.className} flex justify-center`}>
            <p>Pagg Pros provides turban tying services in the DMV for weddings, bhangra events, and any occasion calling for elegantly styled paggs.

              We can deliver flawlessly tied Sikh paggs, wedding saafas, turla paggs, and any other style you desire. Our extensive experience means we can expertly tie custom turbans for grooms, entire wedding parties, or even corporate events.

              Our stylists transform turbans into a statement of personal style and honor for each client&apos;s special day. We handle every detail so you can focus on moments that matter most. </p>
          </div>
        </div>

        <div id='contact' className='mt-24'>
          <h2 className={`${playfairbold.className} `}>Contact For a Quote</h2>
          <div className={`${playfairreg.className} flex justify-center mt-4`}>
            <Contact />
          </div>
        </div>
      </div>

    </main>
  )
}
