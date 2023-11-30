import Link from "next/link";
import Image from "next/image";

export default function Project(props) {
  return (
    <div className="flex flex-col self-stretch w-full hover:brightness-110 duration-300 .land-cont">
      {!props.selectedSlide && (
        <div className="text-black font-extrabold text-2xl tracking-wide mb-3 z-50">
          <h2>{props.no}</h2>
          <h2>{props.name}</h2>
        </div>
      )}
      {props.selectedSlide && (
        <button
          onClick={() => props.setSelectedSlide(false)}
          className="font-bold absolute top-20 left-6 z-20 flex flex-row gap-2 items-center
                            hover:scale-110 duration-500 bg-slate-500 p-4 bg-opacity-90 rounded-lg shadow-lg"
        >
          <svg transform="rotate(180)" fill="white" width="24" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
          Go back
        </button>
      )}

      <div className=" bg-mainHighlight">
        {props.selectedSlide && props.video ? (
          <div className="pt-[70px] bg-black">
            <video
              poster={props.img}
              muted
              loop
              autoPlay
              src={props.video}
              type="video/mp4"
            />
          </div>
        ) : (
          <Image
            className={`${
              props.current ? "brightness-50" : "opacity-85"
            } transition-brightness ease-linear duration-500 mt-20`}
            src={props.img}
            alt="project-image"
            fill
            style={{objectFit: 'cover'}}
          />
        )}
        <div
          className={`${
            !props.current && "opacity-0"} 
            ${props.selectedSlide && "bg-slate-500 p-4 rounded-lg shadow-lg bg-opacity-20 hover:bg-opacity-90  opacity-20 hover:opacity-100"} 
          transition-opacity ease-linear duration-500 left-5 absolute z-50 top-[40%] text-black w-[40%] max-md:w-[90%] land-cont`}
        >
          <div>
            {props.selectedSlide && (
              <div className="text-mainHighlight font-extrabold text-2xl tracking-wide mb-3">
                <h2>{props.no}</h2>
                <h2>{props.name}</h2>
              </div>
            )}

            <h3 className="text-mainHighlight font-bold">{props.subTitle}</h3>
            <h1 className="text-white text-4xl font-black">{props.title}</h1>
          </div>
          {!props.selectedSlide && (
            <div
              className="mt-20 bg-mainHighlight -ml-5 w-fit px-3 font-bold py-1 
                                hover:scale-110 duration-500 hover:shadow-xl land-text"
            >
              <button
                className="flex flex-row-reverse gap-3 items-center"
                onClick={() => props.setSelectedSlide(true)}
              >
                <svg width="24" height="24">
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
                View Project
              </button>
            </div>
          )}
          {props.selectedSlide && (
            <div className="">
              <div className="text-white pt-3">
                <p>{props.notes}</p>
              </div>
              <div className="mt-10 flex gap-5 font-bold ">
                {props.url && (
                  <Link
                    href={props.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="bg-mainHighlight py-1 px-3 flex gap-2 items-center rounded-sm shadow-lg hover:bg-white duration-700 hover:scale-110 ">
                      <img src="/icons/www.png" alt="web-icon" width={16} />
                      Visit Site
                    </span>
                  </Link>
                )}
                <Link
                  href={props.gitUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="bg-mainHighlight py-1 px-3 flex gap-2 items-center rounded-sm shadow-lg hover:bg-white duration-700 hover:scale-110 ">
                    <img src="/icons/eye.png" alt="web-icon" width={16} />
                    View Code
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
