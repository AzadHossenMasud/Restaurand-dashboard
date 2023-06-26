import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { logoutUser } = useContext(AuthContext);
  // console.log(logoutUser)
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 pt-2 pl-2">
              {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
              <FaUserAlt></FaUserAlt>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {/* <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li> */}
            <li onClick={handleLogout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
