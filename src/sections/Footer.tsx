import ArrowUpRightIcon from '@/assets/icons/youtube.svg';

const footerLinks = [
  {
    title: "YouTube",
    href: "",
  },
  {
    title: "Twitter",
    href: "",
  },
  {
    title: "Instragram",
    href: "",
  },
  {
    title: "LinkedIn",
    href: "",
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center' >
          <div>&copy; 2026. Todos los derechos reservados.</div>
          <nav>
            {footerLinks.map((link) => (
              <a href="#" key={link.title}>
                {link.title}
                <ArrowUpRightIcon className="size-5" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
