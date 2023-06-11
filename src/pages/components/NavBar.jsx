import Link from 'next/link';
import Social from './Social';

export default function NavBar(props) {
    return (
        <nav className='flex z-50 justify-between px-14 py-5 fixed w-full
                        max-md:px-5'>
            <div className={`flex gap-5 font-bold ${props.index === 2 && !props.selectedSlide ? "text-black " : "text-mainHighlight"}`}>
                <Link className='hover:text-white duration-500' href='#about'>ABOUT</Link>
                <Link className='hover:text-white duration-500' href='#work'>WORK</Link>
            </div>

            <div className='max-[570px]:hidden'>
                <Social />
            </div>

            <Link href="#contact">
                <button className={`border-2 w-[8rem] font-bold px-3
                 ${props.index === 2 && !props.selectedSlide ? "text-black border-black  hover:bg-black hover:text-mainHighlight" :"text-mainHighlight border-mainHighlight  hover:bg-mainHighlight hover:text-white"}
                    hover:rounded-lg shadow-lg hover:scale-110 duration-500`}
                >Contact Me</button>
            </Link>

        </nav>
    )
}