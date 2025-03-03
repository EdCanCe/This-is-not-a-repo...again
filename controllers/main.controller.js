exports.get = (req, res, next) => {
    res.render('main');
}

exports.get_questions = (req, res, next) => {
    res.render('questions');
}

exports.get_about = (req, res, next) => {
    res.render('about');
}