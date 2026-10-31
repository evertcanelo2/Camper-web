
import Image from 'next/image';
import './PhotosGallery.css';

// List of image filenames located in the public/images directory.
const imageFiles = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '9pm-elixir-perfume.jpg',
  '9pm-night-perfume.jpg',
  '9pm-perfume.jpg',
  '9pm-rebel-perfume.jpg',
  'CamperLogoWhite.png',
  'FranelSinFondo.png',
  'Franela2.png',
  'Franela3.png',
  'Franela4.png',
  'HeroForDesk.jpg',
  'HeroForPhone.jpg',
  'Pefume1.jpg',
  'Perfume2.jpg',
  'WhatsApp Image 2026-10-29 at 04.40.45.jpeg',
  'amber-gold-perfume.jpg',
  'art-of-universe-perfume.jpg',
  'asad-bourbon-perfume.jpg',
  'asad-elixir-perfume.jpg',
  'asad-perfume.jpg',
  'asad-zanzibar-perfume.jpg',
  'bad-boy-perfume1.jpg',
  'casio-enticer-mtp-1302-blanco.jpg',
  'casio-enticer-mtp-1302-rojo.jpeg',
  'casio-enticer-mtp-1302.jpg',
  'casio-enticer-mtp-blanco.jpg',
  'casio-enticer-mtp-marron.jpg',
  'casio-enticer-mtp-verde.jpg',
  'casio-enticer-mtp.jpg',
  'casio-vintage-ltp-azul.jpg',
  'casio-vintage-ltp-champan.jpg',
  'casio-vintage-ltp-negro.jpg',
  'casio-vintage-ltp.jpg',
  'casio.jpg',
  'caterpillar-azul-oscuro.jpg',
  'caterpillar-marron.jpg',
  'caterpillar-negro.jpg',
  'eclaire-perfume.jpg',
  'eros-energy-versace.jpg',
  'eros-versace.jpg',
  'gaultier-divine-perfume.jpg',
  'good-girl-perfume1.jpg',
  'king-solei-perfume.jpg',
  'le-beau-paradise.jpg',
  'le-beau-perfume.jpg',
  'le-male-perfume.jpg',
  'mod12-polo-azul.jpg',
  'mod12.jpg',
  'nueva-gorra-5.jpg',
  'nueva-gorra-6.jpg',
  'nueva-gorra1.jpg',
  'nueva-gorra2.jpg',
  'nueva-gorra3.jpg',
  'nueva-gorra4.jpg',
  'odissey-homme-perfume.jpg',
  'odyssey-mandarin-sky-elixir-perfume.jpg',
  'odyssey-mandarin-sky-perfume.jpg',
  'odyssey-mega1-perfume.jpg',
  'odyssey-tyrant.jpg',
  'odyssey-wild-one-perfume.jpg',
  'one-million.jpg',
  'reloj-casio2.jpg',
  'reloj-qcong-blanco.jpg',
  'reloj-qcong-marron.jpg',
  'reloj-qcong-negro.jpg',
  'sauvage-perfume.jpg',
  'scandal-pour-absolu-perfume.jpg',
  'scandal-pour-perfume.jpg',
  'yara-perfume.jpg',
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
