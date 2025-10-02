import ContactLink from "@/components/ContactLink";
import ContactForm from "@/components/ContactForm";
import { Linkedin, Mail, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Contact Me
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          I’d love to hear from you! Connect or send me a message below.
        </p>
      </section>

      {/* Contact Links */}
      <section className="space-y-6">
        <div className="flex flex-col space-y-4">
          <ContactLink
            href="https://www.linkedin.com/in/charleslaverick"
            icon={<Linkedin className="h-6 w-6 text-accent dark:text-accent" />}
            label="Connect on LinkedIn"
          />
          <ContactLink
            href="mailto:charles@example.com"
            icon={<Mail className="h-6 w-6 text-accent dark:text-accent" />}
            label="Send me an Email"
          />
          <ContactLink
            href="https://github.com/charleslaverick"
            icon={<Github className="h-6 w-6 text-accent dark:text-accent" />}
            label="View my GitHub"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Send a Message
        </h2>
        <ContactForm />
      </section>
    </main>
  );
}