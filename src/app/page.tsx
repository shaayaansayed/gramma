"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
// Removed unused icon imports

export default function Home() {
  const [activeTab, setActiveTab] = useState(0); // Start on Tab 1

  const tabs = [
    {
      label: "When something might be wrong",
      heading: "When something might be wrong",
      body: "If Gramma sees a pattern that looks like a possible fall—like your mom going into the bathroom and then no movement for a while—it surfaces that clearly. You'll know when it's time to call or ask someone nearby to check in, instead of just hoping everything is okay.",
      cardImage: "https://i.ibb.co/8Dz7XHwJ/fall.png",
    },
    {
      label: "Nighttime peace of mind",
      heading: "Nighttime peace of mind",
      body: "Gramma gives you a simple summary of last night—bathroom visits and restlessness—so you can see when nights look different from her normal. It's an easy way to know if you should ask how she slept, without using cameras or microphones.",
      cardImage: "https://i.ibb.co/zhJdNHdr/night.png",
    },
    {
      label: "Staying active & rested",
      heading: "See when this week looks different",
      body: "Gramma compares your parent's activity and sleep to what's normal for them—so you can spot when something's a bit off and might be worth a quick call to check in.",
      cardImage: "https://i.ibb.co/FbtQzfGf/Generated-Image-November-16-2025-12-43-PM.png",
    },
    {
      label: "Staying on top of meds",
      heading: "See when meds slip through the cracks",
      body: "Gramma shows you at a glance how often evening meds are taken each week, and gently flags missed days so you can step in. It's a quiet heads-up—not nagging—and you can turn on an 8pm reminder if your parent wants help sticking to their routine.",
      cardImage: "https://i.ibb.co/jvxtK2Cm/Generated-Image-November-16-2025-12-32-PM.png",
    },
  ];
  return (
    <div className="min-h-screen bg-[#F7F1E8]">
      {/* Top Promo Bar */}
      <div className="bg-[#6C8C7A] text-white text-center py-3 px-4">
        <p className="text-[13px]">Limited early access • Designed for families helping parents age in place</p>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-[#E1D5C8] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-light tracking-tight text-[#2B2520]">gramma</h1>
          <Button variant="outline" className="border-[#6C8C7A] text-[#6C8C7A] hover:bg-[#6C8C7A] hover:text-white">
            Request invite
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero relative overflow-hidden min-h-[600px] md:min-h-[700px]">
        {/* Full-width background image */}
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/xtZG5LRv/family.png"
            alt="Adult daughter sitting with her aging parent on a sofa, looking at a phone"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F1E8]/95 via-[#F7F1E8]/60 to-transparent"></div>
        </div>

        {/* Text content - overlaying on top */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 h-full min-h-[600px] md:min-h-[700px] flex items-center">
          <div className="hero-text max-w-[500px] py-20 md:py-24">
            <p className="text-[#6C8C7A] uppercase text-[11px] tracking-wider mb-4 font-medium">
              Early access • Aging-in-place sensor kit
            </p>
            <h1 className="text-[40px] md:text-[48px] font-medium mb-6 text-[#2B2520] leading-[1.1] tracking-tight">
              Everything you need to care from afar.
            </h1>
            <p className="text-[17px] md:text-[18px] text-[#6E6259] mb-8 max-w-[440px] leading-[1.5]">
              Gramma uses  in-home sensors to show you when your parents' daily routine looks typical and when something changes. Sees movement, never faces or rooms. No intrusive tech.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button className="bg-[#D2684A] hover:bg-[#C0563B] text-white px-8 py-6 text-[16px] font-medium rounded-full shadow-md hover:shadow-lg transition-shadow">
                Join the waitlist
              </Button>
              <a href="#learn-more" className="text-[#6C8C7A] underline-offset-4 hover:underline font-medium">
                How it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Kit Section */}
      <section className="py-16 md:py-20 bg-[#F7F1E8]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          {/* Single unified two-column layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left column: All text content + How it works */}
            <div className="max-w-[520px]">
              <p className="text-[#6C8C7A] uppercase text-[11px] tracking-widest mb-4 font-medium">
                The Gramma Kit
              </p>
              <h2 className="text-[28px] md:text-[30px] font-medium mb-5 text-[#2B2520] leading-tight tracking-tight">
                Everything in one bundle.
              </h2>
              <p className="text-[17px] text-[#6E6259] leading-relaxed mb-6">
                Wall sensors, an under-bed sensor, and a medication hub that work quietly in the background.
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 text-sm text-[#6E6259] mb-10">
                <li>• Understands movement, never records faces</li>
                <li>• Installs in under an hour</li>
                <li>• Designed for one typical home</li>
              </ul>

              {/* How it works - integrated in left column */}
              <div className="mt-8">
                <h3 className="text-[20px] font-medium mb-6 text-[#2B2520]">
                  How it works
                </h3>

                <div className="flex flex-wrap gap-6">
                  {/* Step 1 */}
                  <div className="flex-1 min-w-[140px]">
                    <div className="w-10 h-10 mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#6C8C7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h4 className="text-[15px] font-medium mb-1 text-[#2B2520]">
                      Sensors watch quietly
                    </h4>
                    <p className="text-[13px] text-[#6E6259]">
                      Movement • Sleep • Meds
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex-1 min-w-[140px]">
                    <div className="w-10 h-10 mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#6C8C7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-[15px] font-medium mb-1 text-[#2B2520]">
                      Learns their routine
                    </h4>
                    <p className="text-[13px] text-[#6E6259]">
                      What's normal day-to-day
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex-1 min-w-[140px]">
                    <div className="w-10 h-10 mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#6C8C7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <h4 className="text-[15px] font-medium mb-1 text-[#2B2520]">
                      Clear updates
                    </h4>
                    <p className="text-[13px] text-[#6E6259]">
                      Daily check-ins, gentle alerts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Bundle image card only */}
            <div className="md:pl-4 flex items-center justify-center">
              <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(43,37,32,0.08)] p-4 md:p-6 w-full">
                <img
                  src="https://i.ibb.co/FjzDBTj/Generated-Image-November-15-2025-10-56-PM.png"
                  alt="Gramma kit showing wall sensors, under-bed sleep sensor, and medication hub"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Stories Section */}
      <section id="stories" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <h3 className="text-center text-[28px] md:text-[30px] font-medium mb-12 text-[#2B2520] tracking-tight">
            Know when they’re okay—and when they might need you.
          </h3>

          {/* Tabs bar */}
          <div className="border-b border-[#E1D5C8] mb-10">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-8 md:gap-y-5 pb-1">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`pb-4 px-2 text-[13px] font-medium transition-colors relative text-center max-w-[140px] md:max-w-[160px] leading-snug ${
                    activeTab === idx
                      ? "text-[#2B2520]"
                      : "text-[#A79B8F] hover:text-[#6E6259]"
                  }`}
                >
                  {tab.label}
                  {activeTab === idx && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D2684A]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
            {/* Left: App card */}
            <div className="order-1 flex justify-center md:justify-end">
              {tabs[activeTab].cardImage ? (
                <div className="bg-white rounded-[16px] shadow-[0_8px_32px_rgba(43,37,32,0.12)] p-5 border border-[#E1D5C8] max-w-[420px] w-full">
                  <img
                    src={tabs[activeTab].cardImage}
                    alt={tabs[activeTab].label}
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="bg-white rounded-[16px] shadow-[0_8px_32px_rgba(43,37,32,0.1)] p-6 border border-[#E1D5C8] max-w-[380px] w-full">
                  <div className="space-y-3">
                    <div className="h-4 bg-[#E8DDD0] rounded w-3/4"></div>
                    <div className="h-4 bg-[#E8DDD0] rounded w-full"></div>
                    <div className="h-4 bg-[#E8DDD0] rounded w-5/6"></div>
                    <div className="h-24 bg-gradient-to-br from-[#F7F1E8] to-[#E8DDD0] rounded-lg mt-4"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Text content */}
            <div className="order-2">
              <h4 className="text-[26px] md:text-[28px] font-medium mb-4 text-[#2B2520] leading-tight tracking-tight">
                {tabs[activeTab].heading}
              </h4>
              <p className="text-[17px] text-[#6E6259] leading-relaxed">
                {tabs[activeTab].body}
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-center text-[28px] md:text-[30px] font-medium mb-12 text-[#2B2520] tracking-tight">FAQs</h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Does Gramma require a subscription?
              </AccordionTrigger>
              <AccordionContent>
                Gramma includes a basic service plan with your kit purchase. This covers daily activity summaries and gentle alerts. Optional premium features (like extended family sharing and detailed trend analysis) are available with our Care Plus plan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Is Gramma really privacy-safe?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Gramma uses no cameras and no microphones—only motion and environmental sensors. Data is encrypted end-to-end, and we never sell or share your family's information. Your parents' dignity and privacy are our top priority.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How hard is it to install?
              </AccordionTrigger>
              <AccordionContent>
                Most families complete installation in under an hour. Sensors use simple adhesive mounts or plug into outlets—no drilling, wiring, or technical expertise required. Our setup guide walks you through each step.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Can I check on my parent from anywhere?
              </AccordionTrigger>
              <AccordionContent>
                Yes! The Gramma app works on iOS and Android, so you can see daily check-ins and receive alerts wherever you are. Family members can be added with customizable notification settings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What if my parent doesn't want to be monitored?
              </AccordionTrigger>
              <AccordionContent>
                We designed Gramma to be respectful and unobtrusive. Many families find it's easier to accept than cameras because it tracks routine, not specific activities. We recommend discussing it together and emphasizing that it helps them stay independent longer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                What happens if Gramma detects something unusual?
              </AccordionTrigger>
              <AccordionContent>
                You'll receive a gentle alert explaining what changed (e.g., "No movement detected in the bedroom this morning"). You can then check in with your parent directly—Gramma doesn't call emergency services automatically, giving you full control over next steps.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B2520] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <h5 className="font-semibold mb-4 flex items-center justify-between">
                FOLLOW US
              </h5>
              <div className="flex gap-3">
                <a href="#" className="hover:opacity-70">f</a>
                <a href="#" className="hover:opacity-70">@</a>
                <a href="#" className="hover:opacity-70">in</a>
                <a href="#" className="hover:opacity-70">P</a>
                <a href="#" className="hover:opacity-70">▶</a>
                <a href="#" className="hover:opacity-70">♪</a>
                <a href="#" className="hover:opacity-70">in</a>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">ABOUT</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Gramma</a></li>
                <li><a href="#" className="hover:underline">Our Story</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Privacy + Security</a></li>
                <li><a href="#" className="hover:underline">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">SUPPORT</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Payment Options</a></li>
                <li><a href="#" className="hover:underline">Shipping + Returns</a></li>
                <li><a href="#" className="hover:underline">Product FAQs</a></li>
                <li><a href="#" className="hover:underline">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">RESOURCES</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Caregiver Guide</a></li>
                <li><a href="#" className="hover:underline">Partner With Us</a></li>
                <li><a href="#" className="hover:underline">Referral Program</a></li>
                <li><a href="#" className="hover:underline">Research</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">GET THE APP</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Gramma App (iOS)</a></li>
                <li><a href="#" className="hover:underline">Gramma App (Android)</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-wrap justify-between items-center text-sm text-gray-400">
              <div className="flex gap-6">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms + Conditions</a>
                <a href="#" className="hover:underline">Accessibility Statement</a>
                <a href="#" className="hover:underline">Sitemap</a>
                <a href="#" className="hover:underline">Cookies</a>
                <a href="#" className="hover:underline">Your Privacy Choices</a>
              </div>
              <p>© 2025 Gramma</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
