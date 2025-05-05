
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronDown, Home, Compass, Users, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Верхняя навигация */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-700 text-white px-3 py-1 rounded-md font-medium">ЭКО</div>
            <span className="text-amber-700 font-semibold">ПОСТРОЙКИ</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-700">
            <Link to="/" className="hover:text-amber-600 font-medium">Главная</Link>
            <Link to="/projects" className="hover:text-amber-600">Проекты</Link>
            <Link to="/services" className="hover:text-amber-600">Услуги</Link>
            <Link to="/team" className="hover:text-amber-600">Команда</Link>
            <Link to="/contacts" className="hover:text-amber-600">Контакты</Link>
          </nav>
          <Button className="bg-emerald-700 hover:bg-emerald-800">Связаться</Button>
        </div>
      </header>

      {/* Главный баннер с фоновым изображением */}
      <section className="relative h-screen bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://cdn.poehali.dev/files/30b783ef-9576-4eb6-8146-87e895e91679.jpg')",
          backgroundPosition: "center"
        }}>
        {/* Убрал затемнение фона (div с bg-black/30) */}
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="container mx-auto h-full flex flex-col justify-center px-4">
            <div className="max-w-2xl">
              <div className="bg-amber-600/90 text-white px-5 py-2 mb-4 inline-block rounded-full">
                Нестандартная недвижимость
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Создаем уникальные постройки в труднодоступных местах
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Мы проектируем и строим индивидуальные дома и объекты, 
                отражающие характер и потребности нестандартных заказчиков в 
                самых необычных локациях.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6">
                  Наши проекты
                </Button>
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <Button variant="ghost" className="text-white animate-bounce">
              <ChevronDown size={32} />
              <span className="sr-only">Прокрутите вниз</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Секция услуг со слайдером (упрощенная версия) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем полный цикл работ по созданию уникальных объектов недвижимости
              от проектирования до ввода в эксплуатацию.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-2 border-amber-100 hover:border-amber-300 transition-all">
                <div className="h-48 bg-emerald-100 flex items-center justify-center">
                  <div className="w-20 h-20 bg-emerald-700 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6">
              Все услуги
            </Button>
          </div>
        </div>
      </section>

      {/* Секция с проектами */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Наши лучшие проекты</h2>
              <p className="text-gray-600 max-w-2xl">
                Каждый проект уникален и создан с учетом индивидуальных особенностей заказчика
                и местности.
              </p>
            </div>
            <Button className="mt-4 md:mt-0 bg-emerald-700 hover:bg-emerald-800">
              Все проекты
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-all">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-white/80">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контактная секция */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
              <p className="mb-8 text-emerald-100">
                Мы создадим уникальное решение, которое отразит ваш характер и удовлетворит все потребности. 
                Свяжитесь с нами, чтобы обсудить детали.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3" size={20} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@эко-постройки.рф</span>
                </div>
              </div>
              <Button className="mt-8 bg-white text-emerald-800 hover:bg-amber-100">
                Все контакты
              </Button>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Остались вопросы?</h3>
              <p className="mb-6 text-emerald-100">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-amber-400 placeholder-white/70"
                />
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-amber-400 placeholder-white/70"
                />
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-amber-400 placeholder-white/70"
                ></textarea>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-emerald-700 text-white px-3 py-1 rounded-md font-medium">ЭКО</div>
                <span className="text-amber-500 font-semibold">ПОСТРОЙКИ</span>
              </div>
              <p className="text-gray-400">
                Создаем уникальные объекты в труднодоступных местах с учетом всех потребностей заказчика.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-amber-500">Главная</Link></li>
                <li><Link to="/projects" className="hover:text-amber-500">Проекты</Link></li>
                <li><Link to="/services" className="hover:text-amber-500">Услуги</Link></li>
                <li><Link to="/team" className="hover:text-amber-500">Команда</Link></li>
                <li><Link to="/contacts" className="hover:text-amber-500">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-emerald-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-emerald-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-emerald-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 ЭКО-ПОСТРОЙКИ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Временные данные для услуг
const services = [
  {
    title: "Проектирование",
    description: "Создаем индивидуальные проекты, учитывающие особенности местности и потребности заказчика.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  },
  {
    title: "Строительство",
    description: "Выполняем полный цикл строительных работ даже в самых труднодоступных локациях.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  },
  {
    title: "Коммуникации",
    description: "Обеспечиваем объекты всеми необходимыми коммуникациями вне зависимости от удаленности.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  }
];

// Временные данные для проектов
const projects = [
  {
    title: "Горный домик",
    location: "Алтай",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800"
  },
  {
    title: "Лесная станция",
    location: "Карелия",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800"
  },
  {
    title: "Экодом на побережье",
    location: "Байкал",
    image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?auto=format&fit=crop&w=800"
  }
];

export default Index;
