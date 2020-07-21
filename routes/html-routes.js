// Requiring path to so we can use relative routes to HTML files
const path = require('path');

module.exports = function(app) {

    app.get('/', (req, res) => {
        res.render('index',
            {
                data: 'handlebars are working',
                style: 'home.css',
                navLinkOne: 'about',
                navBtOne: 'About',
                navLinkTwo: 'portfolio',
                navBtTwo: 'Portfolio',
                navLinkThree: 'contact',
                navBtThree: 'Contact',
                footerClass: 'class="fixed-bottom"',
            });
    });

    app.get('/about', (req, res) => {
        res.render('about',
            {
                title: '| About',
                style: 'footer.css',
                navTheme: 'bg-dark',
                navLinkOne: '/',
                navBtOne: 'Home',
                navLinkTwo: 'portfolio',
                navBtTwo: 'Portfolio',
                navLinkThree: 'contact',
                navBtThree: 'Contact',
                footerClass: 'class="bottom bg-dark footer"'
            });
    });

    app.get('/portfolio', (req, res) => {
        res.render('portfolio',
            {
                title: '| Portfolio',
                style: 'footer.css',
                navTheme: 'bg-dark',
                navLinkOne: '/',
                navBtOne: 'Home',
                navLinkTwo: 'about',
                navBtTwo: 'About',
                navLinkThree: 'contact',
                navBtThree: 'Contact',
                footerClass: 'class="bottom bg-dark footer"'
            });

    });

    app.get('/contact', (req, res) => {
        res.render('contact',
            {
                title: '| About',
                style: 'footer.css',
                navTheme: 'bg-dark',
                navLinkOne: '/',
                navBtOne: 'Home',
                navLinkTwo: 'portfolio',
                navBtTwo: 'Portfolio',
                navLinkThree: 'about',
                navBtThree: 'About',
                footerClass: 'class="bg-dark footer"'
            });
    });
};