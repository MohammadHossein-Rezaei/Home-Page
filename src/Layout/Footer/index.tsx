import "./styles.css";
type Props = {};

export default function FooterLayout({}: Props) {
  return (
    <footer className="footer-layout">
      <div className="footer-item">
        <img
          className="footer-image"
          src="/public/images/image-retro-pcs.jpg"
          alt=""
        />
        <div>
          <h1>01</h1>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades</p>
        </div>
      </div>
      <div className="footer-item">
        <img
          className="footer-image"
          src="/public/images/image-top-laptops.jpg"
          alt=""
        />
        <div>
          <h1>02</h1>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets</p>
        </div>
      </div>
      <div className="footer-item">
        <img
          className="footer-image"
          src="/public/images/image-gaming-growth.jpg"
          alt=""
        />
        <div>
          <h1>03</h1>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities</p>
        </div>
      </div>
    </footer>
  );
}
