import {useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

// type SelectedPageProps = {
//   selectedPage: string;
//   setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
// };

// type PageProps = {
//   page: string;
//   selectedPage: string;
//   setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
// };

const Link = ({ page, selectedPage, setSelectedPage }: PageState) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const queryProps = {
  query: "(min-width: 1060px)"
}


const Navbar = ({ selectedPage, setSelectedPage }: SelectedPageState): any => {
  const [isMenuToggled, setIsMenuToggled ] =useState(false) ;
  const isAboveMediumScreens = useMediaQuery(queryProps);

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">J.ID</h4>

        {/* DESKTOP NAV */}
        {isAboveMediumScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Testmonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
         <button className="rounded-e-full bg-red p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
         more...  
         </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar