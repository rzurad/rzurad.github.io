(function () {
    "use strict";

    var WORKS = [{
            title: 'TEXTp',
            imageSrc: 'https://raw.githubusercontent.com/rzurad/TEXTp/master/public/assets/images/backgrounds/titanfall.png',
            href: 'https://rzurad.github.io/TEXTp',
            description: "Built an Ember-CLI app that converts any web-friendly image into <a href=\"http://youtube-global.blogspot.com/2010/03/textp-saves-youtube-bandwidth-money.html\" target=\"_new\">YouTube's 2010 April Fool's Joke</a>.",
            tags: ['Ember-CLI', 'Web Workers', 'HTML5 Canvas', 'Bootstrap', 'LESS'],
            date: '2014',
            className: 'textp'
        }, {
            title: 'Waveform',
            imageSrc: 'https://raw.githubusercontent.com/rzurad/waveform/master/test/examples/parachute_mono.png',
            href: 'https://github.com/rzurad/waveform',
            description: "Wrote a C program for FreeBSD that generates a waveform image of an audio file using ffmpeg's C libraries.",
            tags: ['C', 'ffmpeg', 'libpng'],
            date: '2014',
            className: 'waveform',
        }, {
            title: 'DS-Extensions',
            imageSrc: '',
            href: 'https://gist.github.com/rzurad/348c436ada5260ad16fe',
            description: 'Created a proof-of-concept for a shim library that augments Ember Data with support for sparse RecordArrays and paginated responses from the persistence layer.',
            tags: ['Ember Data', 'Ember.JS'],
            date: '2013',
            className: 'ds-extensions'
        }, {
            title: 'Wiredrive RSS Examples',
            imageSrc: '',
            href: 'https://github.com/wiredrive/wiredrive_rss',
            description: 'Wrote sample code for proxying and consuming Wiredrive Presentation RSS feeds.',
            tags: ['PHP', 'jQuery', 'Flash', 'RSS', 'JSONP'],
            date: '2013',
            className: 'rss'
        }, {
            title: 'Wiredrive Storage Report',
            imageSrc: '',
            href: 'http://www.wiredrive.com/10806/storage-usage-report/',
            description: 'Designed and built a usage statistics page to help Wiredrive administrators keep track of system storage and plan usage.',
            tags: ['YUI3', 'd3js'],
            date: '2013',
            className: 'wd-storage'
        }, {
            title: 'Wiredrive Wordpress Player',
            imageSrc: '',
            href: 'http://www.wiredrive.com/11471/updated-wiredrive-player-for-wordpress/',
            description: 'Built a Wordpress plugin that allows clients to embed Wiredrive Presentations into Wordpress-powered websites.',
            tags: ['PHP', 'jQuery', 'Adobe Strobe', 'HTML5 Video'],
            date: '2013',
            className: 'wiredrive-player'
        }, {
            title: "Wiredrive Reports",
            imageSrc: '',
            href: 'http://www.wiredrive.com/9152/software-release-new-wiredrive-reports/',
            description: 'Helped rewrite the web client of the Wiredrive reporting application, which allows clients to see layers of analytics information, from system activity to presentation sends/views.',
            tags: ['YUI3', 'Raphael.JS'],
            date: '2012',
            className: 'wd-reports'
        }, {
            title: 'Wiredrive Presentations',
            imageSrc: '',
            href: 'http://www.wiredrive.com/7611/new-presentations-are-here/',
            description: 'Helped rebuild the web client of Wiredrive Presentations, transitioning them from YUI2 to YUI3.',
            tags: ['YUI3'],
            date: '2012',
            className: 'wd-presentations'
        }, {
            title: 'Wiredrive Uploader',
            imageSrc: '',
            href: 'http://www.wiredrive.com/7227/introducing-the-new-html5-uploader/',
            description: 'Rebuilt the Wiredrive uploader to allow users to upload files into their Wiredrive system via an HTML5 drag-and-drop interface, Java, or old-school form posts.',
            tags: ['YUI3'],
            date: '2012',
            className: 'wd-upload'
        }, {
            title: 'Mahalo.com',
            imageSrc: '',
            href: '',
            description: 'Helped build the Mahalo 4.0 platform for the company\'s shift to focusing on creating "original how-to content."',
            tags: ['Django', 'jQuery', 'Backbone.JS'],
            date: '2011',
            className: 'Mahalo'
        }, {
            title: 'Pong',
            imageSrc: '',
            href: '',
            description: 'Wrote a Pong clone in Flash that does not believe in angles other than 90 degrees.',
            tags: ['Flash'],
            date: '2010',
            className: 'pong'
        }, {
            title: 'Midwest Copier Exchange',
            imageSrc: '',
            href: '',
            description: 'Built the web portal for Midwest Copier Exchange, a copier wholesaler, which consisted of a user portal, a message board, an an inventory tracking system.',
            tags: ['.NET 2.0'],
            date: '2009',
            className: 'midwest-copier'
        }, {
            title: "Black Mesa Flash Site",
            imageSrc: '',
            href: 'http://rzurad.github.com/black-mesa-flash-site',
            description: 'The original website for the Half-Life 2 remake project <a href="http://www.blackmesasource.com" target="_new">Black Mesa</a>.',
            tags: ['Flash'],
            date: '2004',
            className: 'black-mesa'
        }],

        columns = 0;

    function drawWorkGrid() {
        var $gridContainer = $('.work-grid'),
            $columns,
            i;

        $gridContainer.attr('data-columns', columns);
        $gridContainer.empty();

        for (i = 0; i < columns; i++) {
            $gridContainer.append('<div class="column"></div>');
        }

        $columns = $gridContainer.find('.column');

        for (i = 0; i < WORKS.length; i++) {
            $($columns[i % columns]).append([
                '<div class="work">',
                    '<h4><a href="', WORKS[i].href, '" target="_new">', WORKS[i].title, '</a></h4>',
                    '<a href="', WORKS[i].href, '" target="_new">',
                        '<div class="image ', WORKS[i].className, '"></div>',
                    '</a>',
                    '<p>', WORKS[i].description, '</p>',
                    '<span class="tag-date">', WORKS[i].date, '</span> ',
                        WORKS[i].tags.map(function (tag) {
                            return '<span class="tag">' + tag + '</span> ';
                        }).join(''),
                    '</h5>',
                '</div>'
            ].join(''));
        }
    }

    function resize() {
        var newColumns = Math.floor($('.container').width() / 300);
        
        if (columns !== newColumns && newColumns > 0) {
            columns = newColumns;
            drawWorkGrid()
        }
    }

    $(window).on('resize', resize);
    resize();
}());
