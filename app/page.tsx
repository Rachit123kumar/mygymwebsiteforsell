import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { IoIosCall } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Navbar from "./components/navbsr";
import Footer from "./components/footer";


import {
  FaDumbbell,
  FaUserTie,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa"
import Gallery from "./components/galllary";
import LocationMap from "./components/locationMap";
import MembershipPlans from "./components/pricing";

export default function HomePage() {




const testimonials = [
  {
    quote: "Best gym experience ever!",
    name: "Alice",
    rating: 5,
  },
  {
    quote: "Trainers are very supportive.",
    name: "John",
    rating: 4.5,
  },
  {
    quote: "I achieved my fitness goal!",
    name: "Maria",
    rating: 5,
  },
]
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      {/* ================= NAVBAR ================= */}
      <Navbar/>

      {/* ================= HERO ================= */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Fitness Journey
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join FitZone and train with modern equipment, expert trainers, and personalized programs.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <a
        href="https://wa.me/9661056097?text=I%20would%20like%20to%20book%20a%20free%20gym%20trial."
        target="_blank"
        className="px-6 py-3 rounded-md text-white font-semibold
             bg-gradient-to-r from-orange-500 to-red-600
             hover:scale-105 transition-transform"
        > Book a free trial </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-md border border-border text-center"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="h-96 rounded-lg overflow-hidden border border-border">
            <img
              src="/p2.jpg"
              alt="Gym"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose FitZone?
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            { [
  {
    title: "Premium Equipment",
    desc: "Train with world-class strength and cardio machines designed for maximum performance, safety, and long-term results.",
    icon: FaDumbbell,
  },
  {
    title: "Expert Trainers",
    desc: "Work with certified and experienced trainers who focus on proper form, motivation, and injury-free workouts.",
    icon: FaUserTie,
  },
  {
    title: "Personalized Plans",
    desc: "Get customized workout and diet plans tailored to your body type, fitness goals, and lifestyle.",
    icon: FaClipboardList,
  },
  {
    title: "Proven Results",
    desc: "Hundreds of successful transformations with measurable progress in strength, endurance, and confidence.",
    icon: FaChartLine,
  },
].map((item, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 hover:border-orange-500 transition"
              >
                <div className="w-10 h-10 mb-4 text-orange-500">
                 {item.icon && <item.icon size={40} />  }
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {[
    {
      title: "Weight Training",
      desc: "Build strength and muscle with expert coaching.",
      img: "/p1.jpg",
    },
    {
      title: "Cardio Programs",
      desc: "Boost endurance and burn calories efficiently.",
      img: "/p2.jpg",
    },
    {
      title: "Zumba & Dance",
      desc: "Fun, energetic workouts that keep you moving.",
      img: "/p3.jpg",
    },
    {
      title: "Yoga & Meditation",
      desc: "Improve flexibility, balance, and mental clarity.",
      img: "/p4.jpg",
    },
    {
      title: "Personal Training",
      desc: "1-on-1 customized training for faster results.",
      img: "/p5.jpg",
    },
    {
      title: "Nutrition Guidance",
      desc: "Diet plans that support your fitness goals.",
      img: "/p6.jpg",
    },
  ].map((service, i) => (
    <div
      key={i}
      className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h4 className="text-lg font-semibold mb-2">
          {service.title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  ))}
</div>


        </div>
      </section>

      {/* pricing  */}
      <MembershipPlans/>

      
      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="py-16 px-4 bg-muted/50">
     <section id="testimonials" className="py-16 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">What Our Members Say</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-border rounded-xl p-6 bg-background hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote */}
               
              <p className="text-sm italic mb-4 text-white">“{t.quote}”</p>

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 mb-4">
  {Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1

    if (t.rating >= starValue) {
      return (
        <FaStar
          key={index}
          className="text-yellow-400 w-4 h-4"
        />
      )
    }

    if (t.rating >= starValue - 0.5) {
      return (
        <FaStarHalfAlt
          key={index}
          className="text-yellow-400 w-4 h-4"
        />
      )
    }

    return (
      <FaRegStar
        key={index}
        className="text-yellow-400 w-4 h-4"
      />
    )
  })}

  {/* Rating number */}
  <span className="ml-2 text-xs text-muted-foreground font-medium">
    {t.rating.toFixed(1)}
  </span>
</div>


              {/* Member Name */}
              <span className="text-xs text-muted-foreground">— {t.name}  </span>
              <span className="text-xs text-muted-foreground block font-sans"> 
                Verified Member
              <FcGoogle className="inline"/>
                </span>
            </div>
          ))}
        </div>
      </div>
    </section>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Body?
          </h3>
          <p className="mb-6 opacity-90">
            Join thousands of members achieving real results.
          </p>
          <a
             href="https://wa.me/919999999999"
            className="inline-block px-6 py-3 bg-white text-black rounded-md font-semibold"
          >
            Start Your Journey →
          </a>
        </div>
      </section>


{/* location Map */}
      <LocationMap title="Find Us Here"/>
      {/* Gallary */}
      <Gallery/>

      {/* ================= FOOTER ================= */}
  <Footer/>

      {/* ================= WHATSAPP BUTTON ================= */}

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 right-6 w-14  bg-green-500 rounded-2xl h-14 rounded-full flex items-center justify-center text-white shadow-lg"
        >
      <IoIosCall className="stroke-green-500 size-7">
        {/* <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />
        </svg> */}
        </IoIosCall>
      </a>

    </div>
  )
}
