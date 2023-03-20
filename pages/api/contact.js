import nodemailer from 'nodemailer'

const mailer = async (req, res) => {
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
			to: 'jacobeclayton@gmail.com',
			subject: `BRIDGR Contact form submission from ${name}`,
			html: `	<h4>Contact form submission from <a href="https://bridgr.xyz">BRIDGR.XYZ</a></h4><br>
        			<p><strong>Email: </strong> ${email}</p><br>
        			<p><strong>Message: </strong> ${message}</p><br>
    		`,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() })
	}
	return res.status(200).json({ error: '' })
}

export default mailer