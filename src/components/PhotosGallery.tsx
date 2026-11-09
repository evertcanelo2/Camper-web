
import Image from 'next/image';
import './PhotosGallery.css';

// List of image filenames located in the public/images directory.
const imageFiles = [
  '1.webp',
  '2.webp',
  '3.webp',
  '4.webp',
  '5.webp',
  '6.webp',
  '9pm-elixir-perfume.webp',
  '9pm-night-perfume.webp',
  '9pm-perfume.webp',
  '9pm-rebel-perfume.webp',
  'CamperLogoWhite.webp',
  'FranelSinFondo.webp',
  'Franela2.webp',
  'Franela3.webp',
  'Franela4.webp',
  'HeroForDesk.webp',
  'HeroForPhone.webp',
  'Pefume1.webp',
  'Perfume2.webp',
  'WhatsApp Image 2026-10-29 at 04.40.45.webp',
  'amber-gold-perfume.webp',
  'art-of-universe-perfume.webp',
  'asad-bourbon-perfume.webp',
  'asad-elixir-perfume.webp',
  'asad-perfume.webp',
  'asad-zanzibar-perfume.webp',
  'bad-boy-perfume1.webp',
  'casio-enticer-mtp-1302-blanco.webp',
  'casio-enticer-mtp-1302-rojo.webp',
  'casio-enticer-mtp-1302.webp',
  'casio-enticer-mtp-blanco.webp',
  'casio-enticer-mtp-marron.webp',
  'casio-enticer-mtp-verde.webp',
  'casio-enticer-mtp.webp',
  'casio-vintage-ltp-azul.webp',
  'casio-vintage-ltp-champan.webp',
  'casio-vintage-ltp-negro.webp',
  'casio-vintage-ltp.webp',
  'casio.webp',
  'caterpillar-azul-oscuro.webp',
  'caterpillar-marron.webp',
  'caterpillar-negro.webp',
  'eclaire-perfume.webp',
  'eros-energy-versace.webp',
  'eros-versace.webp',
  'gaultier-divine-perfume.webp',
  'good-girl-perfume1.webp',
  'king-solei-perfume.webp',
  'le-beau-paradise.webp',
  'le-beau-perfume.webp',
  'le-male-perfume.webp',
  'mod12-polo-azul.webp',
  'mod12.webp',
  'nueva-gorra-5.webp',
  'nueva-gorra-6.webp',
  'nueva-gorra1.webp',
  'nueva-gorra2.webp',
  'nueva-gorra3.webp',
  'nueva-gorra4.webp',
  'odissey-homme-perfume.webp',
  'odyssey-mandarin-sky-elixir-perfume.webp',
  'odyssey-mandarin-sky-perfume.webp',
  'odyssey-mega1-perfume.webp',
  'odyssey-tyrant.webp',
  'odyssey-wild-one-perfume.webp',
  'one-million.webp',
  'reloj-casio2.webp',
  'reloj-qcong-blanco.webp',
  'reloj-qcong-marron.webp',
  'reloj-qcong-negro.webp',
  'sauvage-perfume.webp',
  'scandal-pour-absolu-perfume.webp',
  'scandal-pour-perfume.webp',
  'yara-perfume.webp',
];

/**
 * PhotosGallery renders a responsive, glass‑styled grid of images.
 * Images are served from the public folder, so the src attribute is
 * relative to the site root (e.g. "/images/1.PNG").
 */
const PhotosGallery: React.FC = () => {
  return (
    <div className="photos-gallery">
      {imageFiles.map((file) => (
        <div key={file} className="photo-card">
          <Image
            src={`/images/${file}`}
            alt={file}
            width={300}
            height={300}
            className="photo-img"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotosGallery;
