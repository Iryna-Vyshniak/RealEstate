import { NavLink } from 'react-router-dom';

export const Header = () => {
  const activeLink =
    'cursor-pointer py-3 text-sm font-semibold text-black-700 border-b-[3px] border-b-red-700';
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
            <li className="py-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : 'cursor-pointer px-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to="/offers"
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : 'cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent'
                }
              >
                {' '}
                Offers
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : 'cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent'
                }
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
