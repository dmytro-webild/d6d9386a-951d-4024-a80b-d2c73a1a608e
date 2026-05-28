"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="grid"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Library",          id: "#products"},
        {
          name: "Philosophy",          id: "#about"},
        {
          name: "Community",          id: "#testimonials"},
        {
          name: "Connect",          id: "#contact"},
      ]}
      brandName="Ribooks"
      button={{
        text: "Start Journey",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "rotated-rays-animated"}}
      title="Elevate Your Mind Through Premium Stories"
      description="Discover curated eBooks from world-class authors. Transform your thinking in weeks, not years."
      buttons={[
        {
          text: "Explore Ribooks Now",          href: "#products"},
        {
          text: "Start Your Journey",          href: "#contact"},
      ]}
      imageSrc="https://images.unsplash.com/photo-1524995997946-a1c2e315a724?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      imageAlt="Stack of premium eBooks and digital learning materials"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="A Sanctuary for the Ambitious"
      description={[
        "Ribooks is a curated destination for high-end digital learning. We believe that clarity is the ultimate luxury.",        "Our library is hand-picked to deliver high-impact insights without the noise of mass-produced content."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Curated Quality",          description: "Only the top 1% of content reaches our library.",          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-low-poly-plexus-design-background_1048-12191.jpg"},
        {
          title: "Cinematic Aesthetics",          description: "Designed for focus, distraction-free reading.",          imageSrc: "http://img.b2bpic.net/free-vector/20-web-design-solid-glyph-icon-presentation-vector-icons-illustration_1142-18502.jpg"},
        {
          title: "Accelerated Insights",          description: "Designed for executive time management.",          imageSrc: "http://img.b2bpic.net/free-photo/optical-fiber-straws-black-screen_23-2148241254.jpg"},
      ]}
      title="The Ribooks Standard"
      description="Every title undergoes our rigorous quality assessment to ensure you are receiving the best knowledge available."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Mastering Time",          price: "$49",          imageSrc: "http://img.b2bpic.net/free-photo/woman-religious-pilgrimage-church_23-2150582321.jpg"},
        {
          id: "p2",          name: "The Tech Mindset",          price: "$59",          imageSrc: "http://img.b2bpic.net/free-photo/photo-wall-texture-pattern_58702-14552.jpg"},
        {
          id: "p3",          name: "Finance Frontiers",          price: "$79",          imageSrc: "http://img.b2bpic.net/free-photo/open-bible-black-background-religion-concept-bible-pages-closeup_169016-62854.jpg"},
        {
          id: "p4",          name: "Quiet Growth",          price: "$39",          imageSrc: "http://img.b2bpic.net/free-photo/watering-tree-world_1379-546.jpg"},
        {
          id: "p5",          name: "Strategic Minds",          price: "$69",          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-happy-new-year-2022-text-typography-design-illustration_460848-6403.jpg"},
        {
          id: "p6",          name: "Digital Soul",          price: "$49",          imageSrc: "http://img.b2bpic.net/free-photo/whimsical-wild-animal-illustration_23-2151885385.jpg"},
      ]}
      title="Premium Collection"
      description="Unlock your next breakthrough with our curated catalog."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "10K+",          description: "Successful Learners"},
        {
          id: "m2",          value: "500+",          description: "Curated Titles"},
        {
          id: "m3",          value: "98%",          description: "Completion Rate"},
      ]}
      title="Impact by Numbers"
      description="Quantifying the journey of transformation."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Alex Rivet",          handle: "@rivet",          testimonial: "A masterclass in digital design. My reading habits have never been this efficient.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-posing-with-flowers_23-2149486770.jpg"},
        {
          id: "2",          name: "Jordan P.",          handle: "@jpdev",          testimonial: "Finally, a platform that respects my intelligence and aesthetic standards.",          imageSrc: "http://img.b2bpic.net/free-photo/teenager-light-movie-projector_23-2149489837.jpg"},
        {
          id: "3",          name: "Elena V.",          handle: "@elenav",          testimonial: "Ribooks isn't just about reading; it's an elevated lifestyle choice.",          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-african-girl-smiling-dark-wall_176420-5816.jpg"},
        {
          id: "4",          name: "Mark S.",          handle: "@msmith",          testimonial: "The curation is simply unmatched. I've gained more here than in years.",          imageSrc: "http://img.b2bpic.net/free-photo/teenager-light-movie-projector_23-2149489836.jpg"},
        {
          id: "5",          name: "Chloe T.",          handle: "@chloet",          testimonial: "Sophisticated, clean, and highly effective. Highly recommended.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-brutal-bearded-macho-male-dressed-suit-dark-grey-background_613910-1536.jpg"},
      ]}
      title="Voices of the Elite"
      description="What our readers have to say about the Ribooks experience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Join the Elite"
      description="Connect with our curators to discuss your learning path."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name"},
        {
          name: "email",          type: "email",          placeholder: "Your Email"},
      ]}
      textarea={{
        name: "message",        placeholder: "How can we help your journey?"}}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-device-table_23-2150994366.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Ribooks"
      copyrightText="© 2025 | Ribooks Premium"
      socialLinks={[
        {
          icon: Twitter,
          href: "https://twitter.com",          ariaLabel: "Twitter"},
        {
          icon: Instagram,
          href: "https://instagram.com",          ariaLabel: "Instagram"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
