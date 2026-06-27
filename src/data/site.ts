import type {
  HeroStat,
  InstagramProfile,
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
    href: "https://www.instagram.com/p/CfaI_5dJalg/",
    image: "/images/instagram/post-1.jpg",
    alt: "Calzas y petos publicados por Dory Sport en Instagram",
    caption: "Calzas y petos en distintos disenos y colores.",
  },
  {
    href: "https://www.instagram.com/p/C43w1l6ue7k/",
    image: "/images/instagram/post-2.jpg",
    alt: "Publicacion real de ropa personalizada de Dory Sport",
    caption: "Publicacion real de ropa personalizada y trabajo textil.",
  },
  {
    href: "https://www.instagram.com/reel/C-mA3Xjuzet/",
    image: "/images/instagram/post-3.jpg",
    alt: "Reel real de Dory Sport publicado en Instagram",
    caption: "Contenido real reciente de la cuenta.",
  },
  {
    href: "https://www.instagram.com/p/C9yeNaQOOdt/",
    image: "/images/instagram/post-4.jpg",
    alt: "Publicacion real de prenda deportiva de Dory Sport",
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
    alt: "Publicacion real de Dory Sport con producto textil",
    caption: "Mas productos reales disponibles en el perfil.",
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
    "Polerones, joggers, calzas, ropa de bebe, pijamas y guateros de semillas.",
    "Ropa deportiva y mucho mas.",
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
