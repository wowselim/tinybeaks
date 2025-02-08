import { Header } from "../components/header.tsx";
import { Info } from "../components/info.tsx";
import { SwipeLeft } from "../components/swipeLeft.tsx";
import { BirdData, BirdId } from "../domain/birds.ts";
import { Root } from "../layouts/root.tsx";

export const Gallery = () => {
  const birds: Array<Array<BirdId>> = [
    ["great_tit", "black_redstart", "long_tailed_tit"],
    ["treecreeper", "european_robin", "goldfinch"],
    ["sparrow", "blue_tit", "chaffinch"],
  ];

  return (
    <Root
      title="Küçük Gagalar"
      description={`Küçük Gagalar fotoğraf sergisi`}
      ogImage={`https://tinybeaks.selim.co/thumbnails/european_robin_thumbnail.jpg`}
      ogUrl={`https://tinybeaks.selim.co`}
    >
      <Header title="Küçük Gagalar" includeNav></Header>
      <div class="swipe-indicator">
        <SwipeLeft />
      </div>
      <div class="gallery">
        {birds.map((row) => {
          return (
            <div class="row">
              {row.map((birdId) => {
                const birdData = BirdData[birdId];
                return (
                  <a href={`/birds/${birdId}.html`} draggable="false">
                    <figure>
                      <figcaption>
                        {birdData.title} <Info />
                      </figcaption>
                      <img src={`/thumbnails/${birdId}_thumbnail.jpg`} alt="" />
                    </figure>
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </Root>
  );
};
