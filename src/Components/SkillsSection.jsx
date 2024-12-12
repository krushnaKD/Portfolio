const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      tools: [{
        name:"HTML",
        logo:"https://www.svgrepo.com/show/303205/html-5-logo.svg"},{
          name:"CSS",
          logo:"https://www.svgrepo.com/show/452185/css-3.svg"
        },{
          name:"Javascript",
          logo:"https://www.svgrepo.com/show/452045/js.svg"
        },{
          name:"React",
          logo:"https://www.svgrepo.com/show/355190/reactjs.svg"
        },{
          name:"Tailwind",
          logo:"https://www.svgrepo.com/show/374118/tailwind.svg"
        },],
      logo:["https://www.svgrepo.com/show/303205/html-5-logo.svg","https://www.svgrepo.com/show/303205/html-5-logo.svg","https://www.svgrepo.com/show/303205/html-5-logo.svg","https://www.svgrepo.com/show/303205/html-5-logo.svg","https://www.svgrepo.com/show/303205/html-5-logo.svg","https://www.svgrepo.com/show/303205/html-5-logo.svg"]
    },
    {
      category: "Backend Development",
      tools: [{
        name:"Node js",
        logo:"https://www.svgrepo.com/show/452075/node-js.svg"
      },
    {
      name:"Express js",
      logo:""
    }],
    },
    {
      category: "Version Control & Tools",
      tools: [{
        name:"git",
        logo:"https://www.svgrepo.com/show/509966/git.svg"
      },
      {
        name:"github",
        logo:"https://www.svgrepo.com/show/475654/github-color.svg"
      },
      {
        name:"Vs Code",
        logo:"https://www.svgrepo.com/show/452129/vs-code.svg"
      }],
    },
  ];

  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-400">Skills</h2>
          <p className="text-gray-400 mt-4">
            Here are some technologies and tools I excel at.
          </p>
        </div>  

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-4 ">
                {skill.tools.map((tool, idx) => (
                   <>
                   <div className="flex gap-2 hover:scale-105 cursor-pointer w-fit">
                    <img className="w-[40px]" src={tool.logo} alt="" />
                    <h1>{tool.name}</h1>    
                   </div>
                   </>             
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;