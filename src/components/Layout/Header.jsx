import { NavLink } from 'react-router-dom';

export const Header = () => {
  const activeLink = 'text-red-700 border-b-red-500';
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <p className="h-5 cursor-pointer hover:text-red-700">
            <span className="text-red-700">Real</span>Estate
          </p>
        </div>
        <nav>
          <ul className="flex space-x-10">
            <li className="cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeLink : '')}
              >
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent">
              <NavLink
                to="/offers"
                className={({ isActive }) => (isActive ? activeLink : '')}
              >
                {' '}
                Offers
              </NavLink>
            </li>
            <li className="cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent">
              <NavLink
                to="/sign-in"
                className={({ isActive }) => (isActive ? activeLink : '')}
              >
                SignIn
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
