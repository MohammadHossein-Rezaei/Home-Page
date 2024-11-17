import "./styles.css";

export default function MainComponent() {
  return (
    <main className="main-component">
      <picture className="main-banner">
        <source
          media="(max-width: 675px)"
          srcSet="/public/images/image-web-3-mobile.jpg"
        />
        <img
          src="/public/images/image-web-3-desktop.jpg"
          alt="Responsive Version"
        />
      </picture>
      <div className="main-container">
        <h1 className="main-title">The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next ecolution of the web that claims to put the
            power of the platforms back into the hands of the people. but is it
            really fulfilling its promise?
          </p>
          <button className="main-button">
            <b>Read More</b>
          </button>
        </div>
      </div>
    </main>
  );
}
