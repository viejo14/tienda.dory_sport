import type {
  HeroStat,
  InstagramItem,
  InstagramProfile,
  NavItem,
  SeoMeta,
  Service,
  ShowcaseItem,
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
  logo: "/images/brand/logo-dory.jpg",
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
  { value: "+30 años", label: "de oficio textil y costura" },
  { value: "A medida", label: "para personas y marcas" },
  { value: "Por volumen", label: "para pymes y empresas" },
];

export const services: Service[] = [
  {
    title: "Bordados personalizados",
    description:
      "Logos, nombres y aplicaciones textiles con terminación limpia para prendas personales y corporativas.",
    bullets: ["Logos corporativos", "Nombres y series", "Terminación prolija"],
  },
  {
    title: "Confección a medida",
    description:
      "Prendas desarrolladas desde la idea, considerando uso, calce, materiales y una terminación cuidada.",
    bullets: ["Modelos personalizados", "Tallas y ajustes", "Trabajo por encargo"],
  },
  {
    title: "Ropa deportiva",
    description:
      "Conjuntos, calzas, polerones, joggers y buzos pensados para moverse y verse bien.",
    bullets: ["Conjuntos deportivos", "Buzos y joggers", "Series para academias"],
  },
  {
    title: "Pedidos para empresas",
    description:
      "Pecheras, gorros, uniformes y prendas de marca para equipos, negocios e instituciones.",
    bullets: ["Pedidos por volumen", "Identidad de marca", "Atención directa"],
  },
];

export const showcaseItems: ShowcaseItem[] = [
  {
    title: "Textiles de marca",
    category: "Pedidos corporativos",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=85",
    alt: "Prendas textiles preparadas para una colección",
    description: "Uniformidad visual y producción cuidada para marcas y equipos.",
  },
  {
    title: "Detalle y terminación",
    category: "Bordado profesional",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=85",
    alt: "Detalle editorial de una prenda doblada",
    description: "Aplicaciones textiles pensadas para representar bien cada identidad.",
  },
  {
    title: "Series pequeñas",
    category: "Confección a medida",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=85",
    alt: "Selección de prendas en una tienda de ropa",
    description: "Piezas personalizadas y producciones acotadas con atención cercana.",
  },
  {
    title: "Línea deportiva",
    category: "Ropa personalizada",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=85",
    alt: "Prenda deportiva en una composición editorial",
    description: "Prendas funcionales con color, identidad y presencia visual.",
  },
];

export const corporateBenefits = [
  "Cotización según cantidad y complejidad",
  "Bordado de logos y personalización",
  "Pecheras, gorros, polerones y uniformes",
  "Acompañamiento directo durante el pedido",
];

export const processSteps = [
  {
    title: "Conversemos",
    description: "Definimos la prenda, cantidad, uso, identidad y plazo esperado.",
  },
  {
    title: "Cotización",
    description: "Evaluamos materiales, bordado y complejidad para preparar la propuesta.",
  },
  {
    title: "Producción",
    description: "Confeccionamos y bordamos cuidando consistencia y terminaciones.",
  },
  {
    title: "Entrega",
    description: "Coordinamos la entrega del pedido terminado y revisado.",
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
    alt: "Publicación de ropa personalizada de Dory Sport",
    caption: "Trabajo textil publicado por Dory Sport.",
  },
  {
    href: "https://www.instagram.com/reel/C-mA3Xjuzet/",
    image: "/images/instagram/post-3.jpg",
    alt: "Reel de Dory Sport publicado en Instagram",
    caption: "Contenido reciente de la cuenta.",
  },
  {
    href: "https://www.instagram.com/p/C9yeNaQOOdt/",
    image: "/images/instagram/post-4.jpg",
    alt: "Publicación de una prenda deportiva de Dory Sport",
    caption: "Prenda deportiva publicada por la marca.",
  },
  {
    href: "https://www.instagram.com/reel/C9v8LuMugps/",
    image: "/images/instagram/post-5.jpg",
    alt: "Productos publicados por Dory Sport",
    caption: "Otra vista del trabajo publicado en Instagram.",
  },
  {
    href: "https://www.instagram.com/p/C0PcZV3RJXQ/",
    image: "/images/instagram/post-6.jpg",
    alt: "Producto textil publicado por Dory Sport",
    caption: "Más productos disponibles en el perfil.",
  },
];

export const instagramProfile: InstagramProfile = {
  username: "tienda.dory_sport",
  displayName: "Tienda Dory Sport",
  location: "Puerto Montt",
  postsCount: "137",
  followers: "1028",
  following: "957",
  avatar: "/images/instagram/avatar.jpg",
  bio: [
    "Ropa de calidad, hecha en casa.",
    "Polerones, joggers, calzas, ropa de bebé, pijamas y ropa deportiva.",
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
      "Bordados personalizados, confección a medida, ropa deportiva y pedidos corporativos en Puerto Montt.",
    path: "/",
  },
  services: {
    title: "Servicios | Dory Sport",
    description:
      "Bordados personalizados, confección a medida, ropa deportiva y pedidos corporativos en Puerto Montt.",
    path: "/servicios",
  },
  business: {
    title: "Bordados para empresas | Dory Sport",
    description:
      "Pedidos por volumen, pecheras, gorros, polerones y bordado de logos para pymes y empresas.",
    path: "/empresas",
  },
  catalog: {
    title: "Trabajos | Dory Sport",
    description:
      "Conoce prendas, bordados y trabajos textiles de Dory Sport en Puerto Montt.",
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
      "Cotiza bordados, confección y pedidos corporativos con Dory Sport por WhatsApp.",
    path: "/contacto",
  },
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hola Dory Sport, quiero cotizar un trabajo personalizado."
)}`;
