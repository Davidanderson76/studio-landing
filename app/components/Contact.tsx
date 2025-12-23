import { siteContent } from "../content/siteContent";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          {siteContent.contact.heading}
        </h2>
        <a
          href={`mailto:${siteContent.contact.email}`}
          className="text-lg underline underline-offset-4 hover:text-gray-300">
          {siteContent.contact.email}
        </a>
      </div>
    </section>
  );
}
