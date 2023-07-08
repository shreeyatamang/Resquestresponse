console.log("hello world")
const express = require("express")
const app = express()
app.use(express.json())
const port = 8080
app.listen(port, () => {

    console.log("listening on the port 8080")

})

function me(req, res) {
    res.json({
        "name": "shreeya tamang",

    })

}
app.get("/me", me)

function sendvariables(req, res) {
    console.log(req, params)
    const value = req.params.dynamicvalue
    res.json({
        "message": value
    })
}

app.get("/me/:dynamic value", sendvariables)

function postHello(req, res) {
    console.log(req.body)
    res.json(req.body)
}



let dummyDB = {}

function me(req, res) {
    res.json(dummyDB)
}

function postdata(req, res) {
    console.log(req.body)
    dummyDB = {...req.body }
    res.json(req.body)
}
app.post("/me", postdata)