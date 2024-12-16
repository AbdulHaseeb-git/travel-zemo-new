import Booking from "./components/booking/Booking";
import Categories from "./components/categories/Categories";
import Destinations from "./components/destinations/Destinations";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Logos from "./components/logos/Logos";
import Subscription from "./components/subscription/Subscription";
import Testimonials from "./components/testimonials/Testimonials";


export default function Home() {
  return <main className="flex flex-col gap-5">
  {/* <Hero/> */}
  <Categories/>
  {/* <Destinations/> */}
  <Booking/>
  <Testimonials/>
  <Logos/>
  <Subscription/>
  {/* <Footer/> */}
  </main>
  ;
}
