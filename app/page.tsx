import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white relative">
      <Navbar />

{/* Heading */}
      <section className='flex flex-col items-center'>
        <div className="w-full h-[330px] bg-[url('/images/illustration-working.svg')] bg-cover ml-8"></div>
        <h2 className="text-[40px] font-bold text-center mt-10 text-very_dark_violet">
          More than just shorter links
        </h2>
        <h3 className="text-center mt-4 text-silver">
          {`Build your brand's recognition and get detailed insights on how your
          links are performing.`}
        </h3>
        <button className="rounded-full w-[200px] h-[60px] bg-robin_egg_blue mt-8 mb-6 text-white text-lg">
          Get Started
        </button>
      </section>

{/* Link input */}

      <div className="bg-english_violet w-[330px] mx-auto rounded-lg py-6 z-10 relative top-[85px]">
        <form action="">
          <div className="flex flex-col items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="rounded-md p-4 w-[90%]"
            />
            <button className="rounded-md w-[90%] bg-robin_egg_blue p-4 text-white">
              Shorten It!
            </button>
          </div>
        </form>
      </div>

      {/* Features */}
      <div className="bg-[#EAE9EC] flex flex-col items-center w-full pb-16 mt-10">
        {/* Advanced Statistics */}
        <div className="w-[330px]">
          <h4 className="mt-28 text-center text-[28px] font-semibold text-very_dark_violet">
            Advanced Statistics
          </h4>
          <p className="text-silver leading-loose text-center mt-6">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* Brand recognition */}
        <div className="w-[330px] bg-white rounded-md flex flex-col items-center relative justify-end mt-20">
          <div className="rounded-full flex justify-center items-center w-[90px] h-[90px] bg-english_violet absolute -top-10">
            <Image
              src="/images/icon-brand-recognition.svg"
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center mt-20 gap-4 px-6">
            <h4 className="font-semibold text-xl text-very_dark_violet">
              Brand Recognition
            </h4>
            <p className="mb-8 text-center text-silver">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="w-2.5 h-[50px] bg-robin_egg_blue"></div>

        {/* Detailed Records */}

        <div className="w-[330px] bg-white rounded-md flex flex-col items-center relative justify-end mt-10">
          <div className="rounded-full flex justify-center items-center w-[90px] h-[90px] bg-english_violet absolute -top-10">
            <Image
              src="/images/icon-detailed-records.svg"
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center mt-20 gap-4 px-6">
            <h4 className="font-semibold text-xl text-very_dark_violet">
              Detailed Records
            </h4>
            <p className="mb-8 text-center text-silver">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="w-2.5 h-[50px] bg-robin_egg_blue"></div>

        {/* Fully Customizable */}

        <div className="w-[330px] bg-white rounded-md flex flex-col items-center relative justify-end mt-10">
          <div className="rounded-full flex justify-center items-center w-[90px] h-[90px] bg-english_violet absolute -top-10">
            <Image
              src="/images/icon-fully-customizable.svg"
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center mt-20 gap-4 px-6">
            <h4 className="font-semibold text-xl text-very_dark_violet">
              Fully Customizable
            </h4>
            <p className="mb-8 text-center text-silver">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Boost your links */}
      <div className="bg-english_violet h-[300px] w-full bg-[url(/images/bg-boost-mobile.svg)] flex flex-col justify-center items-center gap-4">
        <h4 className="text-white text-2xl font-[500]">Boost your links today</h4>
        <button className='bg-robin_egg_blue text-white rounded-full p-4 w-[195px]'>Get Started</button>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
