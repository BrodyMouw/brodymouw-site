import Image from "next/image";
import { Card } from "../components/ui";

const cards = [
  {
    href: "/work",
    image: "/images/SandhillsLogo.jpg",
    title: "Work / Resume",
    description: "Summary, experience, and resume download.",
  },
  {
    href: "/code",
    image: "/images/CodeProjects.jpg",
    title: "Code Projects",
    description: "Select SWE projects with descriptions and links.",
  },
  {
    href: "/guitar",
    image: "/images/BrodyGuitar.jpeg",
    title: "Guitar Projects",
    description: "I play guitar too check it out.",
  },
  {
    href: "/contact",
    image: "/images/Contact.jpg",
    title: "Contact",
    description: "Email and social links.",
  },
];

export default function Home() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Brody Mouw</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          Hi, I'm Brody! I'm a software engineer with a passion for building
          impactful projects. This is my personal site where I share my work,
          code, and guitar recordings. Feel free to explore and reach out!
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Card key={card.href}>
            <a href={card.href}>
              <div
                className="relative w-full mb-3"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="font-semibold text-center">{card.title}</h3>
              <p className="text-sm text-zinc-600 text-center">
                {card.description}
              </p>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
