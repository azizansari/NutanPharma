


const test = async (req, resp) =>{
    const reqtype = req
    console.log(req.params );

    resp.json('success');
}

module.exports = {test}