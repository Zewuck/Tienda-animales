import "./fondoinicio.css";

export function FondoInicio() {
  return (
    <>
      <div className="background">
        <div className="gato-container">
          <img src={require("./imagen-gato.png")} className="gato" alt="" />
            <img src={require("./wave.png")} className="fondo" alt="" />
        </div>
      </div>
      
      <div className="next"> KillYourself</div>
    </>
  );
}
