/**
 * Contenido en español.
 *
 * Arquitectura lista para traducciones: para añadir inglés o alemán
 * crea `src/content/en.ts` y `src/content/de.ts` exportando el mismo
 * objeto con la misma forma, y regístralos en `src/content/index.ts`.
 * Los componentes leen el contenido con `useContent()`, nunca textos
 * escritos a mano.
 */
import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import hotel3 from "@/assets/hotel-3.jpg";
import hotel4 from "@/assets/hotel-4.jpg";
import grandesPlayas from "@/assets/grandes-playas.jpg";
import popcornBeach from "@/assets/popcorn-beach.jpg";
import elCotillo from "@/assets/el-cotillo.jpg";
import montanaRoja from "@/assets/montana-roja.jpg";
import majanicho from "@/assets/majanicho.jpg";
import surfNorte from "@/assets/surf-norte.jpg";
import casaCoroneles from "@/assets/casa-coroneles.jpg";
import tindaya from "@/assets/tindaya.jpg";
import cuevaDelLlano from "@/assets/cueva-del-llano.jpg";
import pueblo from "@/assets/pueblo-corralejo.jpg";

export const es = {
  nav: [
    { to: "/", label: "Inicio" },
    { to: "/donde-dormir", label: "Dónde dormir" },
    { to: "/que-ver-y-hacer", label: "Qué ver y hacer" },
    { to: "/como-llegar", label: "Cómo llegar" },
    { to: "/consejos", label: "Consejos" },
  ],

  hero: {
    title: "Dunas de Corralejo",
    subtitle:
      "Más de 2.600 hectáreas de arena dorada y agua turquesa en el Parque Natural de Corralejo, al norte de Fuerteventura.",
    cta: "Buscar alojamiento en Corralejo",
    ctaNote: "Enlace de afiliado · Precios y disponibilidad en Booking.com",
  },

  /** Hoteles y apartamentos de ejemplo. Edita libremente esta lista. */
  hoteles: [
    {
      nombre: "Hotel Dunas Beach & Spa",
      zona: "Primera línea · Grandes Playas",
      descripcion:
        "Resort de cuatro estrellas frente a las dunas, con piscinas climatizadas, spa y acceso directo a la playa. Ideal para familias y estancias largas.",
      precio: "desde 120 € / noche",
      imagen: hotel1,
      query: "Hotel Grandes Playas Corralejo",
    },
    {
      nombre: "Apartamentos Vista Lobos",
      zona: "Centro de Corralejo",
      descripcion:
        "Apartamentos luminosos con cocina y terraza mirando a Isla de Lobos, a cinco minutos a pie del puerto y de los restaurantes del casco antiguo.",
      precio: "desde 75 € / noche",
      imagen: hotel2,
      query: "Apartamentos centro Corralejo",
    },
    {
      nombre: "Casa Majanicho Boutique",
      zona: "Zona tranquila · Norte",
      descripcion:
        "Pequeño hotel boutique de piedra volcánica con patio, solárium y solo diez habitaciones. Perfecto para parejas que buscan silencio.",
      precio: "desde 98 € / noche",
      imagen: hotel3,
      query: "Hotel boutique Corralejo",
    },
    {
      nombre: "Casa Sal Surf Guesthouse",
      zona: "Cerca del puerto",
      descripcion:
        "Alojamiento informal para surfistas y kiters, con azotea al atardecer, almacén de tablas y ambiente internacional a precio ajustado.",
      precio: "desde 45 € / noche",
      imagen: hotel4,
      query: "Surf hostel Corralejo",
    },
  ],

  /** Qué ver y hacer: guía del norte escrita en tono local */
  atracciones: [
    {
      titulo: "Parque Natural de las Dunas de Corralejo",
      parrafos: [
        "Empecemos desmontando el mito más repetido: la arena de las dunas NO viene del Sáhara. Es de origen orgánico: durante miles de años, la disgregación y pulverización de conchas de moluscos y otros organismos marinos fue depositando esa arena en la costa norte. Por eso es tan clara y tan fina, casi blanca cuando le da el sol de lleno.",
        "El parque se declaró Parque Natural en 1994 y además es Zona de Especial Protección para las Aves: aquí anida, entre otras, la pardela cenicienta. Más de diez kilómetros de campo dunar atravesados por la FV-1, con accesos señalizados para parar el coche y caminar hasta el mar. Mi consejo de siempre: ven a primera hora o al atardecer, cuando la luz rasante dibuja las crestas y hay mucha menos gente.",
      ],
      imagen: grandesPlayas,
      aviso: {
        titulo: "Prohibido volar drones",
        texto:
          "En el parque natural está prohibido volar drones sin autorización especial. Ya ha habido sanciones de la Guardia Civil y de AESA a turistas por grabar las dunas con dron. Si traes uno, infórmate antes de despegarlo.",
      },
    },
    {
      titulo: "Playa de las Palomitas (Popcorn Beach)",
      parrafos: [
        "Su nombre oficial es Playa del Bajo de la Burra —también la oirás como Playa del Hierro—, pero todo el mundo la conoce como Popcorn Beach o la playa de las palomitas. Está entre Corralejo y Majanicho y se llega por una pista de tierra de unos 4-5 kilómetros: ve despacio, que hay piedra suelta.",
        "Las famosas «palomitas» no son piedras ni coral: son rodolitos, algas calcáreas fosilizadas que tardan miles de años en formarse con esa forma redondeada. Tenlo claro: no es una playa de baño, es una playa para visitar, mirar de cerca y hacer fotos. El baño aquí no es cómodo ni es el plan.",
      ],
      imagen: popcornBeach,
      aviso: {
        titulo: "No te lleves ni una",
        texto:
          "Los rodolitos NO se pueden llevar. Se calcula que desaparecen unos diez kilos al mes porque la gente se los mete en los bolsillos. Forman parte de la identidad de la isla y tienen un alto valor ecológico: la foto es el recuerdo, la palomita se queda en la playa.",
      },
    },
    {
      titulo: "El Cotillo: faros, muelle y lagos",
      parrafos: [
        "El Cotillo es el otro pueblo con encanto del norte, al oeste, mirando al mar de verdad. En la punta del Tostón verás dos faros —el viejo y el nuevo, que mide 37 metros— junto al edificio original de 1897, que alberga el Museo de la Pesca Tradicional. Ojo: el museo abre de forma intermitente, así que comprueba antes de ir si está abierto para no darte el viaje en balde.",
        "Baja después al muelle viejo, el muelle de pescadores de toda la vida, prácticamente igual que hace décadas, y sube al castillo, la antigua fortaleza militar desde la que se defendía esta parte de la costa. Y si vienes con niños, la joya son los Lagos de El Cotillo: piscinas naturales que se forman entre barreras de roca que frenan la corriente, con el agua casi siempre tranquila. Ideales para familias y para bañarse con peques sin preocupaciones.",
      ],
      imagen: elCotillo,
    },
    {
      titulo: "Montaña Roja",
      parrafos: [
        "Dentro del propio parque natural se levanta la Montaña Roja, un cono volcánico que para la gente de la isla siempre ha tenido fama de montaña mística, con una energía especial. Lo contamos como lo que es: tradición y creencia local, no un dato científico — pero sube un atardecer y entenderás de dónde viene la fama.",
        "También se cuenta que en días excepcionalmente claros, desde su cima se llega a ver la costa de África. Lo que sí te garantizo son unas vistas enormes de las dunas, de Corralejo y de la isla de Lobos.",
      ],
      imagen: montanaRoja,
    },
    {
      titulo: "Majanicho",
      parrafos: [
        "A mitad de camino entre Corralejo y El Cotillo, Majanicho es un pequeño pueblo de pescadores tradicional que ha cambiado muy poco: casitas bajas blancas con puertas de colores, barcas varadas y una caleta tranquila.",
        "No hay mucho «que hacer» y esa es exactamente su gracia: pasear, mirar el mar, hacer unas fotos y comer pescado si cuadra. Media hora bien vale la parada.",
      ],
      imagen: majanicho,
    },
    {
      titulo: "Surf y bodyboard en la costa norte",
      parrafos: [
        "Si lo tuyo es coger olas, estás en el sitio correcto: toda la costa entre Corralejo y El Cotillo es muy buena para el surf y el bodyboard, con picos para distintos niveles según el mar de fondo y la marea.",
        "Y no se acaba ahí: la costa desde El Cotillo hacia Tindaya también guarda olas potentes y mucho más vacías. Pregunta en las escuelas del pueblo por el parte del día; el norte cambia rápido y los locales saben dónde está funcionando.",
      ],
      imagen: surfNorte,
    },
    {
      titulo: "La Oliva: Casa de los Coroneles",
      parrafos: [
        "En La Oliva, la antigua capital militar de la isla, se levanta la Casa de los Coroneles, del siglo XVIII: el máximo exponente de la arquitectura civil de Fuerteventura, declarada Monumento Artístico Nacional en 1979. Sigue la estructura típica canaria: un patio central que articula todas las dependencias y galerías de madera.",
        "Aquí se cuenta de todo, y te lo cuento como se cuenta allí: que tiene 365 puertas y ventanas, una por cada día del año; que guarda una capilla en su interior —esto es real, aunque poco conocido—; y que existía un pasadizo subterráneo hasta la iglesia para que el coronel pudiera escapar en caso de ataque, leyenda local hoy tapiada.",
      ],
      imagen: casaCoroneles,
      aviso: {
        titulo: "Comprueba antes de ir",
        texto:
          "La Casa de los Coroneles puede estar cerrada temporalmente por obras o cambios de gestión. Antes de acercarte a La Oliva, confirma que está abierta al público.",
      },
    },
    {
      titulo: "Montaña de Tindaya",
      parrafos: [
        "Tindaya es la montaña sagrada de Fuerteventura. Es Monumento Natural y en sus laderas se conservan grabados rupestres llamados podomorfos —grabados con forma de pie—, declarados Bien de Interés Cultural. Los antiguos majoreros la consideraban un lugar especial, y viéndola recortada sola en la llanura se entiende.",
        "La tradición local cuenta que en cierta época del año, al atardecer, la sombra de la punta de la montaña llega hasta La Oliva, a la altura de la Casa de los Coroneles. Te lo cuento como lo que es: tradición local, de las que se transmiten de palabra. Se ve y se fotografía perfectamente desde abajo, desde la carretera y los miradores de los alrededores.",
      ],
      imagen: tindaya,
      aviso: {
        titulo: "Prohibido subir a la montaña",
        texto:
          "Desde 2019 está PROHIBIDO subir a la Montaña de Tindaya sin autorización de Patrimonio Histórico, y hay sanciones. Los grabados rupestres son frágiles e irremplazables. Disfrútala desde abajo: las vistas y las fotos son igual de buenas.",
      },
    },
    {
      titulo: "Cueva del Llano (Villaverde)",
      parrafos: [
        "En Villaverde, camino de La Oliva, está la Cueva del Llano: un tubo volcánico, en la línea de los famosos de Lanzarote, formado por la lava que siguió corriendo bajo su propia costra ya solidificada.",
        "Es una visita diferente a todo lo demás del norte: oscuridad total, formaciones de lava y mucho silencio. Eso sí, a día de hoy está pendiente de apertura al público, así que consulta su estado antes de planear la visita.",
      ],
      imagen: cuevaDelLlano,
      aviso: {
        titulo: "Pendiente de apertura",
        texto:
          "La Cueva del Llano está actualmente pendiente de apertura al público. Consulta antes de ir si ya se puede visitar y en qué condiciones.",
      },
    },
    {
      titulo: "Corralejo pueblo",
      parrafos: [
        "Terminamos donde empezamos. El casco antiguo de Corralejo conserva las casitas blancas alrededor del muelle viejo, con terrazas de pescado fresco, tiendas y mercadillo los martes y viernes.",
        "Y cuando cae el sol, el pueblo cambia de ritmo: ambiente joven y muy buena vida nocturna. Es, con diferencia, el mejor sitio del norte para salir de fiesta: bares alrededor de la plaza, música en directo y terrazas hasta tarde. El paseo marítimo al atardecer, antes de cenar, es el plan tranquilo perfecto.",
      ],
      imagen: pueblo,
    },
  ],

  comoLlegar: [
    {
      titulo: "Desde el aeropuerto de Fuerteventura (FUE)",
      texto:
        "Corralejo está a unos 37 km del aeropuerto de El Matorral, en Puerto del Rosario. El trayecto dura entre 35 y 45 minutos por la FV-1 y la FV-2. Hay taxis en la terminal (unos 50-60 €) y traslados privados reservables por adelantado.",
    },
    {
      titulo: "En coche de alquiler",
      texto:
        "La opción más cómoda para recorrer las dunas y el resto de la isla. Todas las grandes empresas tienen mostrador en el aeropuerto. La carretera FV-1 atraviesa el parque natural: aparca solo en los accesos habilitados y nunca sobre la arena.",
    },
    {
      titulo: "En guagua (autobús)",
      texto:
        "La línea 6 de Tiadhe conecta el aeropuerto y Puerto del Rosario con Corralejo en algo más de una hora, con salidas frecuentes durante el día. La línea 8 es la directa Puerto del Rosario–Corralejo. El billete cuesta unos 3-4 € y se paga al conductor.",
    },
    {
      titulo: "Ferry a Lanzarote e Isla de Lobos",
      texto:
        "Desde el puerto de Corralejo salen ferris a Playa Blanca (Lanzarote) cada 30-60 minutos, con una travesía de unos 25 minutos. Los barcos a Isla de Lobos tardan 15 minutos y operan varias veces al día; conviene reservar plaza y tramitar la autorización de visita.",
    },
  ],

  consejos: [
    {
      titulo: "Mejor época del año",
      texto:
        "Fuerteventura se visita todo el año. Primavera y otoño ofrecen el mejor equilibrio entre temperatura, precio y afluencia. El verano es más ventoso (ideal para deportes de vela) y el invierno mantiene medias de 20-22 °C.",
    },
    {
      titulo: "Clima y viento",
      texto:
        "Clima subtropical seco: apenas llueve y el sol es fuerte incluso en invierno. El alisio sopla casi a diario por la tarde, así que la sensación térmica baja y la arena vuela: unas gafas de sol y un cortavientos ligero se agradecen.",
    },
    {
      titulo: "Qué llevar",
      texto:
        "Protección solar alta, gorra, calzado cómodo para caminar por arena, bañador, toalla, agua abundante y una camiseta técnica. En invierno, una capa fina extra para las noches y para las travesías en ferry.",
    },
    {
      titulo: "Respeto al parque natural",
      texto:
        "Camina por los senderos y accesos marcados, no extraigas arena, conchas ni piedras, recoge toda la basura y evita circular o aparcar fuera de las zonas habilitadas. El campo dunar está vivo y su vegetación fija la arena: pisarla la degrada.",
    },
  ],

  footer: {
    about:
      "Guía independiente de viaje sobre Corralejo, sus dunas y el norte de Fuerteventura.",
    afiliados:
      "Transparencia: esta web incluye enlaces de afiliado de Booking.com. Si reservas a través de ellos podemos recibir una pequeña comisión sin ningún coste adicional para ti. Esto nos ayuda a mantener la guía actualizada y no influye en las recomendaciones.",
    legalLinks: [
      { to: "/aviso-legal", label: "Aviso legal" },
      { to: "/privacidad", label: "Política de privacidad" },
      { to: "/cookies", label: "Política de cookies" },
    ],
  },
} as const;

export type Content = typeof es;
