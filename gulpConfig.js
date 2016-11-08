module.exports.configs = {
    'default': {
        'src': 'scss/app.scss',
        'dest': 'css',
        'pipes': {
            'compass': { 'css': 'css', 'sass': 'scss'},
            'autoprefixer': {}
        }
    },
    'prod': {
        'src': 'scss/app.scss',
        'dest': 'css',
        'pipes': {
            'compass': { 'css': 'css', 'sass': 'scss'},
            'autoprefixer': {},
            'uglifycss': {},
            'rename': 'app.min.css'
        }
    }
};