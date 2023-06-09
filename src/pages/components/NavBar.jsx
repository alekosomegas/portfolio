import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className='flex justify-between px-14 py-5 fixed w-full'>
            <div className='flex gap-5 text-mainHighlight'>
                <Link className='hover:text-white duration-500' href='#about'>ABOUT</Link>
                <Link className='hover:text-white duration-500' href='#work'>WORK</Link>
            </div>

            <div className='flex gap-5'>
                <Link href="https://github.com/alekosomegas/" rel="noopener noreferrer" target="_blank" >
                    <Image src='/icons/github-sign.png'   className='invert opacity-80 hover:scale-110 duration-500' width={32} height={32} alt='github logo'/>
                </Link>
                <Link href="https://www.linkedin.com/in/alexandros-kangkelidis-552620189" rel="noopener noreferrer" target="_blank">
                    <Image src='/icons/linkedin-logo.png' className='invert opacity-80 hover:scale-110 duration-500' width={32} height={32} alt='linkedin logo'/>
                </Link>
            </div>

            <Link href="#contact">
                <button className='border-2 w-[8rem] border-mainHighlight px-3 text-mainHighlight
                    hover:bg-mainHighlight hover:text-white hover:font-bold hover:rounded-lg hover:scale-110 duration-500'
                >Contact Me</button>
            </Link>

        </nav>
    )
}