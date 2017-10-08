var config = require('./config');

function render(res, page, options) {
    var new_options = {
        title: config.app_title,
        author: config.author,
        description: config.description,
        layout: 'layout'
    }

    res.render(page, Object.assign(new_options, options));
}

module.exports = {
    render: render
}
