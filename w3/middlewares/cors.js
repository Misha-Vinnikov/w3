const allowedCors = [
    'localhost:3000',
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
]

function cors (req, res, next) {
    const { origin } = req.header;

    if (allowedCors.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }

    next();
}

module.exports = cors;