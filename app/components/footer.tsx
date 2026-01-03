"use client";

import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 grid gap-12
                      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold text-white">IronFit Gym</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Transform your body and mind with state-of-the-art equipment,
            certified trainers, and personalized fitness programs.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map((Icon, i) => (
              <span
                key={i}
                className="p-3 rounded-full bg-zinc-800 hover:bg-red-600
                           text-white cursor-pointer transition"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
              <li
                key={link}
                className="hover:text-red-500 cursor-pointer transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Weight Training",
              "Personal Training",
              "Yoga & Meditation",
              "Zumba Classes",
              "Nutrition Guidance",
            ].map((service) => (
              <li
                key={service}
                className="hover:text-red-500 transition cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MdLocationOn className="text-red-500" size={20} />
              Patna, Bihar, India
            </li>

            <li className="flex items-center gap-3">
              <MdEmail className="text-red-500" size={20} />
              support@ironfitgym.com
            </li>

            <li className="flex items-center gap-3">
              <MdPhone className="text-red-500" size={20} />
              +91 98765 43210
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-zinc-800 mt-12" />

      {/* BOTTOM */}
      <div className="text-center text-sm py-6 text-zinc-500">
        © {new Date().getFullYear()} IronFit Gym. All rights reserved.
      </div>
    </footer>
  );
}
