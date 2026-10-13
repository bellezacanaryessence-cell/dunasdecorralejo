/**
 * Páginas propias por ubicación (español).
 * Los párrafos, avisos e imágenes base salen de `atracciones` en es.ts
 * (enlazados por el campo `guia`); aquí va el texto ampliado de cada página.
 * Isla de Lobos no está en `atracciones`, así que lleva su propio texto e imagen.
 */
import islaLobos from "@/assets/isla-lobos.jpg";

export type Lugar = {
  slug: string;
  nombre: string;
  eyebrow: string;
  h1: string;
  intro: string;
  meta: { title: string; description: string };
  afiliado: { tipo: "gyg" | "coche"; query?: string; label: string };
  propio?: {
    parrafos: string[];
    imagen: string;
    aviso?: { titulo: string; texto: string };
  };
  extra: string[];
  comoLlegar: string[];
  mejorMomento: string[];
  consejos: string[];
  faq: { q: string; a: string }[];
};

export const lugares: Lugar[] = [
  {
    slug: "/isla-de-lobos",
    nombre: "Isla de Lobos",
    eyebrow: "Islote frente a Corralejo",
    h1: "Isla de Lobos: guía para visitarla desde Corralejo",
    intro:
      "Desde el paseo de Corralejo la ves cada día, ahí enfrente. Lobos es un islote pequeño y protegido que merece una mañana entera, siempre que vayas con la autorización hecha y la mochila bien preparada.",
    meta: {
      title: "Isla de Lobos desde Corralejo: barco, autorización y consejos",
      description:
        "Cómo visitar la Isla de Lobos desde Corralejo: barco desde el puerto, autorización previa, Faro de Martiño, playa de La Concha y Montaña de la Caldera.",
    },
    afiliado: { tipo: "gyg", query: "Isla de Lobos", label: "Ver excursiones a Isla de Lobos" },
    propio: {
      parrafos: [
        "La Isla de Lobos es un islote situado justo frente a Corralejo, en el estrecho de La Bocaina, y está protegido como parque natural. No hay pueblo, no hay hoteles ni tiendas: lava, arena, vegetación costera y silencio. Precisamente por eso el acceso está regulado.",
        "Lo que yo haría en una visita: subir a la Montaña de la Caldera para tener la vista de Corralejo, las dunas y Lanzarote de un solo golpe; caminar hasta el Faro de Martiño, en el extremo norte del islote; y terminar bañándome en la playa de La Concha, una ensenada de agua tranquila y arena clara que es la foto típica de Lobos.",
      ],
      imagen: islaLobos,
      aviso: {
        titulo: "Autorización previa obligatoria",
        texto:
          "Para visitar Lobos necesitas una autorización previa del Gobierno de Canarias, con un número de plazas limitado por día. Tramítala con antelación en la web oficial antes de comprar el barco; las condiciones pueden cambiar.",
      },
    },
    extra: [
      "Ve con la idea de caminar y respetar los senderos marcados: el islote es frágil y los vigilantes del parque están pendientes. Y llévate de vuelta todo lo que traigas, incluida la basura.",
    ],
    comoLlegar: [
      "El barco sale del puerto de Corralejo y la travesía es de unos 15 minutos. Hay varias salidas al día, pero los horarios y precios cambian según la temporada y la naviera, así que tómalos como orientativos y consúltalos en la web oficial o en el propio puerto.",
    ],
    mejorMomento: [
      "Primera hora de la mañana, antes de que apriete el sol y de que sople fuerte el alisio de la tarde. Con mar movido algunas salidas pueden suspenderse: consulta antes de ir.",
    ],
    consejos: [
      "En Lobos no hay servicios: lleva agua de sobra, comida y protección solar alta.",
      "Gorra, calzado cómodo para el malpaís y algo de abrigo para el barco.",
      "Lleva la autorización contigo (en el móvil o impresa).",
    ],
    faq: [
      {
        q: "¿Cuánto tarda el barco de Corralejo a la Isla de Lobos?",
        a: "Unos 15 minutos desde el puerto de Corralejo. Los horarios son orientativos y cambian según la temporada; consúltalos en la web oficial.",
      },
      {
        q: "¿Hace falta autorización para visitar Lobos?",
        a: "Sí. Es un parque natural y el acceso requiere una autorización previa del Gobierno de Canarias, con plazas limitadas por día.",
      },
      {
        q: "¿Hay servicios en la Isla de Lobos?",
        a: "No. Hay que llevar agua, comida y protección solar porque en el islote no hay donde comprar.",
      },
      {
        q: "¿Qué ver en la Isla de Lobos?",
        a: "La Montaña de la Caldera, el Faro de Martiño y la playa de La Concha son los imprescindibles.",
      },
    ],
  },
  {
    slug: "/grandes-playas",
    nombre: "Grandes Playas y las Dunas",
    eyebrow: "Parque Natural de Corralejo",
    h1: "Grandes Playas y el Parque Natural de las Dunas de Corralejo",
    intro:
      "Arena casi blanca, agua turquesa y kilómetros de campo dunar. Así es la entrada de la FV-1 al parque natural, el paisaje que da nombre a esta web.",
    meta: {
      title: "Grandes Playas y Dunas de Corralejo: guía local del parque natural",
      description:
        "Guía de las Dunas de Corralejo y Grandes Playas: origen de la arena, Parque Natural desde 1994, cómo llegar, mejor momento y normas como la prohibición de drones.",
    },
    afiliado: { tipo: "gyg", query: "dunas Corralejo", label: "Ver excursiones y actividades" },
    extra: [
      "Las Grandes Playas son las playas que se extienden a lo largo del parque, junto a la carretera. Cada acceso señalizado te deja en un tramo distinto, así que si uno está lleno, sigue un poco más: casi siempre hay un hueco tranquilo.",
    ],
    comoLlegar: [
      "Desde Corralejo, la FV-1 hacia el sur atraviesa el parque. Para en los accesos habilitados y aparca solo en las zonas señalizadas, nunca sobre la arena. También se puede llegar caminando desde el sur del pueblo.",
    ],
    mejorMomento: [
      "Primera hora o atardecer: luz rasante en las crestas y mucha menos gente. Por la tarde el alisio levanta arena, así que la mañana suele ser más agradable para la playa.",
    ],
    consejos: [
      "Camina por los senderos y accesos marcados: la vegetación fija la arena.",
      "No te lleves arena, conchas ni piedras.",
      "Gafas de sol y cortavientos ligero para las tardes de viento.",
    ],
    faq: [
      {
        q: "¿La arena de las dunas de Corralejo viene del Sáhara?",
        a: "No. Es de origen orgánico: conchas de moluscos y organismos marinos pulverizados durante miles de años y depositados en la costa norte.",
      },
      {
        q: "¿Se pueden volar drones en las dunas?",
        a: "No sin autorización especial. Ya ha habido sanciones de la Guardia Civil y de AESA a turistas.",
      },
      {
        q: "¿Desde cuándo es Parque Natural?",
        a: "Desde 1994. Además es Zona de Especial Protección para las Aves.",
      },
    ],
  },
  {
    slug: "/popcorn-beach",
    nombre: "Popcorn Beach",
    eyebrow: "Playa del Bajo de la Burra",
    h1: "Popcorn Beach (Playa de las Palomitas) en Fuerteventura",
    intro:
      "La playa más fotografiada del norte, y también la que más hay que cuidar. Te cuento qué es de verdad eso que parecen palomitas y cómo visitarla bien.",
    meta: {
      title: "Popcorn Beach Fuerteventura: cómo llegar y qué saber antes de ir",
      description:
        "Popcorn Beach o Playa del Bajo de la Burra, entre Corralejo y Majanicho: qué son los rodolitos, por qué no puedes llevártelos y cómo llegar por la pista.",
    },
    afiliado: { tipo: "coche", label: "Comparar precios de alquiler" },
    extra: [
      "Mi recomendación: llega, camina despacio por la orilla, agáchate a mirar los rodolitos de cerca y haz tus fotos. Es una visita corta y preciosa si la haces con calma y sin prisas por llevarte nada.",
    ],
    comoLlegar: [
      "Desde Corralejo se toma la pista de tierra hacia Majanicho, de unos 4-5 kilómetros. Con coche normal se llega, pero ve despacio porque hay piedra suelta. Lo más cómodo es ir en coche de alquiler y combinarla con Majanicho.",
    ],
    mejorMomento: [
      "Por la mañana, con la luz más suave y menos visitantes. Con marea baja se aprecian mejor los rodolitos.",
    ],
    consejos: [
      "No es playa de baño: es playa para visitar y fotografiar.",
      "Calzado cerrado: el terreno es irregular.",
      "Ni una palomita en el bolsillo: la foto es el recuerdo.",
    ],
    faq: [
      {
        q: "¿Qué son las palomitas de Popcorn Beach?",
        a: "Son rodolitos, algas calcáreas fosilizadas que tardan miles de años en formarse.",
      },
      {
        q: "¿Puedo llevarme palomitas de recuerdo?",
        a: "No. Está prohibido y se calcula que desaparecen unos diez kilos al mes por los visitantes.",
      },
      {
        q: "¿Se puede uno bañar en Popcorn Beach?",
        a: "No es una playa de baño cómoda; es una playa para visitar y hacer fotos.",
      },
      {
        q: "¿Cuál es el nombre oficial de Popcorn Beach?",
        a: "Playa del Bajo de la Burra, también conocida como Playa del Hierro.",
      },
    ],
  },
  {
    slug: "/el-cotillo",
    nombre: "El Cotillo",
    eyebrow: "Costa oeste del norte",
    h1: "El Cotillo: faros, muelle viejo y lagos para familias",
    intro:
      "El otro pueblo con encanto del norte. Más tranquilo que Corralejo, mirando al mar abierto y con unas piscinas naturales que son el plan perfecto con niños.",
    meta: {
      title: "Qué ver en El Cotillo: faros, lagos de El Cotillo y muelle viejo",
      description:
        "Guía local de El Cotillo: faros del Tostón y Museo de la Pesca Tradicional, muelle viejo, castillo y los lagos de El Cotillo, ideales para familias.",
    },
    afiliado: { tipo: "gyg", query: "El Cotillo", label: "Ver excursiones y actividades" },
    extra: [
      "Si tienes un día entero, mi plan es: lagos por la mañana con el agua tranquila, comer junto al muelle viejo y acabar viendo el atardecer desde la zona de los faros.",
    ],
    comoLlegar: [
      "Desde Corralejo se llega en coche por carretera, pasando por Lajares, o combinando la ruta con Majanicho. El coche es la forma más cómoda de moverse por el norte.",
    ],
    mejorMomento: [
      "Los lagos, por la mañana y con buena marea; los faros y el muelle, al atardecer. El museo abre de forma intermitente: compruébalo antes.",
    ],
    consejos: [
      "Escarpines para los lagos si vas con niños.",
      "Consulta si el Museo de la Pesca Tradicional está abierto antes de ir.",
      "Protección solar alta: en el agua tranquila se pierde la noción del tiempo.",
    ],
    faq: [
      {
        q: "¿Son buenos los lagos de El Cotillo para niños?",
        a: "Sí. Son piscinas naturales entre barreras de roca que frenan la corriente, con el agua casi siempre tranquila.",
      },
      {
        q: "¿Cuántos faros hay en El Cotillo?",
        a: "Dos en la punta del Tostón, el viejo y el nuevo de 37 metros, junto al edificio original de 1897.",
      },
      {
        q: "¿El Museo de la Pesca Tradicional está siempre abierto?",
        a: "No, abre de forma intermitente. Comprueba antes de ir si está abierto.",
      },
    ],
  },
  {
    slug: "/montana-roja",
    nombre: "Montaña Roja",
    eyebrow: "Dentro del parque natural",
    h1: "Montaña Roja: el volcán con vistas a las dunas de Corralejo",
    intro:
      "Un cono volcánico en pleno parque natural, con fama de montaña mística entre la gente de la isla y unas vistas enormes de las dunas y de Lobos.",
    meta: {
      title: "Montaña Roja Corralejo: vistas, tradición local y consejos",
      description:
        "Montaña Roja, cono volcánico del Parque Natural de Corralejo: tradición local, vistas de las dunas e Isla de Lobos, mejor momento y consejos.",
    },
    afiliado: { tipo: "coche", label: "Comparar precios de alquiler" },
    extra: [
      "No hace falta creer en energías para disfrutarla: con el sol cayendo y las dunas cambiando de color, el paisaje habla solo.",
    ],
    comoLlegar: [
      "Está dentro del parque natural, cerca de Corralejo. Se llega en coche y se aparca en zonas habilitadas; desde ahí, a pie por los senderos marcados.",
    ],
    mejorMomento: [
      "Al atardecer, por la luz. Evita las horas centrales del día en verano: no hay sombra.",
    ],
    consejos: [
      "Calzado con buena suela: el terreno volcánico suelto resbala.",
      "Agua y gorra, aunque la subida sea corta.",
      "Sigue los senderos y no salgas de ellos.",
    ],
    faq: [
      {
        q: "¿Se ve África desde Montaña Roja?",
        a: "Se cuenta que en días excepcionalmente claros se llega a ver la costa de África. Es una tradición local, no un dato comprobado.",
      },
      {
        q: "¿Dónde está Montaña Roja?",
        a: "Dentro del Parque Natural de las Dunas de Corralejo.",
      },
      {
        q: "¿Cuál es el mejor momento para subir?",
        a: "El atardecer, por la luz sobre las dunas y la Isla de Lobos.",
      },
    ],
  },
  {
    slug: "/corralejo-pueblo",
    nombre: "Corralejo pueblo",
    eyebrow: "Muelle viejo y casco antiguo",
    h1: "Corralejo pueblo: casco antiguo, muelle viejo y vida nocturna",
    intro:
      "Nuestro pueblo: casitas blancas, pescado fresco en el muelle viejo, mercadillo y, cuando cae el sol, el mejor ambiente nocturno del norte.",
    meta: {
      title: "Corralejo pueblo: qué ver, muelle viejo y vida nocturna",
      description:
        "Guía local de Corralejo pueblo: casco antiguo, muelle viejo, mercadillo los martes y viernes, paseo marítimo al atardecer y la mejor vida nocturna del norte.",
    },
    afiliado: { tipo: "gyg", query: "Corralejo", label: "Ver excursiones y actividades" },
    extra: [
      "Corralejo es también la base perfecta para todo lo demás: desde el puerto salen los barcos a Lobos y los ferris a Lanzarote, y las dunas empiezan a las afueras del pueblo.",
    ],
    comoLlegar: [
      "Si te alojas aquí, todo se hace andando. Desde el aeropuerto hay guagua y taxi, como contamos en la página de Cómo llegar.",
    ],
    mejorMomento: [
      "El paseo marítimo al atardecer, antes de cenar. Martes y viernes, mercadillo. Por la noche, la zona de la plaza.",
    ],
    consejos: [
      "Reserva cena en temporada alta si quieres terraza en el muelle.",
      "Una capa fina para la noche: con el alisio refresca.",
      "Aprovecha el pueblo como base para Lobos y Lanzarote.",
    ],
    faq: [
      {
        q: "¿Qué días hay mercadillo en Corralejo?",
        a: "Los martes y los viernes.",
      },
      {
        q: "¿Hay vida nocturna en Corralejo?",
        a: "Sí, es el mejor sitio del norte para salir: bares alrededor de la plaza, música en directo y terrazas hasta tarde.",
      },
      {
        q: "¿Desde Corralejo salen barcos a Lobos y Lanzarote?",
        a: "Sí, desde el puerto. Los horarios cambian; consúltalos en la web oficial de cada naviera.",
      },
    ],
  },
  {
    slug: "/la-oliva",
    nombre: "La Oliva",
    eyebrow: "Casa de los Coroneles",
    h1: "La Oliva y la Casa de los Coroneles",
    intro:
      "En la antigua capital militar de la isla está la joya de la arquitectura civil majorera. Una casa con historia real… y con unas cuantas leyendas que te cuento tal cual se cuentan.",
    meta: {
      title: "Casa de los Coroneles en La Oliva: historia, leyendas y visita",
      description:
        "La Casa de los Coroneles en La Oliva, Fuerteventura: casa del siglo XVIII, Monumento Artístico Nacional desde 1979, sus leyendas y consejos para visitarla.",
    },
    afiliado: { tipo: "coche", label: "Comparar precios de alquiler" },
    extra: [
      "Fíjate al llegar en el patio central y en las galerías de madera: son la estructura clásica canaria y lo que mejor explica cómo se vivía en una casa así.",
    ],
    comoLlegar: [
      "La Oliva está en el interior del norte, a un paseo en coche desde Corralejo. El coche es la opción más cómoda.",
    ],
    mejorMomento: [
      "Cuando esté abierta: puede cerrar temporalmente por obras o cambios de gestión. La tradición local dice que en cierta época del año, al atardecer, la sombra de Tindaya llega hasta aquí.",
    ],
    consejos: [
      "Confirma que está abierta antes de ir.",
      "Combínala en la misma ruta con la vista de Tindaya desde abajo.",
      "Las leyendas son leyendas: disfrútalas como tales.",
    ],
    faq: [
      {
        q: "¿La Casa de los Coroneles tiene 365 puertas y ventanas?",
        a: "Se cuenta que sí, una por cada día del año, pero es una leyenda local.",
      },
      {
        q: "¿De qué siglo es la Casa de los Coroneles?",
        a: "Del siglo XVIII. Es Monumento Artístico Nacional desde 1979.",
      },
      {
        q: "¿Está siempre abierta al público?",
        a: "No necesariamente: puede estar cerrada temporalmente. Compruébalo antes de ir.",
      },
    ],
  },
];
