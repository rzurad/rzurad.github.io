(function () {
    "use strict";

    var columns = 0,
        WORKS = rz.WORKS,
        OTHER = rz.OTHER;

    function drawWorkGrid(data, selector) {
        var $gridContainer = $(selector),
            $columns, current, i;

        $gridContainer.attr('data-columns', columns);
        $gridContainer.empty();

        for (i = 0; i < columns; i++) {
            $gridContainer.append('<div class="column"></div>');
        }

        $columns = $gridContainer.find('.column');

        for (i = 0; i < data.length; i++) {
            current = data[i];

            $($columns[i % columns]).append([
                '<div class="work">',
                    '<h4>',
                        current.href ? '<a href="' + current.href + '" target="_blank">' : '',
                        current.title,
                        current.href ? '</a>' : '',
                    '</h4>',
                    current.href ? '<a href="' + current.href + '" target="_blank">' : '',
                        '<div class="image ', current.className, '"',
                             'style="background-image: url(\'', current.imageSrc, '\');">',
                        '</div>',
                    current.href ? '</a>' : '',
                    '<p>', current.description, '</p>',
                    '<span class="tag-date">', current.date, '</span> ',
                        current.tags.map(function (tag) {
                            return '<span class="tag">' + tag + '</span> ';
                        }).join(''),
                    '</h5>',
                '</div>'
            ].join(''));
        }
    }

    function resize() {
        var newColumns = Math.floor($('.container').width() / 290);
        
        if (columns !== newColumns && newColumns > 0) {
            columns = newColumns;
            drawWorkGrid(WORKS, '#works-grid');
        }
    }

    $(window).on('resize', resize);
    resize();
}());
