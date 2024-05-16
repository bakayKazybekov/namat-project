import Image from "next/image"
import { RightArrow } from "@/public"
import { links } from "@/app/constants"
import './styles.scss'

const Navigation = ({ className = 'navigation' }: {className?: string}) => (
  <div className={className}>
    <ul className="navigation-list">
      {links.map((link) => (
        <li key={link.href} className="navigation-list__item">
          <a href={`#${link.href}`}>{link.title}</a>
        </li>
      ))}
    </ul>
    <a href="#contacts" className="navigation__get-started">
      <span>Get Started</span>
      <Image src={RightArrow} width={16} height={16} alt="right arrow" />
    </a>
  </div>
)

export default Navigation