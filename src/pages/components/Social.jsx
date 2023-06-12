import Image from "next/image";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex gap-5">
      <Link
        href="https://github.com/alekosomegas/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src="/icons/github-sign.png"
          className="invert opacity-80 hover:scale-110 duration-500"
          width={32}
          height={32}
          alt="github logo"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/alexandros-kangkelidis-552620189"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src="/icons/linkedin-logo.png"
          className="invert opacity-80 hover:scale-110 duration-500"
          width={32}
          height={32}
          alt="linkedin logo"
        />
      </Link>
    </div>
  );
}
