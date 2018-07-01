const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/getPassengers', (req,res) => {
    const passengerList = [
        {
            travixPsgnrID: 'T121',
            travixPsgnrName: 'Traveller X',
            from: "Amsterdam",
            to: 'Munich',
            cost: 250
        },
        {
            travixPsgnrID: 'T122',
            travixPsgnrName: 'Traveller Y',
            from: "Amsterdam",
            to: 'London',
            cost: 350
        },
        {
            travixPsgnrID: 'T123',
            travixPsgnrName: 'Traveller Z',
            from: "Chennai",
            to: 'Amsterdam',
            cost: 750
        }
       ]
    res.json(passengerList);
});

const port = 3333;

app.listen(port, () => console.log(`Server started on port ${port}`));
