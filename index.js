const express = require('express')
require('ejs')
const app = express()

app.use((req, res) => {
	if (req.path == '/') {
		if (req.query.content) {
		res.render('index.ejs', {
			'content': req.query.content
		})
	} else {
		res.redirect('/about')
	} 
	}
	else if (req.path == '/about') {
		res.render('about.ejs')
	}
	else return res.sendStatus(400)
}).listen(3000,()=>{console.log('ok')})