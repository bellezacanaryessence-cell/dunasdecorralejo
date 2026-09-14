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

  /** Qué ver y hacer */
  atracciones: [
    {
      titulo: "Parque Natural de las Dunas de Corralejo",
      texto:
        "Un desierto de arena blanca declarado Parque Natural en 1982 que se extiende a lo largo de más de diez kilómetros de costa. La carretera FV-1 lo atraviesa y permite parar en numerosos accesos señalizados. Amanecer y atardecer son los mejores momentos: la luz rasante dibuja las crestas de las dunas.",
      imagen: grandesPlayas,
    },
    {
      titulo: "Grandes Playas",
      texto:
        "Kilómetros de arena fina y agua transparente, con Isla de Lobos y Lanzarote en el horizonte. Hay tramos con servicios frente a los hoteles y calas prácticamente vacías si caminas unos minutos. Ojo con el viento y las corrientes en los días de mar movido.",
      imagen: grandesPlayas,
    },
    {
      titulo: "Kitesurf y windsurf",
      texto:
        "El alisio constante convierte a Corralejo en uno de los mejores destinos de Europa para el kitesurf y el windsurf. Flag Beach es la zona clásica de aprendizaje, con escuelas y alquiler de material. La mejor época de viento va de mayo a septiembre.",
      imagen: kitesurf,
    },
    {
      titulo: "Isla de Lobos",
      texto:
        "Islote volcánico a apenas quince minutos en ferry desde el puerto. Se visita en medio día: la playa de La Concha, el faro de Martiño y el volcán La Caldera. Requiere autorización previa gratuita del Cabildo de Fuerteventura por cupo diario.",
      imagen: islaLobos,
    },
    {
      titulo: "El pueblo de Corralejo",
      texto:
        "El casco antiguo conserva casitas blancas alrededor del muelle chico, con terrazas de pescado fresco, tiendas y mercadillo los martes y viernes. Al atardecer, el paseo marítimo es el mejor plan tranquilo del norte de la isla.",
      imagen: pueblo,
    },
    {
      titulo: "Miradores",
      texto:
        "El Mirador de Las Dunas, en la FV-1, ofrece la panorámica clásica de arena y océano. Subiendo hacia el interior, la Montaña Roja y el Bayuyo regalan vistas de todo el norte; y en día claro se ve Lanzarote entera desde la costa.",
      imagen: islaLobos,
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
