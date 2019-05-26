import Link from "next/link";
import routes from "../../routes";
import "./Header.css";

const HeaderLink = ({ link, name }) => (
  <Link href={link}>
    <a className="header-link"> {name} </a>
  </Link>
);

const Header = () => (
  <div className="header">
    {routes.map(({ link, name }) => (
      <HeaderLink key={link} link={link} name={name} />
    ))}
  </div>
);

export default Header;
