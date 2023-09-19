const OpenAI = require('openai')
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const sendMessage = async (req, res) => {
    try {
        let data = req.body

        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: data.message }],
            model: 'gpt-3.5-turbo',
        });

        return res.status(200).send(completion.choices)
    } catch (error) {
        console.error(error)
    }
}

module.exports = { sendMessage }