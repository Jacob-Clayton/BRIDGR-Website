import express from 'express'
import nodemailer from 'nodemailer'

const app = express()

// Use the built-in middleware to parse JSON and URL-encoded bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Define the endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASS,
		},
	})

	try {
		await transporter.sendMail({
			from: email,
			to: 'bridgr.web3@gmail.com',
			subject: `BRIDGR Contact form submission from ${name}`,
			html: `	<h3>Contact form submission from ${name}</h3><br>
        			<p><strong>Email: </strong> ${email}</p><br>
        			<p><strong>Message: </strong> ${message}</p><br>
    		`,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() })
	}
	return res.status(200).json({ error: '' })
}
)

