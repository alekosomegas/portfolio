import React from "react";

const Landing = React.forwardRef(function Landing(props, ref) {
  const btnRef = React.useRef();
  async function handleDownload() {
    btnRef.current.innerHTML = "Thank you";
    await new Promise((res) => setTimeout(res, 1000));
    btnRef.current.innerHTML = "Download my CV";
  }

  return (
    <section
      ref={(el) => (ref.current[0] = el)}
      id="home"
      className="flex flex-col bg-main bg-landing px-16 bg-cover h-screen bg-fixed snap-start
        max-sm:px-10 max-md:text-sm
        land-cont"
    >
      <div className="pt-20  ">
        <div
          className="text-5xl font-bold pt-20 leading-snug min-w-fit
                 max-md:pt-[10%] max-md:text-4xl land-h1 "
        >
          <h1>
            Hello!
            <br />
            <span className="bg-mainHighlight px-4 -ml-4">
              {"I'm Alexandros."}
            </span>
          </h1>
          <div className="flex flex-wrap">
            <h2>Web Developer &nbsp;</h2>
            <h2>| Software Engineer</h2>
          </div>
        </div>

        <p className="max-w-screen-sm mt-10 land-text">
          An architect who wants to become a programmer.
          <br />
          <br />{" "}
          <span className="text-mainHighlight">
            Welcome to my portfolio website!
          </span>
        </p>
      </div>
      <div className="flex max-md:justify-center flex-1 items-center pb-8">
        <a
          className="bg-main w-[15rem] h-fit text-white text-center font-bold px-8 py-3 
                    border-dashed border-white border-4 hover:bg-mainHighlight
                    hover:text-black hover:rounded-md duration-500 hover:border-transparent"
          onClick={handleDownload}
          ref={btnRef}
          download
          href="/Alexandros_Kangkelidis_CV.pdf"
        >
          Download my CV
        </a>
      </div>
    </section>
  );
});

export default Landing;
