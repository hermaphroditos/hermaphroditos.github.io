import {useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

type SelectedPageProps = {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

type PageProps = {
  page: string;
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const Link = ({ page, selectedPage, setSelectedPage }: PageProps) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover:text-yellow transition duration-500`}
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


const Navbar = ({ selectedPage, setSelectedPage }: SelectedPageProps): any => {
  const [isMenuToggled, setIsMenuToggled ] =useState(false) ;
  const isAboveMediumScreens = useMediaQuery(queryProps);

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">J.ID</h4>

        {/* DESKTOP NAV */}
        {isAboveMediumScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Who Am I?" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <div>
              <button className="rounded-e-full bg-red p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              more...  
              </button>
            </div>
            <Link page="What I Did" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <div>
              <button className="rounded-e-full bg-red p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              more...  
              </button>
            </div>
            <Link page="Other Websites" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
}

export default Navbar