import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface CableProduct {
  id: number;
  name: string;
  type: string;
  voltage: string;
  crossSection: string;
  description: string;
  price: string;
}

const cableProducts: CableProduct[] = [
  {
    id: 1,
    name: 'ВВГнг(А)-LS',
    type: 'Силовой',
    voltage: '0.66 кВ',
    crossSection: '3x2.5',
    description: 'Кабель силовой с медными жилами, с изоляцией и оболочкой из ПВХ пластиката пониженной пожарной опасности',
    price: 'По запросу'
  },
  {
    id: 2,
    name: 'АВБбШв',
    type: 'Силовой',
    voltage: '6-10 кВ',
    crossSection: '3x50',
    description: 'Силовой кабель с алюминиевыми жилами, бронированный стальной лентой для прокладки в земле',
    price: 'По запросу'
  },
  {
    id: 3,
    name: 'КГ',
    type: 'Гибкий',
    voltage: '0.66 кВ',
    crossSection: '4x10',
    description: 'Кабель гибкий для присоединения передвижных механизмов',
    price: 'По запросу'
  },
  {
    id: 4,
    name: 'ПвС',
    type: 'Соединительный',
    voltage: '0.38 кВ',
    crossSection: '2x1.5',
    description: 'Провод соединительный с медными жилами, виниловой изоляцией',
    price: 'По запросу'
  },
  {
    id: 5,
    name: 'СИП-4',
    type: 'Самонесущий',
    voltage: '0.66 кВ',
    crossSection: '4x25',
    description: 'Самонесущий изолированный провод для воздушных линий электропередачи',
    price: 'По запросу'
  },
  {
    id: 6,
    name: 'КВВГ',
    type: 'Контрольный',
    voltage: '0.66 кВ',
    crossSection: '10x1.5',
    description: 'Кабель контрольный с медными жилами для стационарной прокладки',
    price: 'По запросу'
  }
];

export default function Index() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedVoltage, setSelectedVoltage] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('home');

  const filteredProducts = cableProducts.filter(product => {
    const matchesType = selectedType === 'all' || product.type === selectedType;
    const matchesVoltage = selectedVoltage === 'all' || product.voltage === selectedVoltage;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesVoltage && matchesSearch;
  });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="h-8 w-8 text-secondary" />
            <span className="text-2xl font-bold text-primary">КабельПром</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('catalog')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Каталог
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              О компании
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Контакты
            </button>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Связаться
          </Button>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.85), rgba(26, 54, 93, 0.85)), url('https://cdn.poehali.dev/projects/5d42175c-2efb-4d5e-b68f-b292a347a407/files/ad661525-349a-4ca9-9bb4-c08b80af3594.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Профессиональные кабельные решения для промышленности
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Полный ассортимент кабельной продукции. Гарантия качества. Быстрая доставка по России.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90" onClick={() => scrollToSection('catalog')}>
                Перейти в каталог
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white/20">
                Получить прайс
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <Icon name="Award" className="h-12 w-12 mx-auto text-secondary mb-4" />
                <CardTitle>15+ лет на рынке</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Проверенный поставщик кабельной продукции</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <Icon name="Package" className="h-12 w-12 mx-auto text-secondary mb-4" />
                <CardTitle>5000+ позиций</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Широкий ассортимент кабельной продукции</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <Icon name="Truck" className="h-12 w-12 mx-auto text-secondary mb-4" />
                <CardTitle>Доставка 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Быстрая доставка по всей территории РФ</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <Icon name="ShieldCheck" className="h-12 w-12 mx-auto text-secondary mb-4" />
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Все сертификаты и документация в наличии</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог продукции</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Используйте фильтры для быстрого поиска нужной кабельной продукции
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md mb-8 border">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Поиск по названию</label>
                <Input
                  placeholder="Введите название..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Тип кабеля</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="Силовой">Силовой</SelectItem>
                    <SelectItem value="Гибкий">Гибкий</SelectItem>
                    <SelectItem value="Соединительный">Соединительный</SelectItem>
                    <SelectItem value="Самонесущий">Самонесущий</SelectItem>
                    <SelectItem value="Контрольный">Контрольный</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Напряжение</label>
                <Select value={selectedVoltage} onValueChange={setSelectedVoltage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите напряжение" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все напряжения</SelectItem>
                    <SelectItem value="0.38 кВ">0.38 кВ</SelectItem>
                    <SelectItem value="0.66 кВ">0.66 кВ</SelectItem>
                    <SelectItem value="6-10 кВ">6-10 кВ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <Badge variant="secondary" className="ml-2">{product.type}</Badge>
                  </div>
                  <CardDescription className="text-base">Сечение: {product.crossSection} мм²</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" className="h-5 w-5 text-secondary" />
                      <span className="font-medium">Напряжение: {product.voltage}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>
                </CardContent>
                <Separator className="my-4" />
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <Button className="bg-secondary hover:bg-secondary/90">
                    Запросить
                    <Icon name="Send" className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">По вашему запросу ничего не найдено</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании КабельПром</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Компания «КабельПром» — ведущий поставщик кабельно-проводниковой продукции на территории Российской Федерации. 
                С 2008 года мы обеспечиваем промышленные предприятия, строительные компании и электромонтажные организации 
                качественной кабельной продукцией от ведущих производителей.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наш ассортимент включает более 5000 наименований кабельной продукции: силовые кабели, контрольные кабели, 
                провода, специальные кабели для различных условий эксплуатации.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-background p-4 rounded-lg border">
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Постоянных клиентов</div>
                </div>
                <div className="bg-background p-4 rounded-lg border">
                  <div className="text-3xl font-bold text-secondary mb-2">10000+</div>
                  <div className="text-sm text-muted-foreground">Выполненных проектов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/5d42175c-2efb-4d5e-b68f-b292a347a407/files/e7288c10-0e7a-4337-8a51-cdb02eb9f823.jpg" 
                alt="Кабельная продукция"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Icon name="MapPin" className="h-8 w-8 text-secondary mb-4" />
                  <CardTitle>Адрес офиса</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Промышленная, д. 45, корп. 2<br />
                    Режим работы: Пн-Пт 9:00 - 18:00
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Icon name="Phone" className="h-8 w-8 text-secondary mb-4" />
                  <CardTitle>Телефоны</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Отдел продаж: +7 (495) 123-45-67<br />
                    Техподдержка: +7 (495) 123-45-68
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Icon name="Mail" className="h-8 w-8 text-secondary mb-4" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Общие вопросы: info@kabelprom.ru<br />
                    Коммерческий отдел: sales@kabelprom.ru
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Icon name="Clock" className="h-8 w-8 text-secondary mb-4" />
                  <CardTitle>Склад и отгрузка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    г. Москва, Складская ул., д. 12<br />
                    Отгрузка: Пн-Пт 8:00 - 20:00
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 border-none shadow-lg bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Остались вопросы?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Свяжитесь с нами удобным способом, и наши специалисты помогут подобрать оптимальное решение
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="lg">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    Позвонить
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Icon name="Mail" className="mr-2 h-5 w-5" />
                    Написать email
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                    Чат в Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="h-6 w-6" />
                <span className="text-xl font-bold">КабельПром</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Надежный поставщик кабельной продукции с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary-foreground">О нас</button></li>
                <li><a href="#" className="hover:text-primary-foreground">Сертификаты</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Партнеры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary-foreground">Каталог</button></li>
                <li><a href="#" className="hover:text-primary-foreground">Прайс-лист</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Спецпредложения</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@kabelprom.ru</li>
                <li>г. Москва, ул. Промышленная, 45</li>
              </ul>
            </div>
          </div>
          <Separator className="bg-primary-foreground/20 mb-8" />
          <div className="text-center text-sm text-primary-foreground/60">
            © 2024 КабельПром. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
