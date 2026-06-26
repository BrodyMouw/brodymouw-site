import type { Metadata } from "next";
import { Card } from "../../components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Brody Mouw — email, phone, LinkedIn, and GitHub.",
  alternates: { canonical: "https://brodymouw.com/contact" },
};

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Contact</h1>

      <p>
        Feel free to reach out via phone, email, or any of the links below.
      </p>

      <div className="space-y-4">
        <Card>
          <h3 className="font-semibold">Phone</h3>
          <p className="text-sm">
            <a href="tel:+16055530918">605-553-0918</a>
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm">
            <a href="mailto:brodymouw@outlook.com">brodymouw@outlook.com</a>
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold">LinkedIn</h3>
          <p className="text-sm">
            <a href="https://www.linkedin.com/in/Brody-Mouw" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/Brody-Mouw
            </a>
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold">GitHub</h3>
          <p className="text-sm">
            <a href="https://github.com/brody-mouw" target="_blank" rel="noopener noreferrer">
              github.com/brody-mouw
            </a>
          </p>
        </Card>
      </div>
    </section>
  );
}