const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;

requestAnimationFrame(() => root.classList.add("is-ready"));

if (window.location.hash) {
  document.fonts.ready.then(() => {
    window.setTimeout(() => {
      document.querySelector<HTMLElement>(window.location.hash)?.scrollIntoView({
        block: "start",
        behavior: "auto",
      });
    }, 80);
  });
}

const header = document.querySelector<HTMLElement>("[data-site-header]");
const whatsappFloat = document.querySelector<HTMLElement>(".whatsapp-float");

const updateScrollState = () => {
  const scrolled = window.scrollY > 32;
  header?.classList.toggle("is-compact", scrolled);
  whatsappFloat?.classList.toggle("is-visible", window.scrollY > 520);
};

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });

const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (reduceMotion) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");
const sections = document.querySelectorAll<HTMLElement>("[data-section][id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    const id = visible.target.id;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.hash === `#${id}`);
    });
  },
  { threshold: [0.18, 0.35, 0.6], rootMargin: "-18% 0px -58% 0px" },
);

sections.forEach((section) => sectionObserver.observe(section));

const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");
const menuLinks = document.querySelectorAll<HTMLAnchorElement>("[data-menu-link]");

const closeMenu = () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  mobileMenu?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mobileMenu?.classList.toggle("is-open", !open);
  document.body.classList.toggle("menu-open", !open);
});

menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

if (!reduceMotion) {
  const parallaxElements = document.querySelectorAll<HTMLElement>("[data-parallax]");
  let ticking = false;

  const updateParallax = () => {
    parallaxElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      const movement = Math.max(-18, Math.min(18, centerOffset * -0.035));
      element.style.setProperty("--parallax-y", `${movement}px`);
    });
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      requestAnimationFrame(updateParallax);
      ticking = true;
    },
    { passive: true },
  );

  updateParallax();
}
