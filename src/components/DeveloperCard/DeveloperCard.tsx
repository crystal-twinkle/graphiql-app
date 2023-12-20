import FooterLink from '../UI/FooterLink';
import gitHubLogo from '../../assets/icons/github-logo.svg';
interface DeveloperCardProps {
  name: string;
  avatarLink: string;
  description: string;
  url: string;
  text: string;
}

function DeveloperCard({ name, avatarLink, description, url, text }: DeveloperCardProps) {
  return (
    <div className="flex flex-col items-center w-[400px] border-solid border-2 border-sky-500 rounded-md">
      <p className="w-full p-2 text-xl font-semibold text-center text-medium bg-text">{name}</p>
      <div className="flex flex-grow justify-between">
        <img src={avatarLink} alt="avatar" className="w-44 h-full object-cover" />
        <p className="p-3">{description}</p>
      </div>
      <div className="flex justify-center items-center w-full h-[44px] border-t">
        <FooterLink iconLink={gitHubLogo} url={url} text={text}></FooterLink>
      </div>
    </div>
  );
}

export default DeveloperCard;
