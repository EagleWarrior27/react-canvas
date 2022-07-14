import { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();

  const establecerNombre = function (evento) {
    setNombre(evento.target.value);
  }
  const establecerPrecio = function (evento) {
    setPrecio(evento.target.value);
  }

  const exportar = function (evento) {

    html2canvas(document.querySelector("#toXport")).then(canvas => {
      alert("exportando");
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select>
        <option value="mujer">Moda Mujer</option>
        <option value="hombre">Moda Hombre</option>
        <option value="infantil">Infantil</option>
        <option value="zapatos">Zapatos</option>
        <option value="belleza">Belleza</option>
        <option value="jugueteria">Juguetería</option>
        <option value="hogar">Hogar</option>
        <option value="linea">Línea blanca</option>
        <option value="boutique">Boutique de vacaciones</option>
        <option value="deportes">Deportes</option>
        <option value="muebles">Muebles</option>
        <option value="tecnologia">Tecnología</option>
        <option value="gourmet">Gourmet</option>
        <option value="yucatecos">Productos yucatecos</option>
        <option value="salud">Salud y bienestar</option>
        <option value="mascotas">Mascotas</option>
      </select> <br />

      <input onChange={establecerNombre} type="text" placeholder="Nombre del producto" /> <br />
      <input onChange={establecerPrecio} type="text" placeholder="Precio del producto" /> <br />
      <button onClick={exportar}>Exportar</button>

      <div>
        <span>{nombre}</span> <br />
        <span>{precio}</span>
        <img src="" alt="Producto"/>
      </div>

      <div id="toXport">
        <h1>Grupo</h1>
        <img src='chapur.jpg' alt='park'/>
        <h3>Xcaret</h3>
      </div>
    </div>
  );
}

export default App;
