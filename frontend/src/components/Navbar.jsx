import Logo from "../assests/logo.jpg";
const Navbar = () => {
  return (
    <section className="nav">
      <div className="rnav">
        <img src={Logo} alt="logo" />
        PneumoWatch
      </div>
      <div className="github">
        <a href="https://github.com/Balaji-Avk/PneumoWatch">GitHub</a>
      </div>
    </section>
  );
};

export default Navbar;
