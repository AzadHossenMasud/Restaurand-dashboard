import React from "react";
import Header from "../component/Header/Header";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
            <Link to='/dashbord/reservation'>Reservation</Link>
            </li>
            <li>
            <Link to='/dashbord/table-service'>Table Services</Link>
            </li>
            <li>
            <Link to='/dashboard'>Menu</Link>
            </li>
            <li>
            <Link to='/dashbord/delivery'>Delivery</Link>
            </li>
            <li>
            <Link to='/dashbord/accounting'>Accounting</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
