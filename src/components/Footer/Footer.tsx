import FooterLink from '../UI/FooterLink';
import rssLogo from '../../assets/icons/rss-logo.svg';
import giHubLogo from '../../assets/icons/github-logo.svg';
import { useLocalization } from '../../context/localization-context';

function Footer() {
  const { dataLang, language } = useLocalization();

  return (
    <footer className="py-2 px-5 bg-dark">
      <div className="max-w-screen-xl mx-auto flex md:flex-row sm:gap-0 gap-6 flex-col justify-between items-center">
        <FooterLink url="https://rs.school/react/" iconLink={rssLogo}></FooterLink>
        <div className="flex justify-between sm:flex-row flex-col items-center sm:gap-5 gap-2">
          <span className="font-semibold">{dataLang[language].team.text}</span>
          <FooterLink
            url="https://github.com/crystal-twinkle"
            iconLink={giHubLogo}
            text="crystal-twinkle"
          ></FooterLink>
          <FooterLink
            url="https://github.com/gemer31"
            iconLink={giHubLogo}
            text="gemer31"
          ></FooterLink>
          <FooterLink
            url="https://github.com/SadJoeBright"
            iconLink={giHubLogo}
            text="sadJoeBright"
          ></FooterLink>
        </div>
        <span>&copy; 2023</span>
      </div>
    </footer>
  );
}

export default Footer;
