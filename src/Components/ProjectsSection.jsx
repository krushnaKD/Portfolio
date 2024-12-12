const ProjectsSection = () => {
  const projects = [
    {
      title: "Expense Tracker App",
      description:
        "A React-based app for managing expenses with charts and analytics.",
      link: "https://expensemanagerr.netlify.app/",
      image:
        "https://i.pinimg.com/736x/24/96/17/2496171fc6f324f2e9e86312abd4e4e0.jpg",
    },
    {
      title: "Ice Cream Cafe Website",
      description:
        "A responsive website for an ice cream cafe with interactive UI.",
      link: "https://icecreamecafe.netlify.app",
      image:
        "https://files.oaiusercontent.com/file-FeNppMHSMHtPQGi2NDYm1C?se=2024-12-10T11%3A05%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D2df60d6c-e1be-45c3-90ae-15f7c101a070.webp&sig=DlTTe8IvT9h8vULb80HtDqFvd9vOJqXWZDybpkI8HFk%3D",
    },
    {
      title: "Notes App",
      description:
        "A simple notes-taking app with search and tag functionality.",
      link: "#",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100">Projects</h2>
          <p className="text-gray-200 mt-4">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 font-medium inline-block mt-4 hover:text-teal-600"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
