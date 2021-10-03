import skull from "../images/skull.png";

function CharacterDetail(props) {
  const isAlive = props.character.status;
  return (
    <>
      <img
        className="card__img"
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
      />
      <h4 className="card__title">Nombre: {props.character.name}</h4>
      <p className="card__text">Especie: {props.character.species}</p>
      <p className="card__text">
        Planeta de origen: {props.character.homePlanete}
      </p>
      <p className="card__text">
        Aparece en {props.character.episodes} episodios
      </p>
      <p className="card__text">
        Está {isAlive === "Alive" ? "Vivo" : "Desconocido"}
      </p>
      <div>
        {isAlive === "Dead" ? (
          <img
            className="card__calaver"
            src={skull}
            alt="Calaver Rick"
            width="20px"
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CharacterDetail;
