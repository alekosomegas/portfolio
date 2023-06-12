import Link from "next/link";
import Social from "./Social";

export default function NavBar(props) {
  return (
    <nav
      className={`flex z-50 justify-between px-14 py-5 fixed w-full
                        max-md:px-5 ${props.index === 3 && "bg-secondary"}`}
    >
      <div
        className={`flex gap-5 font-bold ${
          props.index === 2 && !props.selectedSlide
            ? "text-black "
            : "text-mainHighlight"
        }`}
      >
        <div>
          <Link
            className={`hover:text-white duration-1000 ${
              props.index === 1 && "text-white"
            }`}
            href="#about"
          >
            ABOUT
          </Link>
          <div
            className={` ${
              props.index === 1 ? "opacity-100" : "opacity-0"
            } bg-white w-full duration-1000 h-1`}
          />
        </div>

        <div className="flex flex-col">
          <Link
            className={`hover:text-white duration-1000 ${
              props.index === 2 && "text-white"
            }`}
            href="#work"
          >
            WORK
          </Link>
          <div
            className={` ${
              props.index === 2 ? "opacity-100" : "opacity-0"
            } bg-white w-full duration-1000 h-1`}
          />
        </div>
      </div>

      <div className="max-[570px]:hidden">
        <Social />
      </div>

      <Link href="#contact">
        {props.index !== 3 ? (
          <button
            className={`border-2 w-[8rem] font-bold px-3
                 ${
                   props.index === 2 && !props.selectedSlide
                     ? "text-black border-black  hover:bg-black hover:text-mainHighlight"
                     : "text-mainHighlight border-mainHighlight  hover:bg-mainHighlight hover:text-white"
                 }
                    hover:rounded-lg shadow-lg hover:scale-110 duration-500`}
          >
            Contact Me
          </button>
        ) : (
          <div className="flex flex-col">
            <span
              className={`hover:text-white duration-1000 font-bold ${
                props.index === 3 && "text-white"
              }`}
            >
              CONTACT
            </span>
            <div
              className={` ${
                props.index === 3 ? "opacity-100" : "opacity-0"
              } bg-white w-full duration-1000 h-1`}
            />
          </div>
        )}
      </Link>
    </nav>
  );
}
