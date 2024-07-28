import AboutSection from '@/components/partials/AboutSection';
import BlogSection from '@/components/partials/BlogSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import HeroSection from '@/components/partials/HeroSection';
import ServiceSection from '@/components/partials/ServiceSection';
import AppLayout from '@/layouts/AppLayout';
import { api } from '@/lib/api';
import type { GetServerSideProps, NextPage } from 'next';

// type Props = {
//   experiences: ;
// }

const Home: NextPage = () => {
  return (
    <AppLayout title="Home">
      <HeroSection />
      <section className="container pt-20 pb-10" id="about">
        <AboutSection />
      </section>
      <section className="container py-16" id="experience">
        <ExperienceSection />
      </section>
      <section className="container py-16" id="projects">
        <BlogSection />
      </section>
      <section className="container py-16" id="leadership">
        <ServiceSection />
      </section>
    </AppLayout>
  );
};

export default Home;
