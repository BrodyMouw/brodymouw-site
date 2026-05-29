import fs from "fs";
import path from "path";
import { Button, Card } from "../../components/ui";

export default function WorkPage() {
  const resumePath = path.join(process.cwd(), "public", "Brody-Mouw-Resume.pdf");
  const hasResume = fs.existsSync(resumePath);

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Work & Resume</h1>

      <div className="space-y-4">
        <p>
          Experienced software engineer focusing on React, Next.js, TypeScript,
          and backend systems. Below is a short summary
        </p>

        <Card>
          <h3 className="font-semibold">Summary</h3>
          <p className="text-sm text-zinc-600">Full-stack SWE, system design, testing, and architecture.</p>
        </Card>

        <Card>
          <h3 className="font-semibold">Experience</h3>
          <ul className="list-disc list-inside text-sm text-zinc-700">
            <li>Software Engineer</li>
          </ul>
        </Card>

        {hasResume ? (
          <div className="space-y-3">
            <Button as="a" href="/Brody-Mouw-Resume.pdf">Download Resume (PDF)</Button>
            <div className="mt-4">
              <embed src="/Brody-Mouw-Resume.pdf" type="application/pdf" width="100%" height={700} />
            </div>
          </div>
        ) : (
          <div className="text-sm text-zinc-600">No resume found. Drop a PDF at <code className="rounded bg-zinc-100 px-1">public/resume.pdf</code>.</div>
        )}
      </div>
    </section>
  );
}
