import React, { Component } from 'react';

class NuevaCita extends Component {
    state = {}

    render(){
        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llenar formulario para crear nueva cita
                    </h2>
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Mascota"
                                name="mascota"
                                />
                            </div>
                        </div> {/*form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Dueño Mascota"
                                name="propietario"
                                />
                            </div>
                        </div> {/*form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                type="date"
                                className="form-control"
                                name="fecha"
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                type="time"
                                className="form-control"
                                placeholder="Nombre Mascota"
                                name="hora"
                                />
                            </div>
                        </div> {/*form-group*/}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="Sintomas"
                                    placeholder="Describe los Sintomas"
                                ></textarea>
                            </div>
                        </div> {/*form-group*/}
                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita"/>
                    </form>
                </div>
            </div>

        )
    }


}

export default NuevaCita;