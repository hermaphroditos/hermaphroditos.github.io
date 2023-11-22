import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title='' }: any) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <div>
      <div className={overlayStyles}>
      <p className="text-2xl font-playfair">{title}</p>
      <p className="mt-7">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
      </p>
      </div>
    </div>
    // <motion.div variants={projectVariant} className="relative">
    //   <div className={overlayStyles}>
    //     <p className="text-2xl font-playfair">{title}</p>
    //     <p className="mt-7">
    //       Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
    //       porttitor accumsan tincidunt.
    //     </p>
    //   </div>
    //   <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    // </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <div
        className="md:w-2/5 mx-auto text-center"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <div
          className="sm:grid sm:grid-cols-2"
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[200px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
          <div
            className="flex justify-center text-center items-center p-10 bg-rose-600
              max-w-[400px] max-h-[200px] text-2xl font-playfair font-semibold"
          >
            FAST & COMFORTABLE 
          </div>
          <div
            className="flex justify-center text-center items-center p-10 bg-rose-600
              max-w-[400px] max-h-[200px] text-2xl font-playfair font-semibold"
          >
            FAST & COMFORTABLE 
          </div>
          <div
            className="flex justify-center text-center items-center p-10 bg-rose-600
              max-w-[400px] max-h-[200px] text-2xl font-playfair font-semibold"
          >
            FAST & COMFORTABLE 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;