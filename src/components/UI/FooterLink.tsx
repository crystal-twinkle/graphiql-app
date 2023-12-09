interface FooterLinkProps {
  iconLink: string;
  text?: string;
  url: string;
}

function FooterLink({ iconLink, text, url }: FooterLinkProps) {
  return (
    <a
      href={url}
      className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.05] ransition-all duration-300 ease-in-out"
    >
      <img src={iconLink} alt="RS-School-React" className="object-cover" />
      <span className="leading-tight">{text}</span>
    </a>
  );
}

export default FooterLink;
