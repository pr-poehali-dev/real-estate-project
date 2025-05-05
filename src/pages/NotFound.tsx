import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <div className="bg-emerald-700 text-white inline-block px-3 py-1 rounded-md font-medium mb-2">ЭКО-ПОСТРОЙКИ</div>
        <h1 className="text-6xl font-bold mb-4 text-amber-700">404</h1>
        <p className="text-xl text-gray-600 mb-6">Упс! Страница не найдена</p>
        <p className="text-gray-500 mb-8">Запрашиваемая страница не существует или была перемещена.</p>
        <Button className="bg-emerald-700 hover:bg-emerald-800" asChild>
          <a href="/">
            <Home className="mr-2 h-4 w-4" />
            Вернуться на главную
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;