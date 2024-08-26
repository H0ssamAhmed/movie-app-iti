import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row sticky top-0 w-full z-10 bg-black p-4 text-white justify-start items-center gap-4">
      <section className="mr-10 text-center md:text-start m-0">
        <Link to="/" className="text-[32px] select-none cursor-pointer">Movie App ITI</Link>
      </section>
      <section>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link to='/' className="transition hover:text-orange-500"> Movies </Link>
          <Link to='/actors' className="transition hover:text-orange-500"> Actores </Link>
          <Link to='/series' className="transition hover:text-orange-500"> Series </Link>
          <Link to='/tvShows' className="transition hover:text-orange-500"> TV Shows </Link>
          {/* <Link to='/favorite' className="transition hover:text-orange-500"> Favorite </Link> */}
        </div>
      </section>
    </header>
  )
}

export default Header