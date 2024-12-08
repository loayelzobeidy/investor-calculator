import logo from "./../assets/investment-calculator-logo.png";

function Header(){
return (
    <>
    <nav className="navbar bg-light shadow-sm py-3 header">
    <div className="container d-flex align-items-center justify-content-between">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img
          src={logo}
          alt="Logo"
          width="50"
          height="50"
          className="d-inline-block me-2"
        />
        <span className="fw-bold text-primary">Investment Pro</span>
      </a>
  
      <h1 className="text-center text-secondary flex-grow-1">React Investment Calculator</h1>
      </div>
      </nav>
      </>
)
}

export default Header