import {
  SiLaravel,
  SiFramer,
  SiVuedotjs,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiVite,
} from "react-icons/si";

const Skills = () => {
  const skillData = [
    {
      name: "Laravel",
      icon: <SiLaravel className="text-red-500" />,
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs className="text-blue-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400" />,
    },
    {
      name: "Python",
      icon: <SiPython className="text-blue-400" />,
    },
    {
      name: "Vite",
      icon: <SiVite className="text-purple-400" />,
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-20 px-6 max-w-5xl mx-auto flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text">
        My Skills
      </h2>
      <p className="text-gray-500 text-sm mb-12 text-center">
        Technologies and tools I work with to create amazing web experiences
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {skillData.map((skill, index) => (
          <div
            key={index}
            className="bg-[#111118] border border-gray-800 p-5 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl">{skill.icon}</div>
              <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-500">Proficiency</span>
            </div>

            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-gray-600 to-white h-full rounded-full"
                style={{ width: skill.percent }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
