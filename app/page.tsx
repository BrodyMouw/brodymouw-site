import { Card } from "../components/ui";

export default function Home() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Brody Mouw</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          Software engineer — resume, projects, and some guitar recordings.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <a href="/work">
            <h3 className="font-semibold">Work / Resume</h3>
            <p className="text-sm text-zinc-600">Summary, experience, and resume download.</p>
          </a>
        </Card>

        <Card>
          <a href="/code">
            <h3 className="font-semibold">Code Projects</h3>
            <p className="text-sm text-zinc-600">Select SWE projects with descriptions and links.</p>
          </a>
        </Card>

        <Card>
          <a href="/guitar">
            <h3 className="font-semibold">Guitar Projects</h3>
            <p className="text-sm text-zinc-600">Videos and recordings — I'll upload MP4s here.</p>
          </a>
        </Card>

        <Card>
          <a href="/contact">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm text-zinc-600">Email and social links.</p>
          </a>
        </Card>
      </div>
    </section>
  );
}
