import fs from "fs";
import path from "path";
import { Button, Card } from "../../components/ui";

const skills = [
  { label: "TypeScript", icon: "devicon-typescript-plain colored" },
  { label: "JavaScript", icon: "devicon-javascript-plain colored" },
  { label: "C#", icon: "devicon-csharp-plain colored" },
  { label: "Python", icon: "devicon-python-plain colored" },
  { label: "HTML5", icon: "devicon-html5-plain colored" },
  { label: "CSS", icon: "devicon-css3-plain colored" },
  { label: "React", icon: "devicon-react-original colored" },
  { label: "React Native", icon: "devicon-react-original colored" },
  { label: "Angular", icon: "devicon-angularjs-plain colored" },
  { label: "Node.js", icon: "devicon-nodejs-plain colored" },
  { label: "ASP.NET Core", icon: "devicon-dotnetcore-plain colored" },
  { label: "Next.js", icon: "devicon-nextjs-plain" },
  { label: "Git", icon: "devicon-git-plain colored" },
  { label: "Azure DevOps", icon: "devicon-azure-plain colored" },
  { label: "Elasticsearch", icon: "devicon-elasticsearch-plain colored" },
  { label: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
  { label: "C++", icon: "devicon-cplusplus-plain colored" },
  { label: "C", icon: "devicon-c-plain colored" },
];

export default function WorkPage() {
  const resumePath = path.join(
    process.cwd(),
    "public",
    "Brody-Mouw-Resume.pdf",
  );
  const hasResume = fs.existsSync(resumePath);

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Work & Resume</h1>

      <div className="space-y-4">
        <p>
          Software developer working on international trade sites with a focus
          on full stack web development, SEO, and responsive design. Experience
          with C# ASP.NET Core, React, Node.js, and Elasticsearch, as well as
          automation testing and Agile development on global teams.
        </p>

        <h3 className="font-semibold text-center">Skills & Technologies</h3>
        <div className="grid grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill) => (
            <div key={skill.label} className="flex flex-col items-center gap-1">
              <i className={`${skill.icon} text-4xl`} />
              <span className="text-xs">{skill.label}</span>
            </div>
          ))}
        </div>

        <Card>
          <h3 className="font-semibold">Summary</h3>
          <p className="text-sm">
            Full stack web developer with experience across the entire
            development lifecycle — from UI/UX design and front end development
            to API development, QA testing, and CI/CD. Comfortable in both
            startup and enterprise environments, with a strong emphasis on SEO,
            responsive design, and code quality.
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold">Experience</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="font-semibold">
                Software Developer — Sandhills Global, Scottsdale, AZ
                (2021–Present)
              </p>
              <p>
                Full stack developer for international trade sites. Stack
                includes C# ASP.NET MVC, ASP.NET Core, .NET 6, Node.js, React,
                and Elasticsearch. Heavy emphasis on SEO and responsive design.
                Develops and maintains internal and external APIs for customer
                lead messaging, service price quoting, and auction price
                updates. Participates in code reviews, UI/UX design, and end
                user testing.
              </p>
            </li>
            <li>
              <p className="font-semibold">
                Student Software Developer — Daktronics, Brookings, SD
                (2019–2021)
              </p>
              <p>
                Built the AllSportsPro console for managing scoreboards using
                Angular and .NET Core. Launched a new subscription service
                serving dozens of high schools and colleges. Unit testing with
                Jasmine.
              </p>
            </li>
            <li>
              <p className="font-semibold">
                Student QA Engineer — Daktronics, Brookings, SD (2018–2019)
              </p>
              <p>
                Manual testing for scoreboard hardware and software. Gained
                experience creating and running automated tests.
              </p>
            </li>
            <li>
              <p className="font-semibold">
                IT Help Desk Tech — Daktronics, Brookings, SD (2017–2018)
              </p>
              <p>
                General technician supporting employees with laptops. Led the
                student team in calls taken during tenure.
              </p>
            </li>
          </ul>
        </Card>

        <Card>
          <h3 className="font-semibold">Education</h3>
          <p className="text-sm">
            South Dakota State University, Brookings, SD — B.S. in Computer
            Science, 3.7 GPA
          </p>
        </Card>

        {hasResume ? (
          <div className="space-y-3">
            <Button as="a" href="/Brody-Mouw-Resume.pdf">
              Download Resume (PDF)
            </Button>
            <div className="mt-4">
              <embed
                src="/Brody-Mouw-Resume.pdf"
                type="application/pdf"
                width="100%"
                height={700}
              />
            </div>
          </div>
        ) : (
          <div className="text-sm text-zinc-600">
            No resume found. Drop a PDF at{" "}
            <code className="rounded bg-zinc-100 px-1">public/resume.pdf</code>.
          </div>
        )}
      </div>
    </section>
  );
}
