import { hamburger } from "../assets/icons";
import { navbarLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const user = {
    username: "Lei Zhi Guang",
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQQDWP7gyQjjw3pX3Qp3qhkj40-57LhFPzUw_ug32NumSzumCDhJjqthpNnRrEy8KAAA&usqp=CAU" // Placeholder image URL
  };

    // Define a function that returns class names based on the isActive parameter
  const getNavLinkClass = ({ isActive }) => 
  // isActive ? 
  // "font-montserrat leading-normal text-lg font-bold text-primary" : // Active classes
  // "font-montserrat leading-normal text-lg text-slate-gray"; // Default classes
  isActive
  ? "relative font-montserrat text-lg font-bold text-primary after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-primary after:scale-x-100 transition-transform duration-300"
  : "relative font-montserrat text-lg text-slate-gray hover:scale-105 hover:text-primary transition-all duration-300";


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
        
        {/* <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
        <Link to="/" className="bg-primary px-5 py-2 rounded-md text-white font-bold shadow-md hover:shadow-xl transition-shadow duration-300">
          Login 
          </Link>
        </div> */}

        {/* Profile Button */}
        <Link to="/profile" className="flex items-center max-lg:hidden">
          <div className="flex items-center gap-2">
            <img
              src={user.profilePicture}
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <span className="text-lg text-gray-800 font-medium cursor-pointer">
              {user.username}
            </span>
          </div>
        </Link>

        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;