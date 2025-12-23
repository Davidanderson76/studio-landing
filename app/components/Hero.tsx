import { siteContent } from "../content/siteContent";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {siteContent.hero.title}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          {siteContent.hero.subtitle}
        </p>
        <a
          href="#contact"
          className="inline-block border border-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition">
          {siteContent.hero.cta}
        </a>
      </div>
    </section>
  );
}
