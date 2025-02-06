import logo from "./../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logistics UK" className="logo" />
    </div>
  );
}

export default Header;
