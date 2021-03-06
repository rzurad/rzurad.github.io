window.rz = {
    WORKS: [{
        title: 'Dagger',
        imageSrc: './assets/img/dagger.png',
        description: 'Built a proof-of-concept for a distributed task processing pipeline for media encoding services. Tasks are organized in Directed Acyclic Graphs and executed asynchrnously via a cluster of workers.',
        tags: ['Java', 'AMQP', 'Redis'],
        date: '2018',
        className: 'dagger'
    }, {
        title: 'FFmpeg CUDA Overlay Filter',
        imageSrc: './assets/img/cuda.png',
        description: 'Created a CUDA accelerated video alpha blending filter for ffmpeg which operates ~3x faster than its CPU counterpart.<br><br>It was here two of my addictions, ffmpeg and computer graphics, combined forces in Trainspotting proportions...<a href="https://www.youtube.com/watch?v=jQvUBf5l7Vw" target="_blank">&lt;cue music&gt;</a>',
        tags: ['C', 'ffmpeg', 'H.264', 'CUDA', 'NVENC', 'NVDEC'],
        date: '2017',
        className: 'gpu'
    }, {
        title: 'Grauman File Viewer',
        imageSrc: './assets/img/grauman.png',
        href: 'http://github.com/shiftio/grauman',
        description: 'Built an <a target="_new" href="https://shiftio.github.io/grauman/test/">HTML5 MediaPlayer and file viewer</a> supporting 360 video, progressive HTML5 video and audio, HLS, PDF documents, and images.',
        tags: ['JavaScript', 'Mithril.js', 'Sass', 'WebGL', 'HLS', 'HTML5 Audio', 'HTML5 Video', 'PDF.js'],
        date: '2017',
        className: 'grauman'
    }, {
        title: 'Campfire',
        imageSrc: './assets/img/campfire.png',
        description: 'Built a digital event dashboard for <a target="_blank" href="http://www.northsyracusefire.com/">North Syracuse\'s Bravest.</a><br><br>It\'s a simple dashboard that lets fire stations easily display event schedules, which frees them up to do what they do best: being absolute badasses.',
        tags: ['JavaScript'],
        date: '2017',
        className: 'campfire'
    }, {
        title: 'Wiredrive Ingest',
        imageSrc: './assets/img/thumbnailer.png',
        description: 'Rewrote and supported the File Ingest service, adding support for video file proxy generation and 360 video.<br><br>This space intentionally left blank for a future snarky, sarcastic non-sequitur.',
        tags: ['PHP', 'ffmpeg', 'C', 'ImageMagick', 'AMQP'],
        date: '2016',
        className: 'thumbnailer'
    }, {
        title: 'Wiredrive Users',
        imageSrc: './assets/img/wd-users.png',
        href: 'http://www.wiredrive.com',
        description: 'Rebuilt <a target="_new" href="http://www.wiredrive.com/">Wiredrive\'s</a> User Management portal in Ember-CLI.<br><br>It was here one could kick back and enjoy some of the finer tasks of User management: searching and assigning work, managing access roles, and, when called upon, occasionally hack the Gibson.',
        tags: ['JavaScript', 'Ember-CLI', 'Bootstrap', 'LESS'],
        date: '2016',
        className: 'wd-users'
    }, {
        title: 'Strengthenator',
        imageSrc: './assets/img/strengthenator.png',
        description: 'Made an Ember-CLI app that displays a leaderboard of client personal records for the <a target="_new" href="http://startingstrength.com/">Starting Strength</a> gym <a target="_new" href="http://www.hornstrength.com/">Horn Strength and Conditioning</a>.<br><br>The app polls a Google Spreadsheets data source and displays the ranks of various clients for various excercises.',
        tags: ['JavaScript', 'Ember-CLI', 'Bootstrap', 'LESS'],
        date: '2016',
        className: 'strengthenator'
    }, {
        title: 'Minesweeper',
        imageSrc: './assets/img/minesweeper.png',
        href: 'http://bl.ocks.org/rzurad/raw/1dd154d072a1f1fba32a/',
        description: '"I\'m bored. I\'ll play <a href="https://en.wikipedia.org/wiki/Microsoft_Minesweeper" target="_new">Minesweeper</a> to kill time...Hmm, Windows doesn\'t seem to come with it installed anymore...It\'s a simple enough game, I wonder how long it would take to make a Minesweeper clone..."<br><br>It turns out that a basic working clone can be made in about an hour and a half. Though it\'ll take the rest of the day to polish it up.',
        tags: ['JavaScript', 'jQuery', 'Bootstrap'],
        date: '2015',
        className: 'minesweeper'
    }, {
        title: 'QC Generator',
        imageSrc: './assets/img/qc-generator.png',
        href: 'http://rzurad.github.io/qc-generator',
        description: 'Built a prototype web application to help the process of compiling 3d models into <a href="http://www.valvesoftware.com/" target="_blank">Valve Software\'s</a> <a href="https://developer.valvesoftware.com/wiki/SDK_Docs" target="_blank">Source Engine</a> by providing an interface for creating QC files.<br><br>Being a proof of concept, it lacks many of the commands necessary to create advanced QC files.',
        tags: ['JavaScript', 'Ember CLI', 'Bootstrap', 'LESS'],
        date: '2015',
        className: 'qc-generator'
    }, {
        title: 'KXBM.net',
        imageSrc: './assets/img/kxbm.png',
        href: 'http://rzurad.github.io/bmrf.us',
        description: 'Built a series of fake websites for <a href="http://www.blackmesasource.com/" target="_new">Black Mesa</a>. For what purpose? I trust it will all makes sense to you in the course of... well... I\'m really not at liberty to say.<br><br>Shortly after release, subsequently learned what it feels like to watch the internet <a href="https://www.youtube.com/watch?v=lTxvGQeZbmo" target="_new">tear</a> <a href="http://www.reddit.com/r/Games/comments/2wgzfi/the_black_mesa_website_has_changed_again" target="_new">apart</a> <a href="http://forums.blackmesasource.com/index.php/Thread/13735-ARG-The-Pizza-Code-Mystery/?pageNo=126&s=945b1016c4c00e5263723f4a54f6ad6d41d6d464" target="_new">your</a> <a href="http://www.pcgamer.com/mysterious-countdown-clock-appears-for-black-mesa/" target="_new">work</a> <a href="http://www.ign.com/articles/2015/05/01/half-life-remake-website-is-counting-down-to-something" target="_new">looking</a> <a href="http://www.escapistmagazine.com/news/view/140665-Black-Mesa-Mod-Has-Mysterious-Countdown" target="_new">for</a> clues.',
        tags: ['JavaScript', 'jQuery', 'WebGL', 'HTML5 Audio', 'Bootstrap', 'ffmpeg'],
        date: '2015',
        className: 'kxbm.net'
    }, {
        title: 'Selective Transcode',
        imageSrc: './assets/img/selective-transcode.png',
        href: 'http://www.wiredrive.com/15492/smooth-playback/',
        description: 'Wrote a Python script that uses <a href="https://www.ffmpeg.org/" target="_new">ffmpeg</a> to selectively transcode/remux multimedia files into a format that is compatible with HTML5 Audio and Video playback specifications.<br><br>Written for <a href="http://www.wiredrive.com" target="_new">Wiredrive</a> to help ensure smooth plackback of all client media files.',
        tags: ['Python', 'ffmpeg', 'H.264/MPEG-4 AVC'],
        date: '2015',
        className: 'selective-transcode'
    }, {
        title: 'TEXTp',
        imageSrc: './assets/img/textp.png',
        href: 'https://rzurad.github.io/TEXTp',
        description: "Built an Ember-CLI app that converts any web-friendly image&mdash;including the background of this very website&mdash;into <a href=\"http://youtube-global.blogspot.com/2010/03/textp-saves-youtube-bandwidth-money.html\" target=\"_new\">YouTube's 2010 April Fool's Joke</a>.",
        tags: ['JavaScript', 'Ember-CLI', 'Web Workers', 'HTML5 Canvas', 'Bootstrap', 'LESS'],
        date: '2014',
        className: 'textp'
    }, {
        title: 'Tree of Life JSON',
        imageSrc: './assets/img/tree-of-life.jpg',
        href: 'http://github.com/rzurad/tree-of-life',
        description: 'Wrote a short Node.js script to convert XML data from the <a href="http://tolweb.org/tree/" target="_new">Tree of Life Web Project</a> into small, more compact JSON that can be loaded into a browser so I could experiment with data visualizations.<br><br>Learned that 200 MB of XML can be converted into 1 MB of gzipped JSON, and subsequently made a snarky comment at XML\'s expense.',
        tags: ['JavaScript', 'Node.JS'],
        date: '2014',
        className: 'tol'
    }, {
        title: 'Waveform',
        imageSrc: './assets/img/waveform.png',
        href: 'https://github.com/rzurad/waveform',
        description: 'Wrote a C program for FreeBSD that generates a waveform image of an audio file using ffmpeg\'s C libraries. Subsequently developed an unhealthy addiction to <a href="https://www.ffmpeg.org/" target="_new">ffmpeg</a>.<br><br>Currently being used by <a href="http://www.wiredrive.com/15498/waveform-audio-thumbnails-awesome/" target="_new">Wiredrive</a> to give users a visual representation of uploaded audio files.',
        tags: ['C', 'ffmpeg', 'libpng'],
        date: '2014',
        className: 'waveform'
    }, {
        title: 'DS-Extensions',
        imageSrc: './assets/img/ds-extensions.png',
        href: 'https://gist.github.com/rzurad/348c436ada5260ad16fe',
        description: 'Created a proof-of-concept for a shim library that augments <a href="http://emberjs.com/api/data/" target="_new">Ember Data</a> with support for sparse RecordArrays and paginated responses from the persistence layer.',
        tags: ['JavaScript', 'Ember.JS'],
        date: '2013',
        className: 'ds-extensions'
    }, {
        title: 'Wiredrive RSS Examples',
        imageSrc: './assets/img/rss.jpg',
        href: 'https://github.com/wiredrive/wiredrive_rss',
        description: 'Wrote sample code for proxying and consuming <a href="http://www.wiredrive.com" target="_new">Wiredrive</a> Presentation RSS feeds.',
        tags: ['PHP', 'JavaScript', 'jQuery', 'Flash'],
        date: '2013',
        className: 'rss'
    }, {
        title: 'Wiredrive Wordpress Player',
        imageSrc: './assets/img/wiredrive-player.jpg',
        href: 'http://www.wiredrive.com/11471/updated-wiredrive-player-for-wordpress/',
        description: 'Built a <a href="http://wordpress.org" target="_new">Wordpress</a> plugin that allows clients to embed <a href="http://www.wiredrive.com" target="_new">Wiredrive</a> Presentations into Wordpress-powered websites.',
        tags: ['PHP', 'JavaScript', 'jQuery', 'Flash', 'HTML5 Video'],
        date: '2013',
        className: 'wiredrive-player'
    }, {
        title: 'Wiredrive Storage Report',
        imageSrc: './assets/img/wd-storage.jpg',
        href: 'http://www.wiredrive.com/10806/storage-usage-report/',
        description: 'Designed and built a usage statistics page to help <a href="http://www.wiredrive.com" target="_new">Wiredrive</a> administrators keep track of system storage and plan usage.',
        tags: ['JavaScript', 'YUI3', 'd3js'],
        date: '2013',
        className: 'wd-storage'
    }, {
        title: 'fusion.js',
        imageSrc: './assets/img/fusion.png',
        href: 'https://github.com/rzurad/fusion',
        description: 'A JavaScript shim toolbelt to use ES5 conventions without having to worry about legacy browsers. Makes heavy use of the <a href="http://github.com/kriskowal/es5-shim" target="_new">es5-shim</a> library.<br><br>Project is unfinished as was abandoned shortly after beginning because I found myself in a position where I no longer needed to care about browsers that did not fully implement ES5 standards (it\'s nice here).',
        tags: ['JavaScript'],
        date: '2012',
        className: 'fusion'
    }, {
        title: "Wiredrive Reports",
        imageSrc: './assets/img/wd-reports.png',
        href: 'http://www.wiredrive.com/9152/software-release-new-wiredrive-reports/',
        description: 'Helped rewrite the web client of the <a href="http://www.wiredrive.com" target="_new">Wiredrive</a> reporting application, which allows clients to see layers of analytics information, from system activity to presentation sends/views.',
        tags: ['JavaScript', 'YUI3', 'Raphael.JS'],
        date: '2012',
        className: 'wd-reports'
    }, {
        title: 'g.raphael v0.5',
        imageSrc: './assets/img/g-raphael.png',
        href: 'https://github.com/DmitryBaranovskiy/g.raphael',
        description: 'Breifly helped maintain the <a href="http://g.raphaeljs.com/" target="_new">g.raphael</a> charting library for <a href="http://raphaeljs.com/" target="_new">Raphael.JS</a>. Refactored the code to work with Raphael 2 and upgraded it to version 0.5.<br><br>Shortly after shipping 0.5.1, I began having an affair with <a href="http://d3js.org" target="_new">d3js</a> and subsequently abandoned g.raphael due to lack of time.',
        tags: ['JavaScript', 'Raphael.JS'],
        date: '2011',
        className: 'g-raphael'
    }, {
        title: 'Wiredrive Presentations',
        imageSrc: './assets/img/wd-presentations.jpg',
        href: 'http://www.wiredrive.com/7611/new-presentations-are-here/',
        description: 'Helped rebuild the web client of <a href="http://www.wiredrive.com" target="_new">Wiredrive</a> Presentations, transitioning them from YUI2 to YUI3.',
        tags: ['JavaScript', 'YUI3'],
        date: '2012',
        className: 'wd-presentations'
    }, {
        title: 'Wiredrive Uploader',
        imageSrc: './assets/img/wd-upload.jpg',
        href: 'http://www.wiredrive.com/7227/introducing-the-new-html5-uploader/',
        description: 'Rebuilt the <a href="http://www.wiredrive.com" target="_new">Wiredrive</a> uploader to allow users to upload files into their Wiredrive system via an HTML5 drag-and-drop interface, Java, or old-school form posts.',
        tags: ['JavaScript', 'YUI3'],
        date: '2012',
        className: 'wd-upload'
    }, {
        title: 'Mahalo.com',
        imageSrc: './assets/img/mahalo.jpg',
        href: 'http://www.mahalo.com',
        description: 'Helped build the Mahalo 4.0 Django platform for creating and managing how-to content. Built parts of the "Pages" back-end and built the web front-end client/admin app for the Mahalo.com homepage.<br><br>While hired to help build out the Django back-end, quickly succumbed to a horrifying JavaScript addiction that, to this day, have yet to recover from.',
        tags: ['Python', 'Django', 'MySQL', 'JavaScript', 'jQuery', 'Backbone.JS'],
        date: '2011',
        className: 'Mahalo'
    }, {
        title: 'Pong',
        imageSrc: './assets/img/pong.jpg',
        href: '/pong/index.html',
        description: 'Wrote a Pong clone in Flash that does not believe in angles other than 90 degrees.',
        tags: ['Flash'],
        date: '2010',
        className: 'pong'
    }, {
        title: 'Midwest Copier Exchange',
        imageSrc: './assets/img/mwc.jpg',
        href: 'http://www.midwestcopier.com',
        description: 'Designed and built the web portal for copier wholesaler Midwest Copier Exchange, which consisted of a user portal, a message board, and an inventory tracking system.<br><br>Site has been reskinned since I last worked on it.',
        tags: ['.NET 2.0', 'MS SQL Server 2005', 'JavaScript'],
        date: '2009',
        className: 'midwest-copier'
    }, {
        title: "Black Mesa",
        imageSrc: './assets/img/black-mesa.png',
        href: '/black-mesa/index.html',
        description: 'Created the original website for the Half-Life 2 mod <a href="http://www.blackmesasource.com" target="_new">Black Mesa</a>, and subsequently learned what ranking 3rd place in ModDB\'s 2004 Best Website Award does to one\'s ego.',
        tags: ['Flash'],
        date: '2004',
        className: 'black-mesa'
    }, {
        title: 'Influence',
        imageSrc: './assets/img/influence.jpg',
        href: './assets/maps/influence.zip',
        description: 'Made a small <a href="http://store.steampowered.com/app/70/" target="_new">Half-Life Deathmatch</a> map set inside ancient ruins. Map showcases the accidental discovery that rocket launchers in small hallways are fun.',
        tags: ['Half-Life Deathmatch'],
        date: '2003',
        className: 'influence'
    }, {
        title: 'ka_moofed',
        imageSrc: './assets/img/ka_moofed.jpg',
        href: './assets/maps/ka_moofed.zip',
        description: 'Built a quick knife-only map for <a href="http://store.steampowered.com/app/10/" target="_new">Counter-Strike</a> for a LAN party. Map showcases a complete inability to think about gameplay mechanics and to instead care about overblown easter eggs.',
        tags: ['Counter-Strike'],
        date: '2002',
        className: 'moofed'
    }, {
        title: 'de_blaze',
        imageSrc: './assets/img/de_blaze.jpg',
        href: './assets/maps/de_blaze.zip',
        description: 'Created a bomb defusal map for <a href="http://store.steampowered.com/app/10/" target="_new">Counter-Strike</a> set in an Alaskan Telecommunications Facility. Map showcases what happens when you care more about the visuals than actual gameplay logistics.',
        tags: ['Counter-Strike'],
        date: '2002',
        className: 'blaze'
    }, {
        title: 'cs_pumpo',
        imageSrc: './assets/img/cs_pumpo.jpg',
        href: './assets/maps/cs_pumpo32.zip',
        description: 'Made a pump-shotgun only map for <a href="http://store.steampowered.com/app/10/" target="_new">Counter-Strike</a> inspired by cs_deagle5. Map showcases the only map I made that was actually fun to play.',
        tags: ['Counter-Strike'],
        date: '2002',
        className: 'pumpo',
    }, {
        title: 'cs_paraplace',
        imageSrc: './assets/img/cs_paraplace.jpg',
        href: './assets/maps/cs_paraplace.zip',
        description: 'Constructed an M249-only map for <a href="http://store.steampowered.com/app/10/" target="_new">Counter-Strike</a>. Map showcases why you should never build enemy spawn locations within sight of each other.',
        tags: ['Counter-Strike'],
        date: '2002',
        className: 'paraplace'
    }, {
        title: 'ka_iceberg',
        imageSrc: './assets/img/ka_iceberg.jpg',
        href: './assets/maps/ka_iceberg.zip',
        description: 'Built my first <a href="http://store.steampowered.com/app/10/" target="_new">Counter-Strike</a> map; a knife-only map set in an iceberg. Map showcases more evidence that the first map you make is absolutely terrible.',
        tags: ['Counter-Strike'],
        date: '2001',
        className: 'iceberg'
    }, {
        title: 'Tomb of the Unknown Somethings',
        imageSrc: './assets/img/unknown.png',
        description: 'This entry is for all the things that all of us have done which we are proud of, but due to various agreements (some <a target="_new" href="https://en.wikipedia.org/wiki/Non-disclosure_agreement">legal</a>, others a <a target="_new" href="https://en.wikipedia.org/wiki/Gentlemen%27s_agreement">gentleman\'s</a>) we can never talk about.<br><br>Buy me a beer and ask me about them sometime. I mean, I still won\'t tell you, but hey, cheer up! At least we\'ll have beer!',
        tags: ['REDACTED', 'REDACTED', 'REDACTED', 'REDACTED', '...'],
        date: 'Era Vulgaris',
        className: 'unknown'
    }]
};
