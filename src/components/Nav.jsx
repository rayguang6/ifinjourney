import { hamburger } from "../assets/icons";
import { navbarLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    // Define a function that returns class names based on the isActive parameter
  const getNavLinkClass = ({ isActive }) => 
  isActive ? 
  "font-montserrat leading-normal text-lg text-slate-gray font-bold text-primary" : // Active classes
  "font-montserrat leading-normal text-lg text-slate-gray"; // Default classes


  return (
    <header className='padding-x py-8 w-full fixed shadow-green bg-white z-50'>
      <nav className='flex justify-between items-center max-container'>
        <Link to='/'>
          <img
            src={navbarLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={getNavLinkClass}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <Link to='/'><div className="bg-primary px-5 py-2 rounded-md text-white font-bold	">Login</div></Link>
        </div>

        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;