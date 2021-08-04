const express = require("express");
const pdf = require("html-pdf");
const cors = require("cors");
const pdfTemplate = require("./documents");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.set("view engine", "ejs");

app.post("/create-pdf", (req, res) => {
	pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
		if (err) {
			res.send(Promise.reject());
		}

		return res.send(Promise.resolve());
	});
});

app.get("/fetch-pdf", (req, res) => {
	res.sendFile(`${__dirname}/result.pdf`);
});

app.listen(PORT, () => console.log(`Server @ ${PORT}`));
