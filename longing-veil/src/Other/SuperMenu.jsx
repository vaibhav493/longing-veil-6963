
import '../Styles/SuperMenu.css'

export default function SuperMenu({ style , func}) {
  console.log();

  return (
    <div>
      <div
        style={{ display: style.display }}
        className="supermenu_main_container"
      >
        <div className="container_1"></div>
        <div className="container2"></div>
        <div className="container3"></div>
      </div>
    </div>
  );
}
