interface FooterLinkProps {
  icon: string;
  text?: string;
  url: string;
}

function FooterLink({ icon, text, url }: FooterLinkProps) {
  return (
    <a
      href={url}
      className="flex items-center gap-1 hover:brightness-125 ransition-all duration-300 ease-in-out"
    >
      <img src={icon} alt="RS-School-React" />
      <span>{text}</span>
    </a>
  );
}

export default FooterLink;
