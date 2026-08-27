import Image from "next/image";
import type { Comercio } from "@/data/comercios";
import { InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";

const PLACEHOLDER_WA = "549XXXXXXXXXX";

function waHref(comercio: Comercio) {
  const number = comercio.whatsapp ?? PLACEHOLDER_WA;
  const text = encodeURIComponent(
    `Hola! Vi ${comercio.name} en Comercios de Pilar ${comercio.emoji}`,
  );
  return `https://wa.me/${number}?text=${text}`;
}

function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `tel:+54${digits}`;
}

export default function MerchantCard({ comercio }: { comercio: Comercio }) {
  return (
    <article className="card">
      <div className="card-img">
        <Image
          src={comercio.image}
          alt={comercio.name}
          fill
          sizes="(max-width: 600px) 100vw, 360px"
        />
        <span className="card-cat">{comercio.category}</span>
      </div>
      <div className="card-body">
        <div className="card-name">{comercio.name}</div>
        <div className="card-desc">{comercio.description}</div>
        <div className="card-location">
          <PinIcon />
          {comercio.address}
        </div>
        {comercio.phone ? (
          <a className="card-contact" href={telHref(comercio.phone)}>
            <PhoneIcon />
            {comercio.phone}
          </a>
        ) : null}
        {comercio.instagram ? (
          <a
            className="card-contact"
            href={`https://www.instagram.com/${comercio.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={14} />@{comercio.instagram}
          </a>
        ) : null}
      </div>
      <div className="card-footer">
        <a
          className="btn-wp"
          href={waHref(comercio)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        {comercio.instagram ? (
          <a
            className="btn-ig"
            href={`https://www.instagram.com/${comercio.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`Instagram @${comercio.instagram}`}
          >
            <InstagramIcon />
          </a>
        ) : null}
        <a
          className="btn-map"
          href={`https://maps.google.com/?q=${encodeURIComponent(comercio.mapQuery)}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Ver en el mapa"
        >
          <PinIcon size={18} />
        </a>
      </div>
    </article>
  );
}
