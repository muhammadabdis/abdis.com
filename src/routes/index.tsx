import { useRoutes, Outlet } from "react-router-dom";

import { Header, Footer } from "../components/layouts";
import { Landing, About } from "../pages";

function AppLayout() {
  return (
    <div className="h-screen max-w-[380px] flex flex-col mx-auto border-[#D1CECE]">
      <Header />

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default function AppRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return element;
}
