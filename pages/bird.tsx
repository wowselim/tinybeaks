import { ArrowLeft } from "../components/arrowLeft.tsx";
import { Header } from "../components/header.tsx";
import { ImageDown } from "../components/imageDown.tsx";
import { BirdData, BirdId } from "../domain/birds.ts";
import { Root } from "../layouts/root.tsx";

export type Props = {
  id: BirdId;
};

export const Bird = (props: Props) => {
  const birdData = BirdData[props.id];

  return (
    <Root
      title={birdData.title}
      description={birdData.details}
      ogImage={`https://tinybeaks.selim.co/thumbnails/${props.id}_thumbnail.jpg`}
      ogUrl={`https://tinybeaks.selim.co/birds/${props.id}.html`}
    >
      <Header title={birdData.title} includeNav={false}></Header>
      <div class="buttons">
        <a href="/" class="go-back">
          <button>
            <ArrowLeft /> Geri dön
          </button>
        </a>
      </div>
      <img
        src={`/thumbnails/${props.id}_thumbnail.jpg`}
        alt=""
        class="main-image"
      ></img>

      <h2>Hakkında</h2>
      <p>
        <strong>Bilimsel adı:</strong> {birdData.latinName}
      </p>
      <p>{birdData.details}</p>
      <p>
        <strong>Çekildiği yer:</strong> {birdData.location}
      </p>
      <p>
        <strong>İstanbul'da nerede görebilirim?</strong>{" "}
        {birdData.locationsInIstanbul}
      </p>

      <h2>Sesi</h2>
      <p>
        {birdData.xenoCantoIds.map((xenoCantoId) => {
          return (
            <iframe
              src={`https://xeno-canto.org/${xenoCantoId}/embed?simple=1`}
              scrolling="no"
              frameborder="0"
              width="340"
              height="115"
            />
          );
        })}
      </p>

      <h2>Duvar kağıdı indir</h2>
      <div class="buttons">
        <a
          href={`/wallpapers/desktop/${props.id}_desktop.jpg`}
          download={`${props.id}_desktop.jpg`}
        >
          <button>
            <ImageDown /> Masaüstü
          </button>
        </a>
        <a
          href={`/wallpapers/mobile/${props.id}_mobile.jpg`}
          download={`${props.id}_mobile.jpg`}
        >
          <button>
            <ImageDown /> Mobil
          </button>
        </a>
      </div>
    </Root>
  );
};
