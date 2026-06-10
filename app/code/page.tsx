import { Card } from "../../components/ui";

export default function CodePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Code Projects</h1>

      <p>
        A selection of personal and academic projects spanning web, mobile, and systems development.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">

        <Card>
          <h3 className="font-semibold">brodymouw-site</h3>
          <p className="text-sm">
            This portfolio site — built with Next.js, React 19, TypeScript, and Tailwind CSS.
            Features dark/light mode, responsive design, and is deployed on Vercel.
          </p>
          <p className="text-sm mt-2">
            <a href="https://github.com/brody-mouw/brodymouw-site" target="_blank" rel="noopener noreferrer">GitHub</a>
            {" · "}
            <a href="https://brodymouw.com" target="_blank" rel="noopener noreferrer">Live Site</a>
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold">MealsToGo</h3>
          <p className="text-sm">
            Cross-platform mobile food delivery app built with React Native and Expo. Features
            maps integration, Firebase authentication and real-time database, bottom-tab navigation,
            and Lottie animations.
          </p>
          <p className="text-sm mt-2">
            <a href="https://github.com/brody-mouw/MealsToGo" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold">LevelUpDay</h3>
          <p className="text-sm">
            React Native mobile app built with Expo Router for file-based routing. Written in TypeScript
            with React Navigation, and includes an automated testing setup with Jest.
          </p>
          <p className="text-sm mt-2">
            <a href="https://github.com/brody-mouw/LevelUpDay" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold">Lake-Master</h3>
          <p className="text-sm">
            A substantial C# desktop application. Demonstrates object-oriented design and
            applied C# development outside of a web context.
          </p>
          <p className="text-sm mt-2">
            <a href="https://github.com/brody-mouw/Lake-Master" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold">Systems & Academic Projects</h3>
          <p className="text-sm">
            A pair of lower-level projects from my CS coursework at South Dakota State. One in C++
            covering systems programming concepts, and one in C focused on operating systems — both
            demonstrating strong CS fundamentals beneath the higher-level frameworks.
          </p>
          <p className="text-sm mt-2">
            <a href="https://github.com/brody-mouw/assignment3" target="_blank" rel="noopener noreferrer">C++ Project</a>
            {" · "}
            <a href="https://github.com/brody-mouw/OS-Assignment2" target="_blank" rel="noopener noreferrer">OS Project</a>
          </p>
        </Card>

      </div>
    </section>
  );
}