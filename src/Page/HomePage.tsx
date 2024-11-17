import FooterLayout from "../Layout/Footer";
import HeaderLayout from "../Layout/Header";
import MainLayout from "../Layout/Main";
import "./styles.css";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="home-page">
      <HeaderLayout />
      <MainLayout />
      <FooterLayout />
    </div>
  );
}
