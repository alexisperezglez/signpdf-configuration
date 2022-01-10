import { useState } from "react"
import indexStyles from '../styles/index.module.css';
import { Button, Checkbox, FormControlLabel } from '@mui/material';

const Home = () => {
  const formDataInit = {
    motivo: true,
    ubicacion: true,
    estadoRevocacion: true,
    nombre: true,
    fecha: true,
    logotipo: true,
    etiqueta: true,
    img: undefined
  }

  const [formData, setFormData] = useState(formDataInit)
  const printText = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleFormChange = (e) => {
    console.log(e)
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    })
    console.log('form data', formData)
  }

  const validateAndSendDataForm = (e) => {
    e.preventDefault()
    e.stopPropagation()

    console.log('form data: ', formData)
  }

  const { motivo, ubicacion, estadoRevocacion, nombre, fecha, logotipo, etiqueta, img } = formData
  return (
    <form onSubmit={(event) => printText(event)} className={indexStyles.sign_form}>
      {/* <label>Creacion y aspecto</label>
      <Checkbox onChange={(e) => handleFormChange(e)} name="motivos" label="Mostrar motivos" />
      <Checkbox onChange={(e) => handleFormChange(e)} name="ubicacion" label="Mostrar ubicacion e informacion de contacto" />
      <Checkbox onChange={(e) => handleFormChange(e)} name="estadoRevocacion" label="Incluir estado de revocacion de la firma" /> */}

      {/* <label>Validacion de la firma</label>
      <label>Controlar como y cuando se validan las firmas</label>
      <Checkbox onChange={(e) => handleFormChange(e)} name="" label="Verificar las firmas al abrir el documento" />
      <Checkbox onChange={(e) => handleFormChange(e)} name="" label="Confiar en todos los certificados del repositorio" />
      <Checkbox onChange={(e) => handleFormChange(e)} name="" label="Confiar en todos los certificados raiz de windows" /> */}

      <label>Configurar texto</label>
      <FormControlLabel
        control={
          <Checkbox checked={nombre} onChange={(e) => handleFormChange(e)} name="nombre" />
        }
        label="Nombre"
      />
      <FormControlLabel
        control={
          <Checkbox checked={fecha} onChange={(e) => handleFormChange(e)} name="fecha" />
        }
        label="Fecha"
      />
      <FormControlLabel
        control={
          <Checkbox checked={ubicacion} onChange={(e) => handleFormChange(e)} name="ubicacion" />
        }
        label="Ubicacion"
      />
      <FormControlLabel
        control={
          <Checkbox checked={motivo} onChange={(e) => handleFormChange(e)} name="motivo" />
        }
        label="Motivo"
      />
      <FormControlLabel
        control={
          <Checkbox checked={logotipo} onChange={(e) => handleFormChange(e)} name="logotipo" />
        }
        label="Logotipo"
      />
      <FormControlLabel
        control={
          <Checkbox checked={etiqueta} onChange={(e) => handleFormChange(e)} name="etiqueta" />
        }
        label="Etiquetas"
      />

      <Button
        variant="contained"
        component="label"
      >
        Upload Image
        <input
          type="file"
          name="img" 
          onChange={(e) => handleFormChange(e)} 
          value={img} 
          accept=".png"
          hidden
        />
      </Button>

      <Button variant="contained" onClick={(e) => validateAndSendDataForm(e)}>Contained</Button>
    </form>
  )
}

export default Home