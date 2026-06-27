# Ficha Tecnica - Proyecto Web Dory Sport

Fecha: 2026-06-27
Proyecto: sitio web comercial para `Dory Sport`
Version del documento: 1.0
Estado: propuesta de arquitectura inicial

## 1. Objetivo tecnico del proyecto

Construir una web:
- rapida
- profesional
- facil de mantener
- orientada a SEO local
- preparada para crecer sin reescribir la base

La primera version debe priorizar:
- presentacion comercial de la marca
- captacion de cotizaciones
- integracion con WhatsApp e Instagram
- diferenciacion clara entre cliente particular y cliente pyme/empresa

## 2. Alcance tecnico de la V1

Incluye:
- sitio frontend responsive
- paginas estaticas optimizadas
- componentes reutilizables
- formularios de contacto y cotizacion
- galeria de trabajos
- seccion orientada a empresas
- integracion visual con Instagram
- SEO tecnico base
- analitica basica

No incluye en V1:
- backend propio
- base de datos
- panel de administracion
- autenticacion
- ecommerce
- carrito de compra
- pagos online
- gestion de inventario

## 3. Decision de arquitectura

Arquitectura recomendada:
- `monolito frontend estatico`
- `component based architecture`
- `contenido desacoplado del layout`

Decision:
- no usar microservicios
- no usar MVC clasico
- no usar backend monolitico por ahora

Razon:
- el negocio actual no necesita logica compleja de servidor
- no hay operaciones transaccionales
- no hay usuarios autenticados
- no hay inventario ni pagos
- la necesidad principal es performance, imagen comercial y conversion

Conclusion tecnica:
- este proyecto debe nacer como un `frontend monolitico modular`
- modular porque separaremos componentes, contenido, estilos y utilidades
- monolitico porque todo vive en una sola aplicacion desplegable

## 4. Stack tecnologico recomendado

### Stack principal

- `Astro`
- `TypeScript`
- `Tailwind CSS`
- `Zod` para validaciones de estructura de datos
- `Netlify` para despliegue

### Por que este stack

`Astro`:
- excelente performance
- muy buen SEO
- ideal para sitios de contenido y marketing
- permite crecer luego con componentes interactivos si se necesitan

`TypeScript`:
- evita errores tontos
- mejora mantenibilidad
- ayuda a escalar sin perder control

`Tailwind CSS`:
- acelera desarrollo de interfaz
- permite mantener consistencia visual
- facilita construir una UI limpia y minimalista

`Zod`:
- sirve para validar datos internos del proyecto
- util si definimos catalogos, testimonios, servicios y configuraciones en archivos

`Netlify`:
- despliegue simple
- CDN global
- HTTPS facil
- formularios posibles sin backend propio
- preview deploys utiles si luego trabajamos con ramas

## 5. Arquitectura logica

Capas recomendadas:

### 1. Presentacion
- paginas
- layouts
- componentes visuales

### 2. Contenido
- archivos de configuracion
- colecciones de productos o trabajos
- textos institucionales

### 3. Dominio liviano
- modelos tipados
- reglas simples de visualizacion
- adaptadores de contenido

### 4. Integraciones externas
- WhatsApp
- Instagram
- formulario
- analitica

Esto evita mezclar:
- texto duro dentro de componentes
- logica visual con contenido
- configuraciones repetidas en multiples paginas

## 6. Estructura de carpetas recomendada

```text
DorisSport.cl/
  public/
    favicons/
    images/
    og/

  src/
    components/
      common/
      home/
      services/
      gallery/
      business/
      contact/
      instagram/

    content/
      gallery/
      testimonials/

    data/
      brand.ts
      contact.ts
      navigation.ts
      services.ts
      business.ts
      social.ts
      seo.ts

    layouts/
      BaseLayout.astro

    pages/
      index.astro
      nosotros.astro
      servicios.astro
      catalogo.astro
      empresas.astro
      cotizacion.astro
      contacto.astro
      404.astro

    styles/
      globals.css
      tokens.css

    lib/
      seo/
      analytics/
      forms/
      instagram/

    utils/
      cn.ts
      format.ts

    types/
      content.ts
      business.ts
      seo.ts

    config/
      site.ts

  docs/
    requisitos-iniciales-dory-sport.md
    ficha-tecnica-proyecto.md

  astro.config.mjs
  package.json
  tsconfig.json
  .env.example
  README.md
```

## 7. Principios de escalabilidad

El proyecto debe crecer por extension, no por reemplazo.

Eso significa:
- agregar nuevas paginas sin reestructurar todo
- sumar nuevas categorias de trabajos sin tocar componentes base
- actualizar contenido desde archivos centralizados
- poder incorporar un backend en el futuro sin romper la interfaz

Preparacion para futuro:
- hoy sin base de datos
- manana se puede agregar CMS o backend si el negocio lo exige

Posibles futuros crecimientos:
- formulario conectado a CRM
- panel simple para administrar galeria
- blog de trabajos recientes
- catalogo dinamico
- ecommerce parcial
- seguimiento de cotizaciones

## 8. Estrategia de contenido

Recomendacion:
- no guardar contenido principal dentro de cada pagina
- usar archivos de datos o colecciones para:
  - servicios
  - categorias
  - testimonios
  - trabajos
  - datos de contacto
  - enlaces sociales

Beneficio:
- cambia contenido sin tocar demasiada UI
- reduce duplicacion
- facilita escalabilidad

## 9. Formularios sin backend propio

Recomendacion V1:
- usar `Netlify Forms` o `Formspree`

Decision recomendada:
- si desplegamos en Netlify, usar `Netlify Forms`

Ventajas:
- cero backend propio
- facil implementacion
- suficiente para una etapa inicial

Alternativa futura:
- endpoint serverless
- envio con `Resend`
- integracion con Google Sheets o CRM

## 10. Instagram en la arquitectura

No recomiendo depender de un feed 100 por ciento automatico en tiempo real como nucleo del sitio.

Recomendacion tecnica V1:
- seccion visual inspirada en Instagram
- contenido controlado desde archivos locales
- cada item enlaza al perfil o publicacion real

Modelo recomendado:
- 6 a 9 items seleccionados manualmente
- imagen optimizada localmente
- enlace externo a Instagram

Ventajas:
- mejor performance
- mejor control visual
- menos fragilidad tecnica
- no dependemos de cambios de politica o embeds lentos

Evolucion posible:
- consumir feed real via API o automatizacion posterior
- agregar embeds puntuales de publicaciones destacadas

## 11. SEO tecnico recomendado

Minimo en V1:
- metadatos por pagina
- Open Graph
- sitemap.xml
- robots.txt
- schema markup para negocio local
- imagenes optimizadas
- headings bien estructurados
- contenido orientado a busquedas locales

Palancas SEO importantes para este negocio:
- pagina especifica para empresas
- pagina o bloques sobre bordados personalizados
- foco geografico en Puerto Montt

## 12. Analitica recomendada

Recomendacion:
- `Google Analytics 4` o alternativa ligera como `Plausible`

Si el cliente quiere simplicidad:
- `Google Analytics 4`

Si priorizamos privacidad y ligereza:
- `Plausible`

Eventos sugeridos:
- click a WhatsApp
- envio de formulario
- click a Instagram
- click en CTA empresas

## 13. Estrategia de despliegue

Plataforma recomendada:
- `Netlify`

Motivos:
- ideal para Astro
- facil dominio personalizado
- SSL automatico
- formularios posibles
- despliegue continuo simple

Alternativas validas:
- `Cloudflare Pages`
- `Vercel`

Decision senior para este caso:
- `Netlify` gana por simplicidad operativa para una web comercial sin backend

## 14. Variables de entorno previstas

Aunque la V1 sea simple, conviene preparar esto:

```env
PUBLIC_SITE_URL=
PUBLIC_WHATSAPP_NUMBER=
PUBLIC_INSTAGRAM_URL=
PUBLIC_GA_ID=
FORM_ENDPOINT=
```

## 15. Convenciones tecnicas

- usar `TypeScript` estricto
- componentes pequenos y reutilizables
- no mezclar contenido duro con logica visual
- centralizar datos editables
- usar nombres consistentes en ingles tecnico para carpetas y archivos
- mantener textos del negocio en espanol
- optimizar imagenes antes de subirlas
- no introducir dependencias innecesarias

## 16. Ruta de evolucion futura

### Etapa 1
- sitio vitrina
- contacto
- cotizacion
- Instagram

### Etapa 2
- mejor sistema de galeria
- mas casos para empresas
- automatizacion de captacion de leads

### Etapa 3
- backend liviano o serverless
- panel de contenido o CMS
- integracion con CRM

### Etapa 4
- ecommerce o modulo de pedidos estructurados, solo si el negocio realmente lo necesita

## 17. Decision final recomendada

Como arquitecto de software, mi recomendacion para este proyecto es:

- `Astro + TypeScript + Tailwind`
- arquitectura `frontend monolitico modular`
- sin backend
- sin base de datos
- despliegue en `Netlify`
- formularios resueltos con servicio externo o capacidades del hosting
- contenido estructurado desde archivos para facilitar mantenimiento

Esta es la solucion correcta para el momento actual del negocio porque:
- reduce costo y complejidad
- acelera salida a produccion
- mantiene buena escalabilidad
- evita sobreingenieria
- deja una base limpia para crecer
