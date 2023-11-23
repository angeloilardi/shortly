"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Key, useEffect, useState } from "react";

export default function Home() {
  function checkforStorage() {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("data")) {
        return JSON.parse(localStorage.getItem("data")!);
      } else {
        return [];
      }
    }
  }
  const [isClient, setIsClient] = useState(false);
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [entries, setEntries] = useState(checkforStorage);

  const [isCopied, setisCopied] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    if (shortUrl) {
      setEntries([...entries, { url: url, shortUrl: shortUrl }]);
    }
    setUrl("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortUrl]);

  const handleClick = () => {
    url.trim().length === 0 ? setIsValid(false) : setIsValid(true),
      getShorturl();
  };

  const getShorturl = async () => {
    const res = await fetch(`https://is.gd/create.php?format=json&url=${url}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const results = await res.json();
    setShortUrl(results.shorturl);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white relative">
      <Navbar />

      {/* Heading */}
      <section className="mb-24 md:mb-18 flex flex-col md:flex-row md:w-full md:pl-[6%]">
        <div className="w-full  bg-[url('/images/illustration-working.svg')] md:ml-auto bg-cover md:order-2 aspect-[31/24] max-h-[480px] max-w-[600px] overflow-hidden bg-left min-h-[300px]"></div>
        <div className="flex flex-col justify-center items-center mx-4 md:items-start max-w-[570px]">
          <h2 className="text-[40px] font-bold mt-16 text-very_dark_violet">
            More than just shorter links
          </h2>
          <p className="mt-4 text-silver mb-6 text-lg">
            {`Build your brand's recognition and get detailed insights on how your
            links are performing.`}
          </p>
          <button className="bg-robin_egg_blue text-white rounded-full p-4 w-[195px] hover:opacity-60">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <div className="bg-[#EAE9EC] flex flex-col items-center w-full pb-16 mt-10">
        {/* Link input */}

        <div className="w-[88%] z-10 relative -top-[85px] flex flex-col gap-6">
          <div className="bg-english_violet py-6 rounded-lg">
            <form action={handleClick} noValidate className="group">
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row flex-wrap p-4">
                <input
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  type="text"
                  value={url}
                  placeholder="Shorten a link here..."
                  className={`rounded-md p-4 w-full focus:outline-none focus:ring-0 focus:border-0 focus:placeholder-silver peer text-black md:basis-8/12 flex-grow ${
                    isValid
                      ? ""
                      : "placeholder-bittersweet/40 border-4 border-bittersweet"
                  }`}
                  required
                />
                <span
                  className={`self-start text-xs font-bold text-bittersweet italic peer-[:focus]:hidden md:order-3 md:mr-auto ${
                    isValid ? "hidden" : "block"
                  } `}
                >
                  Please add a link
                </span>
                <button
                  className="rounded-md w-full bg-robin_egg_blue p-4 text-white hover:bg-robin_egg_blue-800 md:flex-shrink md:basis-3/12"
                  type="submit"
                >
                  Shorten It!
                </button>
              </div>
            </form>
          </div>

          {/* History Tabs */}
          {isClient && entries
            ? entries.map(
                (entry: { url: string; shortUrl: string }, i: Key) => {
                  return (
                    <div
                      key={i}
                      className="bg-white flex flex-col gap-3 rounded-lg py-6 md:py-2 justify-center px-4 md:flex-row md:items-center"
                    >
                      <p className="text-black">{entry.url}</p>
                      <hr className="p-0 w-full md:hidden" />
                      <Link
                        href={entry.shortUrl}
                        className="text-robin_egg_blue md:ml-auto"
                      >
                        {entry.shortUrl}
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          navigator.clipboard.writeText(entry.shortUrl);
                          setisCopied(entry.shortUrl);
                        }}
                        className={`bg-robin_egg_blue text-white rounded-md md:p-2 p-4 min-w-[100px] hover:opacity-60 ${
                          isCopied !== entry.shortUrl
                            ? "bg-robin_egg_blue"
                            : "bg-very_dark_violet"
                        }
                        `}
                      >
                        {isCopied === entry.shortUrl ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  );
                }
              )
            : null}
        </div>

        {/* Advanced Statistics */}
        <div className="mx-4 mt-10 max-w-[520px]">
          <h4 className="text-center text-[28px] font-semibold text-very_dark_violet">
            Advanced Statistics
          </h4>
          <p className="text-silver leading-loose text-center mt-6">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col items-center md:flex-row mt-20 md:w-[88%] relative md:mb-20">
          {/* Brand recognition */}
          <div className="mx-5 md:mx-0 bg-white rounded-md flex flex-col items-center md:items-start relative justify-end">
            <div className="rounded-full flex justify-center items-center w-[90px] h-[90px] bg-english_violet absolute -top-10 md:ml-6">
              <Image
                src="/images/icon-brand-recognition.svg"
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="flex flex-col items-start mt-20 gap-4 px-6">
              <h4 className="font-semibold text-xl text-very_dark_violet">
                Brand Recognition
              </h4>
              <p className="mb-8 text-silver">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          {/* Separator */}
          <div className="w-2.5 h-[50px] md:w-8 md:h-2 bg-robin_egg_blue shrink-0"></div>
          {/* Detailed Records */}
          <div className="mx-5 md:mx-0 bg-white rounded-md flex flex-col items-center md:items-start relative justify-end md:top-7">
            <div className="rounded-full flex justify-center items-center w-[90px] h-[90px] bg-english_violet absolute -top-10 md:ml-6">
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
          <div className="w-2.5 h-[50px] md:w-8 md:h-2 bg-robin_egg_blue grow shrink-0"></div>
          {/* Fully Customizable */}
          <div className="mx-5 md:mx-0 bg-white rounded-md flex flex-col items-center md:items-start relative justify-end md:top-14">
            <div className="rounded-full flex justify-center items-center w-[90px] h-[90px] bg-english_violet absolute -top-10 md:ml-6">
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
      </div>

      {/* Boost your links */}
      <div className="bg-english_violet h-[300px] w-full bg-[url(/images/bg-boost-mobile.svg)] md:bg-[url(/images/bg-boost-desktop.svg)] bg-cover flex flex-col justify-center items-center gap-4">
        <h4 className="text-white text-2xl font-[500]">
          Boost your links today
        </h4>
        <button className="bg-robin_egg_blue text-white rounded-full p-4 w-[195px] hover:opacity-60">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
