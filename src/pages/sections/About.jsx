import React from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import SkillsIcon from "../components/SkillsIcon";

const sectionsLinks = ["profile", "education", "skills"];
const skillsNamesStrong = [
  "java",
  "python",
  "javascript",
  "css",
  "html",
  "react",
];
const skillsNamesGood = ["cpp", "sql"];

const About = React.forwardRef(function About(props, ref) {
  const router = useRouter();

  const sectionLinksRefs = React.useRef([]);
  const [selectedLinkIndx, setSelectedLinkIndx] = React.useState(0);

  React.useEffect(() => {
    sectionLinksRefs.current.forEach((l) => {
      sectionLinksRefs.current.indexOf(l) === selectedLinkIndx
        ? (l.className = "selected-sidebar cursor-pointer")
        : (l.className = "opacity-70 hover:text-blue-400 cursor-pointer");
    });
  }, [selectedLinkIndx]);

  function handleClick(linkIndx) {
    setSelectedLinkIndx(linkIndx);
  }

  return (
    <section
      ref={(el) => (ref.current[1] = el)}
      id="about"
      className="bg-secondary h-screen snap-start overflow-hidden"
    >
      <div
        className="grid grid-cols-3 gap-20 pt-40 px-[20%]
            max-md:flex max-md:flex-col max-md:pt-28 max-md:gap-16 max-md:px-10 land-cont"
      >
        <div className="text-mainHighlight flex flex-col text-lg sticky">
          {sectionsLinks.map((link, i) => (
            <a
              className={`cursor-pointer ${
                i === selectedLinkIndx
                  ? "selected-sidebar"
                  : "opacity-70 hover:text-blue-400"
              }`}
              key={nanoid()}
              onClick={() => handleClick(i)}
              ref={(el) => (sectionLinksRefs.current[i] = el)}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="col-span-2 overflow-y-scroll no-scrollbar max-h-[65dvh] flex flex-col text-slate-100">
          <section
            id="profile"
            className={`flex flex-col gap-6 ${
              selectedLinkIndx !== 0 && "hidden"
            }`}
          >
            <h2 className="text-mainHighlight tracking-wider">Profile</h2>
            <p>
              A couple of years ago, I wrote a tiny Python script. I thought it
              would make my work more efficient. It did. On top of that, it
              opened up a whole new world for me. Ultimately, it inspired me to
              leave my career in architecture, and pursue my passion for
              learning and creating beautiful applications.
            </p>
            <p>
              I worked as an architect and BIM Manager (Building Information
              Model) in the UK for 5 years. I was in charge of coordinating the
              way we use software across the practice. I developed plug-ins and
              scripts that improved the efficiency of my colleagues and by doing
              so I discovered my passion for technology.
            </p>
            <p>
              Although I have no working experience in the tech industry, I do
              have experience with:
            </p>
            <ul className="px-2 -my-3">
              <li>Working in large and complex projects and teams.</li>
              <li>Dealing with demanding deadlines and clients.</li>
              <li>
                Leading a team and being responsible for parts of a project.
              </li>
              <li>
                Communicating with w wide range of professionals and
                understanding their point of view.
              </li>
            </ul>
            <p>
              And I believe that these can be a positive addition to a team in
              this field.
            </p>
          </section>

          <section
            id="experience"
            className={`flex flex-col gap-6 ${
              selectedLinkIndx !== 1 && "hidden"
            }`}
          >
            <h2 className="text-mainHighlight tracking-wider">Education</h2>
            <p>
              As a self-taught programmer I rely on books and quality online
              resources for my learning. Some of such courses and university
              units I've completed are:
            </p>
            <table className="text-sm ml-2 table-fixed leading-6">
              <tr className="hover:text-yellow-100">
                <td className="py-1 text-sm">
                  Harvard
                  <br />
                  <small>CS50</small>
                </td>
                <td className="pb-5">Introduction to Computer Science</td>
              </tr>
              <tr className="hover:text-yellow-100">
                <td className="py-1 text-sm">
                  Berkeley
                  <br />
                  <small>CS61A</small>
                </td>
                <td>Structure and Interpretation of Computer Programs</td>
              </tr>
              <tr className="hover:text-yellow-100">
                <td className="py-1 text-sm">
                  Berkeley
                  <br />
                  <small>CS61B</small>
                </td>
                <td className="pb-5">Data Structures</td>
              </tr>
              <tr className="hover:text-yellow-100">
                <td className="py-1 text-sm">Udemy</td>
                <td>OOP in Python</td>
              </tr>
              <tr className="hover:text-yellow-100">
                <td className="py-1 text-sm">The Odin Project</td>
                <td className="pb-5">Web Developments</td>
              </tr>
            </table>
          </section>

          <section
            className={`${
              selectedLinkIndx !== 2 && "hidden"
            } flex flex-col gap-6`}
          >
            <h2 id="skills" className={`text-mainHighlight tracking-wider`}>
              Skills
            </h2>
            <p>
              I possess a high degree of self-reliance. I learn by myself and I
              work with others well. I derive satisfaction from solving problems
              and applying logical reasoning. Above all, I always want to learn
              more.
            </p>
            <h4>I have a Strong knowledge of:</h4>
            <div className="flex flex-wrap px-4">
              {skillsNamesStrong.map((skill) => {
                return <SkillsIcon key={nanoid()} name={skill} />;
              })}
            </div>
            <h4>I have a Good knowledge of:</h4>
            <div className="flex flex-wrap px-4">
              {skillsNamesGood.map((skill) => {
                return <SkillsIcon key={nanoid()} name={skill} />;
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
});

export default About;
