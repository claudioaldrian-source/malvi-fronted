import styles from "./LocationLink.module.css";

type LocationLinkProps = {
  city: string;
};

function LocationLink({ city }: LocationLinkProps) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${city}, Santa Fe, Argentina`
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      title={`Ver ${city} en Google Maps`}
    >
      📍 {city}
    </a>
  );
}

export default LocationLink;