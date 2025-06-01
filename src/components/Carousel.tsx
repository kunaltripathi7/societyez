import { useState, useEffect } from "react";
import onboarding from "../assets/onboarding.svg"
import apartment from "../assets/apartment.svg"
import subscription from "../assets/subscription.svg";
import dashboard from "../assets/dashboard.svg";


// Carousel data for all onboarding screens
const carouselData = [
  {
    image: onboarding,
    title: "Effortlessly Manage and Streamline Your Society Operations",
    description:
      "Everything you need to manage your societies in one place. Join us today!",
  },
  {
    image: subscription,
    title: "Flexible Subscription Plans for Every Need",
    description:
      "Choose the perfect subscription plan tailored to your society's requirements.",
  },
  {
    image: dashboard,
    title: "Comprehensive Dashboard for Complete Visibility",
    description:
      "Get a bird's eye view of all activities happening in your society.",
  },
  {
    image: apartment,
    title: "Streamlined Apartment Management System",
    description:
      "Simplify apartment management, maintenance requests, and resident communications.",
  },
];

const LeftPanelCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex w-1/2 bg-slate-100 flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Carousel */}
      <div className="px-8 relative w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="mb-10">
                <img
                  src={slide.image}
                  alt={`Illustration ${index + 1}`}
                  className="mx-auto"
                  style={{ maxWidth: "400px" }}
                />
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold text-slate-800">
                  {slide.title}
                </h1>
                <p className="text-slate-600">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-8 flex space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-primary w-6" : "bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftPanelCarousel;
