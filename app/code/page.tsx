import { Card } from "../../components/ui";

export default function CodePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Code Projects</h1>

      <p>A selection of software engineering projects demonstrating architecture, tests, and impact.</p>

      <div className="grid gap-4">
        <Card>
          <h3 className="font-semibold">Project One</h3>
          <p className="text-sm text-zinc-600">Short description, tech stack, role, and link to repo.</p>
        </Card>

        <Card>
          <h3 className="font-semibold">Project Two</h3>
          <p className="text-sm text-zinc-600">Short description, tech stack, role, and link to repo.</p>
        </Card>
      </div>
    </section>
  );
}
