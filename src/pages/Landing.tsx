import SocialMediaIcons from "../components/SocialMediaIcons"
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

const queryProps = {
  query: "(min-width: 1060px)"
}

const Landing = ({ setSelectedPage }: SelectedPageState) => {
  const isAboveLarge = useMediaQuery(queryProps);
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[500px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] "
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px] rounded-full"
              src="assets/images/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[400px] rounded-full"
            src="assets/images/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <div
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Ido {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Jeon
            </span>
          </p>

          <p className="mt-10 text-sm text-center md:text-start italic text-black">
            JAVA Spring Boot Expert, REST API Constructor, MicroService Architect,
            Gamification Designer, Visualisation Challenger. 
          </p>
          <p className="mt-4 mb-7 text-sm text-center md:text-start">
            Java Spring Boot, Vue3, Nuxt.js, Typescript, GraphQL, PostgreSQL,...
            My stacks matches your team? Please contact me! 
          </p>

        </div>

        {/* CALL TO ACTIONS */}
        <div>
          <div className="xs:text-center md:text-left">
            <AnchorLink
                className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                  hover:bg-blue hover:text-white transition duration-500"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                Contact Me
            </AnchorLink>
          </div>
          <SocialMediaIcons />
          {/* <AnchorLink
              className="rounded-r-sm py-0.5 pr-0.5"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                Let's talk.
              </div>
          </AnchorLink> */}
        </div>
      </div>
    </section>
  );
};

export default Landing;