import express from 'express'
import { Resend } from 'resend'
import cors from 'cors'
import dotenv from 'dotenv'
import ViteExpress from "vite-express"

dotenv.config()

const app = express()
const resend = new Resend(process.env.RESEND_API_KEY)

app.use(cors())
app.use(express.json())

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body
    const data = await resend.emails.send({
      from: 'Peocsa Web <javiera@pecosanerd.cl>',
      to:['javiera@pecosanerd.cl'],
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje desde el formulario web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>`
    })
    res.status(200).json({ success: true, data })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

const PORT = process.env.PORT || 3000

ViteExpress.listen(app, PORT, () => {
  console.log(`Server running on port ${PORT}`)
})