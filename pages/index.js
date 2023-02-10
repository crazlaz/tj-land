import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='BrainStorm Learning Socially' />
      <div className="bg-black-600">
      <Layout >
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
      </div>
    </>
  );
}
