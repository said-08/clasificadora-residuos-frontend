import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver">
        <h1 className="text-lg font-semibold">Todo app</h1>
        <ul className="flex gap-[40px] text-m">
          <Link to='/waste'>Home</Link>
          <Link to='/waste-add'>Clasificar imagen</Link>
        </ul>
      </div>
  )
}

export default Nav
