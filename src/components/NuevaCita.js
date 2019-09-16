import * as React from "react";

class NuevaCita extends React.Component {
  state = {};
  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="cardBody">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>
          <form className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Nombre Mascota
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Mascota"
                name="mascota"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
