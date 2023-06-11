import Link from 'next/link'

export default function Footer() {
    return (
    <footer>
        <hr className='mx-4 max-md:mx-0'/>

        <div className='bg-secondary grid grid-cols-3 gap-8 px-8 text-sm py-4
            max-md:flex max-md:flex-col-reverse max-md:text-center'>
            <div className='tracking-wider text-xs'><p>©2023 ALEXANDROS KANGKELIDIS</p></div>
            <div className='flex justify-center gap-3 text-mainHighlight'>
                <Link className='hover:text-white' href='#about'>ABOUT</Link>
                <Link className='hover:text-white' href='#work'>WORK</Link>
                <Link className='hover:text-white' href='#contact'>CONTACT</Link>
                <Link className='hover:text-white' href='https://github.com/alekosomegas/portfolio' rel="noopener noreferrer" target="_blank">SOURCE CODE</Link>
            </div>
            <div className='text-xs text-justify pl-6'>
                <p>Sketched on Paper, Designed in Photoshop, coded in VSC. Built with Next.js and Tailwind CSS, deployed with Vercel.</p>
            </div>
        </div>
     </footer>
    )
}