import rssLogo from '../../assets/icons/rss-logo.svg';
import giHubLogo from '../../assets/icons/github-logo.svg';

function Footer() {
  return (
    <footer className="flex md:flex-row sm:gap-0 gap-6 flex-col justify-between items-center py-2 px-5 bg-dark">
      <a
        href="https://rs.school/react/"
        className="w-20 h-10 flex items-center hover:brightness-125 ransition-all duration-300 ease-in-out"
      >
        <img src={rssLogo} alt="RS-School-React" />
      </a>

      <div className="flex justify-between sm:flex-row flex-col items-center sm:gap-5 gap-2">
        <span className="font-semibold">Development team:</span>

        <a
          href="https://github.com/crystal-twinkle"
          className="flex items-center gap-1 hover:brightness-125 ransition-all duration-300 ease-in-out"
        >
          <img src={giHubLogo} alt="RS-School-React" className="w-5 h-5" />
          <span>Crystal-twinkle</span>
        </a>

        <a
          href="https://github.com/gemer31"
          className="flex items-center gap-1 hover:brightness-125 ransition-all duration-300 ease-in-out"
        >
          <img src={giHubLogo} alt="RS-School-React" className="w-5 h-5" />
          <span>Gemer31</span>
        </a>

        <a
          href="https://github.com/SadJoeBright"
          className="flex items-center gap-1 hover:brightness-125 ransition-all duration-300 ease-in-out"
        >
          <img src={giHubLogo} alt="RS-School-React" className="w-5 h-5" />
          <span>SadJoeBright</span>
        </a>
      </div>

      <span>&copy; 2023</span>
    </footer>
  );
}

export default Footer;
