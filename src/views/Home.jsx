import AppHero from "../components/home/Hero";
import AppAbout from "../components/home/About";
import AppFeatures from "../components/home/Features";
import AppWorks from "../components/home/Works";
import AppFaq from "../components/home/FAQ";
import AppPricing from "../components/home/Pricing";
import AppContact from "../components/home/Contact";

const AppHome = () => (
  <div className="main">
    <AppHero />
    <AppAbout />
    <AppFeatures />
    <AppWorks />
    <AppFaq />
    <AppPricing />
    <AppContact />
  </div>
);

export default AppHome;
