import type {
  HeroStat,
  InstagramItem,
  NavItem,
  SeoMeta,
  Service,
  ShowcaseItem,
  Testimonial,
} from "@/types/site";

export const siteConfig = {
  name: "Dory Sport",
  legalName: "Dory Sport",
  location: "Puerto Montt, Chile",
  description:
    "Confeccion, bordados y prendas personalizadas para personas, pymes y empresas en Puerto Montt.",
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || "56900000000",
  instagramUrl:
    import.meta.env.PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/tienda.dory_sport/",
  siteUrl:
    import.meta.env.PUBLIC_SITE_URL || "https://dory-sport.netlify.app",
  email: "contacto@dorysport.cl",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/empresas", label: "Empresas" },
  { href: "/catalogo", label: "Catalogo" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const heroStats: HeroStat[] = [
  { value: "+30 anos", label: "experiencia en confecciones y costura" },
  { value: "B2C + B2B", label: "atencion a personas, pymes y empresas" },
  { value: "Pedidos por volumen", label: "prendas corporativas y bordado profesional" },
];

export const services: Service[] = [
  {
    title: "Bordados personalizados",
    description:
      "Bordado profesional de logos, nombres y piezas textiles para marcas, equipos y pedidos particulares.",
    bullets: ["Logos corporativos", "Nombres y series", "Terminacion prolija"],
  },
  {
    title: "Confeccion a medida",
    description:
      "Prendas hechas con enfoque artesanal y terminacion cuidada, ajustadas al uso real del cliente.",
    bullets: ["Modelos personalizados", "Tallas y ajustes", "Trabajo por encargo"],
  },
  {
    title: "Ropa deportiva",
    description:
      "Conjuntos, calzas, polerones, joggers y buzos con una direccion visual mas limpia y funcional.",
    bullets: ["Conjuntos deportivos", "Buzos y joggers", "Series para academias"],
  },
  {
    title: "Pedidos para empresas",
    description:
      "Produccion para pymes y empresas que necesitan imagen de marca aplicada a pecheras, gorros y uniformes.",
    bullets: ["Pecheras corporativas", "Gorros bordados", "Cotizaciones por volumen"],
  },
];

export const showcaseItems: ShowcaseItem[] = [
  {
    title: "Conjuntos deportivos",
    category: "Confeccion deportiva",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    alt: "Conjunto deportivo femenino en estudio",
    description: "Lineas deportivas con una presentacion limpia, funcional y personalizada.",
  },
  {
    title: "Pecheras y textiles de marca",
    category: "Pedidos corporativos",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Prendas corporativas con enfoque de marca",
    description: "Produccion orientada a negocios que necesitan uniformidad visual y terminacion profesional.",
  },
  {
    title: "Bordado fino de logos",
    category: "Bordado profesional",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    alt: "Detalle de bordado en tela",
    description: "Aplicacion textil de marca con protagonismo en detalle, textura y precision.",
  },
  {
    title: "Polerones y prendas personalizadas",
    category: "Catalogo personalizado",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80",
    alt: "Polerones en tonos neutros",
    description: "Prendas pensadas tanto para uso diario como para proyectos institucionales.",
  },
];

export const corporateBenefits = [
  "Cotizaciones para pedidos por volumen",
  "Bordado de logos con terminacion profesional",
  "Produccion de pecheras, gorros, polerones y uniformes",
  "Acompaniamiento cercano desde la idea hasta la entrega",
];

export const processSteps = [
  {
    title: "Brief y necesidad",
    description:
      "Definimos prenda, volumen, uso, identidad visual y plazo esperado para la entrega.",
  },
  {
    title: "Cotizacion y muestra",
    description:
      "Se evalua el bordado, materiales y complejidad para emitir una propuesta clara.",
  },
  {
    title: "Produccion",
    description:
      "Confeccion y bordado con control visual de terminaciones y consistencia de serie.",
  },
  {
    title: "Entrega",
    description:
      "Se entrega un trabajo pensado para representar bien a la marca o al cliente final.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Necesitabamos un pedido grande de prendas bordadas y el resultado se vio serio, limpio y bien resuelto.",
    author: "Cliente pyme",
    role: "Pedido corporativo",
  },
  {
    quote:
      "Lo mejor fue la cercania y la capacidad de aterrizar una idea personalizada sin perder calidad.",
    author: "Cliente particular",
    role: "Confeccion a medida",
  },
  {
    quote:
      "Se nota experiencia real en costura. Las terminaciones hablan por si solas.",
    author: "Cliente recurrente",
    role: "Bordado y ropa deportiva",
  },
];

export const instagramItems: InstagramItem[] = [
  {
    href: "https://www.instagram.com/tienda.dory_sport/",
    image:
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=900&q=80",
    alt: "Textiles y prendas para inspiracion visual",
    caption: "Detalles de confeccion y acabados",
  },
  {
    href: "https://www.instagram.com/tienda.dory_sport/",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    alt: "Bordado y trabajo de marca",
    caption: "Ropa personalizada y bordados de marca",
  },
  {
    href: "https://www.instagram.com/tienda.dory_sport/",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    alt: "Conjuntos deportivos en escena editorial",
    caption: "Conjuntos deportivos y prendas a medida",
  },
  {
    href: "https://www.instagram.com/tienda.dory_sport/",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    alt: "Prendas dobladas y presentadas visualmente",
    caption: "Catalogo visual con foco en color y textura",
  },
  {
    href: "https://www.instagram.com/tienda.dory_sport/",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    alt: "Moda casual y deportiva",
    caption: "Inspiracion de ropa hecha con caracter",
  },
  {
    href: "https://www.instagram.com/tienda.dory_sport/",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=80",
    alt: "Presentacion de prendas y textiles",
    caption: "Visita nuestras redes para ver mas trabajos",
  },
];

export const seoByPage: Record<string, SeoMeta> = {
  home: {
    title: "Dory Sport | Bordados y confecciones en Puerto Montt",
    description:
      "Confeccion a medida, ropa deportiva y bordados personalizados para personas, pymes y empresas en Puerto Montt.",
    path: "/",
  },
  services: {
    title: "Servicios | Dory Sport",
    description:
      "Bordados personalizados, confeccion a medida, ropa deportiva y pedidos corporativos en Puerto Montt.",
    path: "/servicios",
  },
  business: {
    title: "Empresas | Dory Sport",
    description:
      "Pedidos por volumen, pecheras, gorros, polerones y bordado de logos para pymes y empresas.",
    path: "/empresas",
  },
  catalog: {
    title: "Catalogo | Dory Sport",
    description:
      "Explora prendas, bordados y trabajos visuales de Dory Sport con foco en calidad y personalizacion.",
    path: "/catalogo",
  },
  about: {
    title: "Nosotros | Dory Sport",
    description:
      "Mas de 30 anos de experiencia en costura, bordados y confeccion personalizada en Puerto Montt.",
    path: "/nosotros",
  },
  contact: {
    title: "Contacto | Dory Sport",
    description:
      "Cotiza bordados, confeccion y pedidos corporativos con Dory Sport en Puerto Montt.",
    path: "/contacto",
  },
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hola Dory Sport, quiero cotizar un trabajo personalizado."
)}`;
