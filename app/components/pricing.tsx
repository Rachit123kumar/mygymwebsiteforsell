import React from "react";
import { FaCheckCircle, FaDumbbell, FaCrown } from "react-icons/fa";

type Plan = {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
};

const plans: Plan[] = [
  {
    name: "Basic",
    price: "₹999",
    duration: "per month",
    icon: <FaDumbbell size={28} />,
    features: [
      "Gym Access",
      "Cardio Equipment",
      "Locker Facility",
      "Free Trial Session",
    ],
  },
  {
    name: "Standard",
    price: "₹2,499",
    duration: "3 months",
    popular: true,
    icon: <FaCrown size={28} />,
    features: [
      "All Basic Features",
      "Weight Training",
      "Group Classes",
      "Trainer Guidance",
      "Diet Tips",
    ],
  },
  {
    name: "Premium",
    price: "₹4,999",
    duration: "6 months",
    icon: <FaCrown size={28} />,
    features: [
      "All Standard Features",
      "Personal Trainer",
      "Custom Workout Plan",
      "Nutrition Consultation",
      "Priority Support",
    ],
  },
];

export default function MembershipPlans() {
  return (
    <section id="plans" className=" w-full py-20 px-4 sm:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Membership Plans
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Choose a plan that fits your fitness goals and start your
            transformation today.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 shadow-md transition
                ${plan.popular ? "border-orange-500 scale-105" : ""}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2
                             bg-orange-500 text-white text-xs px-4 py-1 rounded-full"
                >
                  Most Popular
                </span>
              )}

              {/* Icon */}
              <div className="flex justify-center text-orange-500 mb-4">
                {plan.icon}
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold text-center mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-zinc-500 ml-2">{plan.duration}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20join%20your%20gym"
                target="_blank"
                className={`block text-center py-3 rounded-lg font-semibold transition
                  ${
                    plan.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }
                `}
              >
                Book Free Trial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
