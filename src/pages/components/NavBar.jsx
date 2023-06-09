import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className='flex justify-between px-14 py-5 fixed w-full'>
            <div className='flex gap-5 text-mainHighlight'>
                <Link className='' href='#about'>ABOUT</Link>
                <Link href='#work'>WORK</Link>
            </div>

            <div className='flex gap-5'>
                <Link href="https://github.com/alekosomegas/" rel="noopener noreferrer" target="_blank" >
                    <Image  src='/icons/github-sign.png'   className='invert opacity-80' width={32} height={32} alt='github logo'/>
                </Link>
                <Link href="https://www.linkedin.com/in/alexandros-kangkelidis-552620189" rel="noopener noreferrer" target="_blank">
                    <Image src='/icons/linkedin-logo.png' className='invert opacity-80' width={32} height={32} alt='linkedin logo'/>
                </Link>
            </div>

            <Link href="#contact">
                <button className=' outline-2 outline px-3 text-mainHighlight'>Contact Me</button>
            </Link>

        </nav>
    )
}