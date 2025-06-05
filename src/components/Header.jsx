import Chef from "../assets/ChefLogo.png";

export default function Header() {
  return (
    <header>
      <div className = "logo">
        <img src={Chef} alt="Chef Logo" />
      </div>
      <span>Chef Claude</span>
    </header>
  );
}
