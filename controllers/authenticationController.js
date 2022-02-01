const fs = require('fs');

const userLogin = async (req, res) => {        // async makes a function return a Promise.
    try
    {
        let data = "Email is : " + req.body.email + " & Password is : " + req.body.pass;
        await console.log(req.body );
        fs.appendFile('mynewfile1.txt', data, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        res.send({message: 'Hurray'});
    }
    catch(error){
        res.send({error: error, message: 'Murray'});
    }
}

module.exports = {userLogin};