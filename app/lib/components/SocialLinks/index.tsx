import { InstagramIcon, TwitterIcon, YoutubeIcon } from "@/public";
import Image from "next/image";
import './styles.scss'

const SocialLinks = () => (
  <div className="social-links">
    <a href="#">
      <Image src={InstagramIcon} width={24} height={24} alt='instagram icon' />
    </a>
    <a href="#">
      <Image src={TwitterIcon} width={24} height={24} alt='twitter icon' />
    </a>
    <a href="#">
      <Image src={YoutubeIcon} width={24} height={24} alt='youtube icon' />
    </a>
  </div>
)

export default SocialLinks;