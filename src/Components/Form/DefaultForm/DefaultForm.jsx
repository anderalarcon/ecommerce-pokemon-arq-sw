import React, { useState } from "react";
import "./DefaultForm.scss";
import background from "../../../assets/static/signin/signin.jpg";
const DefaultForm = () => {
  const [show, setShow] = useState(true);

  const getForms = () => {
    if (show) {
      return (
        <form className="defaultform">
          <div className="defaultform_container">
            <h2 className="defaultform_container_title">Login</h2>

            <div className="defaultform_container_box">
              <label htmlFor="">Email</label>
              <input
                placeholder="Ingresa tu email"
                className="defaultform_container_box_input"
                type="email"
                required
              />
            </div>
            <div className="defaultform_container_box">
              <label htmlFor="">Contraseña</label>
              <input
                placeholder="Ingresa tu contraseña"
                className="defaultform_container_box_input"
                type="password"
                required
              />
            </div>
            <div className="defaultform_container_buttons">
              <button
                type="submit"
                className="defaultform_container_buttons_btn"
              >
                Ingresar
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>o</p>
              <button
                className="defaultform_container_buttons_register"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Registrate
              </button>
            </div>
          </div>
        </form>
      );
    }
    return (
      <form className="defaultform">
        <div className="defaultform_container">
          <h2 className="defaultform_container_title">Registro</h2>
          <div className="defaultform_container_box">
            <label className="defaultform_container_box_label" htmlFor="">
              Nombre
            </label>
            <input
              placeholder="Ingresa tu nombre"
              className="defaultform_container_box_input"
              type="text"
              required
            />
          </div>
          <div className="defaultform_container_box">
            <label htmlFor="">Email</label>
            <input
              placeholder="Ingresa tu email"
              className="defaultform_container_box_input"
              type="email"
              required
            />
          </div>
          <div className="defaultform_container_box">
            <label htmlFor="">Contraseña</label>
            <input
              placeholder="Ingresa tu contraseña"
              className="defaultform_container_box_input"
              type="password"
              required
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="defaultform_container_buttons_btn">
              Registrar
            </button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <div className="bacgkround">
        <img
          className="bacgkround_img"
          src={background}
          alt="Bacground Pokeshop"
        />
      </div>
      {getForms()}
    </>
  );
};

export default DefaultForm;
