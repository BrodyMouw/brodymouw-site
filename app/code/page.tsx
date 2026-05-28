export default function CodePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Code Projects</h1>

      <p className="text-zinc-700 dark:text-zinc-300">A selection of software engineering projects demonstrating architecture, tests, and impact.</p>

      <div className="grid gap-4">
        <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
          <h3 className="font-semibold">Project One</h3>
          <p className="text-sm text-zinc-600">Short description, tech stack, role, and link to repo.</p>
        </article>

        <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
          <h3 className="font-semibold">Project Two</h3>
          <p className="text-sm text-zinc-600">Short description, tech stack, role, and link to repo.</p>
        </article>
      </div>
    </section>
  );
}
