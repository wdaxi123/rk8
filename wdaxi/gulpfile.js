var gulp = require('gulp')

var server = require('gulp-webserver');

var data = [{
        title: "满300减30",
        img: "img/img (1).jpg",
        price: 489
    },
    {
        title: "满300减50",
        img: "img/img (2).jpg",
        price: 599
    },
    {
        title: "3件8折",
        img: "img/img (3).jpg",
        price: 354
    },
    {
        title: "满999减100",
        img: "img/img (4).jpg",
        price: 1299
    },
    {
        title: "满五免一",
        img: "img/img (5).jpg",
        price: 312
    }, {
        title: "4件7折",
        img: "img/img (6).jpg",
        price: 4586
    },
]


gulp.task('default', function() {
    gulp.src('src')
        .pipe(server({
            port: 6060,
            open: true,
            middleware: function(req, res, next) {
                var pathname = require('url').parse(req.url, true).pathname;
                pathname = pathname == '/' ? '/index.html' : pathname;
                if (req.url === '/favicon.ico') {
                    return;
                }
                if (req.url === '/api/list') {
                    res.end(JSON.stringify(data))
                }
                next();
            }
        }))
})