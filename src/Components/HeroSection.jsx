import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

const HeroSection = () => {
    return (
      <>
      <section className="bg-gray-900 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-teal-400">Krusha</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              A passionate <span className="text-teal-400">Frontend Developer</span> crafting intuitive user interfaces.
            </p>
            <a
              href="https://x.com/krushna_KD1"
              className="bg-teal-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
            >
              Let's Connect
            </a>
          </div>
  
          <div className="md:w-1/4 mt-8 md:mt-0 flex justify-center ">
            <img
              src="https://i.pinimg.com/736x/83/62/d1/8362d1734d0f65d96cfdce320b8a1922.jpg"
              alt="Frontend Developer"
              className="rounded-full shadow-lg "
            />
          </div>
        </div>
      
      </section>
        <ProjectsSection/>
        <SkillsSection/>
        </>
    );
  };
  
  export default HeroSection;
  