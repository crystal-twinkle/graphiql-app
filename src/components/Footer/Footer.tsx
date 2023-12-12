import FooterLink from '../UI/FooterLink';
import rssLogo from '../../assets/icons/rss-logo.svg';
import giHubLogo from '../../assets/icons/github-logo.svg';

function Footer() {
  return (
    <footer className="py-2 px-5 bg-dark">
      <div className="max-w-screen-xl mx-auto flex md:flex-row sm:gap-0 gap-6 flex-col justify-between items-center">
        <FooterLink url="https://rs.school/react/" iconLink={rssLogo}></FooterLink>
        <div className="flex justify-between sm:flex-row flex-col items-center sm:gap-5 gap-2">
          <span className="font-semibold">Development team:</span>
          <FooterLink
            url="https://github.com/crystal-twinkle"
            iconLink={giHubLogo}
            text="Crystal-twinkle"
          ></FooterLink>
          <FooterLink
            url="https://github.com/gemer31"
            iconLink={giHubLogo}
            text="Gemer31"
          ></FooterLink>
          <FooterLink
            url="https://github.com/SadJoeBright"
            iconLink={giHubLogo}
            text="SadJoeBright"
          ></FooterLink>
        </div>
        <span>&copy; 2023</span>
      </div>
    </footer>
  );
}

export default Footer;
