import type {
  HeroStat,
  InstagramItem,
  InstagramProfile,
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
    "Confección, bordados y prendas personalizadas para personas, pymes y empresas en Puerto Montt.",
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || "56984062107",
  whatsappDisplay: "+56 9 8406 2107",
  instagramUrl:
    import.meta.env.PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/tienda.dory_sport/",
  siteUrl:
    import.meta.env.PUBLIC_SITE_URL || "https://dory-sport.netlify.app",
  socialImage: "/og-dory-sport.svg",
  logo: "/apple-touch-icon.svg",
};

export const navItems: NavItem[] = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#empresas", label: "Empresas" },
  { href: "/#trabajos", label: "Trabajos" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export const heroStats: HeroStat[] = [
  { value: "+30 años", label: "de experiencia en confección y costura" },
  { value: "B2C + B2B", label: "atención a personas, pymes y empresas" },
  { value: "Pedidos por volumen", label: "para marcas, equipos y negocios" },
];

export const services: Service[] = [
  {
    title: "Bordados personalizados",
    description:
      "Aplicación prolija de logos, nombres y piezas textiles para marcas, equipos y pedidos particulares.",
    bullets: ["Logos corporativos", "Nombres y series", "Terminación prolija"],
  },
  {
    title: "Confección a medida",
    description:
      "Prendas hechas con enfoque artesanal, buena caída y terminación cuidada para uso real.",
    bullets: ["Modelos personalizados", "Tallas y ajustes", "Trabajo por encargo"],
  },
  {
    title: "Ropa deportiva",
    description:
      "Conjuntos, calzas, polerones, joggers y buzos con una presentación limpia y funcional.",
    bullets: ["Conjuntos deportivos", "Buzos y joggers", "Series para academias"],
  },
  {
    title: "Pedidos para empresas",
    description:
      "Desarrollo de pecheras, gorros, polerones y prendas corporativas para pymes y empresas.",
    bullets: ["Pecheras corporativas", "Gorros bordados", "Cotizaciones por volumen"],
  },
];

export const showcaseItems: ShowcaseItem[] = [
  {
    title: "Pecheras y textiles de marca",
    category: "Pedidos corporativos",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80",
    alt: "Prendas textiles colgadas en una selección de producción comercial",
    description:
      "Una imagen editorial para representar pedidos por volumen, uniformidad visual y trabajo para marcas.",
  },
  {
    title: "Bordado fino de logos",
    category: "Bordado profesional",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    alt: "Detalle editorial de una prenda doblada con presentación cuidada",
    description:
      "Ayuda a comunicar precisión, terminación y cuidado por la identidad visual aplicada al textil.",
  },
  {
    title: "Confección para series pequeñas",
    category: "Trabajo a medida",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    alt: "Selección editorial de prendas textiles en exhibición",
    description:
      "Refuerza la idea de prendas personalizadas, cápsulas textiles y producción cercana.",
  },
  {
    title: "Ropa deportiva personalizada",
    category: "Visual de producto",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    alt: "Prendas deportivas dobladas sobre una superficie neutra",
    description:
      "Apoya visualmente la línea deportiva sin confundir esta sección con el Instagram real.",
  },
];

export const corporateBenefits = [
  "Cotizaciones para pedidos por volumen",
  "Bordado de logos con terminación profesional",
  "Producción de pecheras, gorros, polerones y uniformes",
  "Acompañamiento cercano desde la idea hasta la entrega",
];

export const processSteps = [
  {
    title: "Brief y necesidad",
    description:
      "Definimos prenda, cantidad, uso, identidad visual y plazo esperado para la entrega.",
  },
  {
    title: "Cotización",
    description:
      "Se evalúa bordado, materiales y complejidad para entregar una propuesta clara.",
  },
  {
    title: "Producción",
    description:
      "Confección y bordado con atención a terminaciones y consistencia en cada serie.",
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
      "Necesitábamos un pedido grande de prendas bordadas y el resultado se vio serio, limpio y bien resuelto.",
    author: "Cliente pyme",
    role: "Pedido corporativo",
  },
  {
    quote:
      "Lo mejor fue la cercanía y la capacidad de aterrizar una idea personalizada sin perder calidad.",
    author: "Cliente particular",
    role: "Confección a medida",
  },
  {
    quote:
      "Se nota experiencia real en costura. Las terminaciones hablan por sí solas.",
    author: "Cliente recurrente",
    role: "Bordado y ropa deportiva",
  },
];

export const instagramItems: InstagramItem[] = [
  {
    href: "https://www.instagram.com/p/CfaI_5dJalg/",
    image: "/images/instagram/post-1.jpg",
    alt: "Calzas y petos publicados por Dory Sport en Instagram",
    caption: "Calzas y petos en distintos diseños y colores.",
  },
  {
    href: "https://www.instagram.com/p/C43w1l6ue7k/",
    image: "/images/instagram/post-2.jpg",
    alt: "Publicación real de ropa personalizada de Dory Sport",
    caption: "Trabajo textil real publicado por la cuenta.",
  },
  {
    href: "https://www.instagram.com/reel/C-mA3Xjuzet/",
    image: "/images/instagram/post-3.jpg",
    alt: "Reel real de Dory Sport publicado en Instagram",
    caption: "Contenido reciente de la cuenta.",
  },
  {
    href: "https://www.instagram.com/p/C9yeNaQOOdt/",
    image: "/images/instagram/post-4.jpg",
    alt: "Publicación real de prenda deportiva de Dory Sport",
    caption: "Prenda deportiva publicada por la marca.",
  },
  {
    href: "https://www.instagram.com/reel/C9v8LuMugps/",
    image: "/images/instagram/post-5.jpg",
    alt: "Reel real de productos publicados por Dory Sport",
    caption: "Otra vista real del trabajo publicado en Instagram.",
  },
  {
    href: "https://www.instagram.com/p/C0PcZV3RJXQ/",
    image: "/images/instagram/post-6.jpg",
    alt: "Publicación real de Dory Sport con producto textil",
    caption: "Más productos reales disponibles en el perfil.",
  },
];

export const instagramProfile: InstagramProfile = {
  username: "tienda.dory_sport",
  displayName: "tienda dory sport",
  location: "Puerto Montt",
  postsCount: "137",
  followers: "1028",
  following: "957",
  avatar: "/images/instagram/avatar.jpg",
  bio: [
    "Ropa de calidad, hecha en casa.",
    "Polerones, joggers, calzas, ropa de bebé, pijamas y guateros de semillas.",
    "Ropa deportiva y mucho más.",
  ],
  highlights: [
    { label: "Destacada", image: "/images/instagram/post-1.jpg" },
    { label: "Bordados", image: "/images/instagram/post-2.jpg" },
    { label: "Pecheras", image: "/images/instagram/post-3.jpg" },
    { label: "Polerones", image: "/images/instagram/post-4.jpg" },
    { label: "Deportivo", image: "/images/instagram/post-5.jpg" },
  ],
};

export const seoByPage: Record<string, SeoMeta> = {
  home: {
    title: "Dory Sport | Bordados y confecciones en Puerto Montt",
    description:
      "Confección a medida, ropa deportiva y bordados personalizados para personas, pymes y empresas en Puerto Montt.",
    path: "/",
  },
  services: {
    title: "Servicios | Dory Sport",
    description:
      "Bordados personalizados, confección a medida, ropa deportiva y pedidos corporativos en Puerto Montt.",
    path: "/servicios",
  },
  business: {
    title: "Empresas | Dory Sport",
    description:
      "Pedidos por volumen, pecheras, gorros, polerones y bordado de logos para pymes y empresas.",
    path: "/empresas",
  },
  catalog: {
    title: "Trabajos | Dory Sport",
    description:
      "Explora prendas, bordados y referencias visuales de Dory Sport con foco en calidad y personalización.",
    path: "/catalogo",
  },
  about: {
    title: "Nosotros | Dory Sport",
    description:
      "Más de 30 años de experiencia en costura, bordados y confección personalizada en Puerto Montt.",
    path: "/nosotros",
  },
  contact: {
    title: "Contacto | Dory Sport",
    description:
      "Cotiza bordados, confección y pedidos corporativos con Dory Sport en Puerto Montt por WhatsApp.",
    path: "/contacto",
  },
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hola Dory Sport, quiero cotizar un trabajo personalizado."
)}`;
