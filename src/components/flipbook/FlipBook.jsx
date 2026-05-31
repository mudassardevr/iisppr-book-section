import HTMLFlipBook from "react-pageflip";
import { pages } from "./Data";
import Page from "./Page";

function FlipBook() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold text-white"> Book Section</h1>

      <div className="min-h-screen flex items-center justify-center p-10">
        <HTMLFlipBook
          width={400}
          height={550}
          maxShadowOpacity={0.5}
          showCover={true}
          flippingTime={700}
          mobileScrollSupport={true}
          className=""
        >
          {/* COVER */}
          <div className="w-full h-full bg-linear-to-br from-indigo-600 to-purple-700 rounded-2xl grid place-content-center place-items-center p-10">
            <img
              className="w-45 object-contain"
              src="/issppr-logo.png"
              alt="issppr logo"
            />
            <h2 className="text-center text-white text-4xl">IISPPR</h2>
            <p className="text-white mt-2">Click to Turn the Page</p>
          </div>

          {/* DYNAMIC PAGES */}
          {pages.map((page) => {
            return (
              <Page
                key={page.id}
                title={page.title}
                image={page.image}
                desc={page.desc}
              />
            );
          })}

          {/* BACK COVER */}
          <div className="bg-slate-900 text-white text-3xl rounded-2xl grid place-content-center place-items-center">
            <p className="text-center">End</p>
          </div>
        </HTMLFlipBook>
      </div>
    </>
  );
}

export default FlipBook;
