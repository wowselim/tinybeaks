import { ArrowLeft } from "../components/arrowLeft.tsx";
import { Header } from "../components/header.tsx";
import { Root } from "../layouts/root.tsx";

export const About = () => {
  return (
    <Root
      title="Sergi Hakkında"
      description={`Sergi hakkında bilgiler`}
      ogImage={`https://tinybeaks.selim.co/thumbnails/european_robin_thumbnail.jpg`}
      ogUrl={`https://tinybeaks.selim.co`}
    >
      <Header title="Sergi Hakkında" includeNav={false}></Header>
      <div class="buttons">
        <a href="/" class="go-back">
          <button>
            <ArrowLeft /> Geri dön
          </button>
        </a>
      </div>
      <p>
        Bu sergide, farklı türden kuşların doğal ortamlarında çekilmiş
        portrelerini göreceksiniz. Fotoğraflar, tamamen rastlantı eseri
        yakalanan anlardan oluşmakta ve kuşların günlük yaşamlarına saygı
        duyularak çekilmiştir. Çekimler sırasında yemleme ya da başka bir
        müdahale yöntemi kullanılmamış, kuşların doğal davranışları ön planda
        tutulmuştur. Doğal ışığın, renklerin ve kompozisyonun bir araya geldiği
        bu koleksiyon, kuşların hem bireysel özelliklerini hem de yaşadıkları
        çevrenin güzelliğini gözler önüne seriyor. Sizi bu sade ve samimi
        dünyayı keşfetmeye davet ediyoruz.
      </p>
      <h2>Iletişim</h2>
      <p>
        Sergi hakkında daha fazla bilgi almak veya fotoğraflarla ilgili
        sorularınızı iletmek isterseniz, bana{" "}
        <span class="address">hi[at]selim.co</span> adresinden ulaşabilirsiniz.
        Görüşlerinizi ve geri bildirimlerinizi duymaktan mutluluk duyarım.
      </p>
    </Root>
  );
};
