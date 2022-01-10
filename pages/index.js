import { useState } from "react"
import indexStyles from '../styles/index.module.css';
import { Button, Checkbox } from '@mui/material';

const Home = () => {
  const formDataInit = {
    motivo: false,
    ubicacion: false,
    estadoRevocacion: false,
    nombre: false,
    fecha: false,
    logotipo: false,
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
      [e.target.name]: e.target.value
    })
    console.log('form data', formData)
  }

  const validateAndSendDataForm = (e) => {
    e.preventDefault()
    e.stopPropagation()

    console.log('form data: ', formData)
  }

  const { document, password, cert } = formData
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
      <Checkbox onChange={(e) => handleFormChange(e)} name="nombre" label="Nombre" />
      <Checkbox onChange={(e) => handleFormChange(e)} name="fecha" label="Fecha" />
      <Checkbox onChange={(e) => handleFormChange(e)} name="ubicacion" label="Ubicacion" />
      <Checkbox onChange={(e) => handleFormChange(e)} name="motivo" label="Motivo" />
      <Checkbox onChange={(e) => handleFormChange(e)} name="logotipo" label="Logotipo" />
      <Checkbox onChange={(e) => handleFormChange(e)} name="etiqueta" label="Etiquetas" />

      <Button
          variant="contained"
          component="label"
        >
          Upload Image
          <input
            type="file"
            name="cert" 
            onChange={(e) => handleFormChange(e)} 
            value={cert} 
            accept=".p12"
            hidden
          />

      <Button variant="contained" onClick={(e) => validateAndSendDataForm(e)}>Contained</Button>
    </form>
  )
}

export default Home