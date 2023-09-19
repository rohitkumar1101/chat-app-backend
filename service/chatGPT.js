const sendMessage = (req, res) => {
    try {
        let data = req.body
        console.log('data: ', data);
        return res.status(200).send(data)
    } catch (error) {
        console.error(error)
    }
}

module.exports = { sendMessage }