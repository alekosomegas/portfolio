import Link from 'next/link'

export default function Footer() {
    return (
    <footer>
        <hr className='mx-4'/>

        <div className='bg-secondary grid grid-cols-3 gap-8 px-8 text-sm py-4'>
            <div className='tracking-wider'><p>©2023 ALEXANDROS KANGKELIDIS</p></div>
            <div className='flex justify-center gap-3'>
                <Link href='#about'>ABOUT</Link>
                <Link href='#work'>WORK</Link>
                <Link href='#contact'>CONTACT</Link>
                <Link href='#contact'>SOURCE CODE</Link>
            </div>
            <div className='text-xs text-justify pl-6'>
                <p>Sketched on Paper, Designed in Photoshop, coded in VSC. Built with Next.js and Tailwind CSS, deployed with Vercel.</p>
            </div>
        </div>
     </footer>
    )
}