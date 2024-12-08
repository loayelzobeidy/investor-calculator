import logo from "./../assets/investment-calculator-logo.png";

function Header(){
return (
<>
  <nav className="bg-gray-100 shadow py-4">
    <div className="container mx-auto flex items-center justify-between px-4">
      {/* Logo and Brand */}
      <a href="#" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          width="50"
          height="50"
          className="mr-3"
        />
        <span className="font-bold text-lg text-blue-600">Investment Pro</span>
      </a>

      {/* Title */}
      <h1 className="text-center text-gray-700 text-xl font-semibold">
        React Investment Calculator
      </h1>
    </div>
  </nav>
</>

)
}

export default Header