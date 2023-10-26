import HomePage from "@/pages";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

export const layoutRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
];
