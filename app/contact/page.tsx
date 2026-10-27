import type { Metadata } from "next";
import { ContactForm } from "./components/contact-form";

export const metadata: Metadata = { title: "Contact | Sahar Amjad Photography" };

export default function ContactPage() {
  return (
    <>
      <div className="relative h-24 bg-primary">
        <div className="absolute inset-0 bg-[url('/textures/stone3.png')] opacity-20 bg-cover bg-center bg-no-repeat" />
      </div>
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/textures/paper-grain.png')] opacity-30 bg-cover bg-center bg-no-repeat" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-center font-heading text-primary text-5xl">Get in touch</h1>
          <p className="mt-3 mb-10 text-center text-foreground">
            Tell me about your vision and let&apos;s create something beautiful.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
