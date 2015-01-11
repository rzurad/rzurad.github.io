(function () {
    "use strict";

    var WORKS = [{
            title: 'TEXTp',
            className: 'textp',
            imageSrc: 'https://raw.githubusercontent.com/rzurad/TEXTp/master/public/assets/images/backgrounds/titanfall.png',
            href: 'https://rzurad.github.io/TEXTp',
            description: "Ember-CLI app that converts any web-friendly image into <a href=\"http://youtube-global.blogspot.com/2010/03/textp-saves-youtube-bandwidth-money.html\" target=\"_new\">YouTube's 2010 April Fool's Joke</a>",
            tags: ['Ember-CLI', 'Web Workers', 'HTML5 Canvas', 'Bootstrap', 'LESS']
        }, {
            title: 'Waveform',
            imageSrc: 'https://raw.githubusercontent.com/rzurad/waveform/master/test/examples/parachute_mono.png',
            href: 'https://github.com/rzurad/waveform',
            description: "C program for FreeBSD that generates a waveform image of an audio file using ffmpeg's C libraries",
            tags: ['C', 'ffmpeg', 'libpng'],
            className: 'waveform',
        }, {
            title: 'DS-Extensions',
            imageSrc: '',
            href: 'https://gist.github.com/rzurad/348c436ada5260ad16fe',
            description: 'Proof-of-concept for a shim library that augments Ember Data with support for paginated responses from the persistence layer and sparse record arrays.',
            tags: ['Ember Data', 'Ember.JS'],
            className: 'ds-extensions'
        }, {
            title: 'Wiredrive Storage Report',
            imageSrc: '',
            href: 'http://www.wiredrive.com/10806/storage-usage-report/',
            description: 'A usage statistics page to help Wiredrive administrators keep track of system storage and plan usage.',
            tags: ['YUI3', 'd3js'],
            className: 'wd-storage'
        }, {
            title: 'Wiredrive Wordpress Player',
            imageSrc: '',
            href: 'http://www.wiredrive.com/11471/updated-wiredrive-player-for-wordpress/',
            description: 'A Wordpress plugin that allows clients to embed Wiredrive Presentations into Wordpress-powered websites.',
            tags: ['PHP', 'jQuery', 'Adobe Strobe', 'HTML5 Video'],
            className: 'wiredrive-player'
        }, {
            title: "Wiredrive Reports",
            imageSrc: '',
            href: 'http://www.wiredrive.com/9152/software-release-new-wiredrive-reports/',
            description: 'Rebuilt Wiredrive reporting application, allowing clients to see layers of analytics information, from system activity to presentation sends/views.',
            tags: ['YUI3', 'Raphael.JS'],
            className: 'wd-reports'
        }, {
            title: 'Wiredrive Presentations',
            imageSrc: '',
            href: 'http://www.wiredrive.com/7611/new-presentations-are-here/',
            description: 'Rebuilt Wiredrive Presentations.',
            tags: ['YUI3'],
            className: 'wd-presentations'
        }, {
            title: 'Wiredrive Uploader',
            imageSrc: '',
            href: 'http://www.wiredrive.com/7227/introducing-the-new-html5-uploader/',
            description: 'Rebuilt Wiredrive Uploader. Allows users to upload files into their Wiredrive system via an HTML5 drag-and-drop interface, Java, or old-school form posts.',
            tags: ['YUI3'],
            className: 'wd-upload'
        }, {
            title: "Black Mesa Flash Site",
            imageSrc: '',
            href: 'http://rzurad.github.com/black-mesa-flash-site',
            description: 'The original website for the Half-Life 2 remake project <a href="http://www.blackmesasource.com" target="_new">Black Mesa</a>.',
            tags: ['Flash', 'XML'],
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
                    '<div class="image ', WORKS[i].className, '"></div>',
                    '<p>', WORKS[i].description, '</p>',
                    '<div class="tags">',
                        WORKS[i].tags.map(function (tag) {
                            return '<span class="tag">' + tag + '</span> ';
                        }).join(''),
                    '</div>',
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
