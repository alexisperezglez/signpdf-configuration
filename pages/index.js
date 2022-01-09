import { useState } from "react"
import indexStyles from '../styles/index.module.css';
import { Button, TextField, Input } from '@mui/material';

const Home = () => {
  const formDataInit = {
    cert: undefined,
    document: undefined,
    password: ''
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
      [e.target.name]: e.target.value || e.target.files[0]
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
      <div className={indexStyles.form_controls}>
        <label>Documento</label>
        {/* <input type="file" name="document" onChange={(e) => handleFormChange(e)} value={document} accept=".pdf"/> */}
        <Button
          variant="contained"
          component="label"
        >
          {!!document ? document.name : 'Upload Doc'}
          <input
            type="file"
            name="document" 
            onChange={(e) => handleFormChange(e)} 
            value={document} 
            accept=".pdf"
            hidden
          />
        </Button>
        <small>Documeto .pdf que desea firmar</small>
      </div>
      <div className={indexStyles.form_controls}>
        <label>Certificado</label>
        {/* <input type="file" name="cert" onChange={(e) => handleFormChange(e)} value={cert} accept=".p12"/> */}
        <Button
          variant="contained"
          component="label"
        >
          Upload Cert
          <input
            type="file"
            name="cert" 
            onChange={(e) => handleFormChange(e)} 
            value={cert} 
            accept=".p12"
            hidden
          />
        </Button>
        {/* <Input type="file" name="cert" onChange={(e) => handleFormChange(e)} value={cert} accept=".p12"/> */}
        <small>Llave publica para firmas digitales .p12</small>
      </div>
      <div className={indexStyles.form_controls}>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          variant="filled"
          value={password}
          onChange={(e) => handleFormChange(e)}
        />
        <small>Contrasenna de su certificado digital para realizar la firma</small>
      </div>
      <Button variant="contained" onClick={(e) => validateAndSendDataForm(e)}>Contained</Button>
    </form>
  )
}

export default Home