import type { Metadata } from "next";
import { ContactForm } from "./components/contact-form";

export const metadata: Metadata = { title: "Contact | Sahar Amjad Photography" };

export default function ContactPage() {
  return (
    <>
      <div className="h-24 bg-neutral-900" />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-center font-serif text-4xl">Get in touch</h1>
        <p className="mt-3 mb-10 text-center text-neutral-600">
          Tell me about your vision and let&apos;s create something beautiful.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
