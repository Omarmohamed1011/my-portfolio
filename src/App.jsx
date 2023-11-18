import { Link, NavLink, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className=" p-3 flex md:flex-row shadow-2xl items-center justify-between mb-10"> 
        <Link to={"/"} className=" border rounded-xl font-extrabold text-[40px] cursor-pointer p-3 " >Ramo</Link>

        <nav className=" flex flex-row gap-3 text-blue-700 font-bold">
          <NavLink to={"/childhood"} className={""} >childhood</NavLink>
          <NavLink to={"/education"} className={""} >Education</NavLink>
          <NavLink to={"/skills-and-talents"} className={""} >skills-and-talents</NavLink>
          <NavLink to={"/aspirations"} className={""} >Aspirations</NavLink>
          <NavLink to={"/contact-information"} className={""} >contact-information</NavLink>
        </nav>
      </div>
      <div className="p-3">
        <Outlet />
      </div>
    </>
  )
}

export default App