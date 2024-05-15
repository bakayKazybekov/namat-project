import Image from "next/image"
import Link from "next/link"
import { RightArrow } from "@/public"
import { links } from "@/app/constants"
import './styles.scss'

const Navigation = ({ className = 'navigation' }: {className?: string}) => (
  <div className={className}>
    <ul className="navigation-list">
      {links.map((link) => (
        <li key={link.href} className="navigation-list__item">
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
    <Link href="#contacts" className="navigation__get-started">
      <span>Get Started</span>
      <Image src={RightArrow} width={16} height={16} alt="right arrow" />
    </Link>
  </div>
)

export default Navigation