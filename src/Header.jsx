import Link from "./Link";

const logo = <img src="./3d_cro.jpg" alt="logo" height={80} width={80} />;

const Header = ({ title }) => {
  return (
    <div>
      {logo}
      <h1>{title ? title : `Default title`}</h1>
      <nav className="nav-bar">
        <Link />
      </nav>
    </div>
  );
};

export default Header;
