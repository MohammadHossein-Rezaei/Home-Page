import "./styles.css";

type Props = {};

export default function Aside({}: Props) {
  return (
    <aside className="aside">
      <h1 className="title-aside">New</h1>
      <section className="aside-section">
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </section>
      <section className="aside-section">
        <h3>The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse eddects of on-demand AI image generation{" "}
        </p>
      </section>
      <section className="aside-section">
        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY.We take a look at what
          that means
        </p>
      </section>
    </aside>
  );
}
