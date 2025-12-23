import { siteContent } from "../content/siteContent";

export default function About() {
  return (
    <section className="px-6 py-24 bg-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          {siteContent.about.heading}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {siteContent.about.text}
        </p>
      </div>
    </section>
  );
}
