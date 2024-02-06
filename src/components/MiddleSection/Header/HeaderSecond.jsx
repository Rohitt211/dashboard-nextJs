import "./new.scss";
function HeaderSecond() {
  return (
    <div className="second-header">
      <div className="second-header-headerFlex">
        <p className="second-header-upperBox">S.</p>
        <p className="second-header-VisaText">
          <i>VISA</i>
        </p>
      </div>
      <div className="second-header-downBox">
        <div>
          <p style={{ fontSize: 15 }}>****9838</p>
          <p
            style={{ fontSize: 15, fontWeight: "bold", marginTop: "6px" }}
            className="second-header-text"
          >
            Jhon Demon
          </p>
        </div>
        <p className="second-header-date">08/12</p>
      </div>
    </div>
  );
}
export default HeaderSecond;
