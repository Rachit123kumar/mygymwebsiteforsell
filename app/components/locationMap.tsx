type LocationMapProps = {
  title?: string;
};

export default function LocationMap({ title = "Our Location" }: LocationMapProps) {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-zinc-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
          {title}
        </h2>

        {/* Map Container */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]
                        rounded-2xl overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps?q=Patna,Bihar,India&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}
