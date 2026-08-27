export type Comercio = {
  id: string;
  name: string;
  category: string;
  address: string;
  description: string;
  image: string;
  mapQuery: string;
  whatsapp?: string;
  phone?: string;
  instagram?: string;
  website?: string;
  emoji: string;
};

export const CATEGORIES = [
  { id: "todos", label: "Todos", icon: "🏪" },
  { id: "Indumentaria", label: "Indumentaria", icon: "👗" },
  { id: "Ferretería", label: "Ferretería", icon: "🔧" },
  { id: "Dietética", label: "Dietética", icon: "🌿" },
  { id: "Bazar", label: "Bazar", icon: "🏠" },
  { id: "Lencería", label: "Lencería", icon: "🛍️" },
  { id: "Perfumería", label: "Perfumería", icon: "🌸" },
] as const;

export const COMERCIOS: Comercio[] = [
  {
    id: "esencial-uniformes",
    name: "Esencial Uniformes",
    category: "Indumentaria",
    address: "B. Rivadavia 488, Pilar",
    description:
      "Uniformes escolares, de trabajo y corporativos. Bordados y personalización. Atención personalizada para colegios y empresas.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    mapQuery: "Rivadavia 488, Pilar, Buenos Aires",
    whatsapp: "5491149457936",
    phone: "+54 9 11 4945-7936",
    instagram: "esencialuniformespilar",
    emoji: "👔",
  },
  {
    id: "dietetica-vitalita",
    name: "Dietética Vitalita",
    category: "Dietética",
    address: "B. Rivadavia 480, Pilar",
    description:
      "Productos naturales, integrales, sin TACC, suplementos y semillas. Todo para una alimentación saludable y equilibrada.",
    image: "/comercios/dietetica-vitalita.png",
    mapQuery: "Rivadavia 480, Pilar, Buenos Aires",
    whatsapp: "5491153471339",
    phone: "+54 9 11 5347-1339",
    instagram: "vitalitapilar",
    emoji: "🌿",
  },
  {
    id: "lenceria-marilo",
    name: "Lencería Marilo",
    category: "Lencería",
    address: "B. Rivadavia 500, Pilar",
    description:
      "Lencería femenina, ropa interior y de dormir. Amplio surtido de tallas y modelos para todas las mujeres.",
    image: "/comercios/lenceria-marilo.png",
    mapQuery: "Rivadavia 500, Pilar, Buenos Aires",
    whatsapp: "5491131974379",
    phone: "+54 9 11 3197-4379",
    emoji: "🛍️",
  },
  {
    id: "bazar-el-atico",
    name: "Bazar El Ático",
    category: "Bazar",
    address: "B. Rivadavia 528, Pilar",
    description:
      "Bazar con artículos para el hogar, decoración, vajilla, textiles y regalería. Encontrá todo lo que necesitás para tu casa.",
    image: "/comercios/bazar-el-atico.png",
    mapQuery: "Rivadavia 528, Pilar, Buenos Aires",
    whatsapp: "5491166407305",
    phone: "11 6640 7305",
    instagram: "bazarelatico",
    website: "https://bazarelatico.empretienda.com.ar",
    emoji: "🏠",
  },
  {
    id: "geraldine",
    name: "Geraldine",
    category: "Indumentaria",
    address: "B. Rivadavia 447",
    description:
      "Indumentaria y moda femenina. Ropa, accesorios y las últimas tendencias para la mujer moderna de Pilar.",
    image: "/comercios/geraldine.png",
    mapQuery: "B. Rivadavia 447, Pilar, Buenos Aires",
    whatsapp: "541125265701",
    phone: "011 2526-5701",
    emoji: "👗",
  },
  {
    id: "ocn",
    name: "OCN",
    category: "Indumentaria",
    address: "B. Rivadavia 468, Pilar",
    description:
      "Local de indumentaria con las colecciones más actuales. Ropa de calidad para toda la familia.",
    image: "/comercios/ocn.png",
    mapQuery: "B. Rivadavia 468, Pilar, Buenos Aires",
    whatsapp: "541127029960",
    phone: "011 2702-9960",
    instagram: "ocn.pilar",
    emoji: "👔",
  },
  {
    id: "olivia-indumentaria",
    name: "Olivia Indumentaria y Accesorios",
    category: "Indumentaria",
    address: "B. Rivadavia 483",
    description:
      "Ropa femenina de moda, carteras, cinturones, bijouterie y accesorios. Las últimas tendencias para lucir siempre impecable.",
    image: "/comercios/olivia.png",
    mapQuery: "B. Rivadavia 483, Pilar Centro, Buenos Aires",
    instagram: "olivia_pilar_",
    emoji: "👗",
  },
  {
    id: "habia-una-vez",
    name: "Había Una Vez",
    category: "Indumentaria",
    address: "Pedro Lagrave 515, Pilar",
    description:
      "Ropa para bebés, niños y teens. Conjuntitos, pijamas, ropa de temporada y accesorios para los más chiquitos de la casa.",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80",
    mapQuery: "Pedro Lagrave 515, Pilar, Buenos Aires",
    instagram: "habiaunavez_pilar",
    emoji: "👶",
  },
  {
    id: "apasionata",
    name: "Apasionata",
    category: "Indumentaria",
    address: "Pilar, Buenos Aires",
    description:
      "Moda femenina con estilo y pasión. Vestidos, conjuntos y prendas únicas para cada ocasión especial.",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    mapQuery: "Pilar Buenos Aires",
    emoji: "💃",
  },
];
