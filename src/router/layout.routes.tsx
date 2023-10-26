import HomePage from "@/pages";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import PrivacyPolicyPage from "@/pages/privacy-policy";

export const layoutRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
];
