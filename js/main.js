(function () {
    "use strict";

    var columns = 0,
        WORKS = rz.WORKS;

    function drawWorkGrid() {
        var $gridContainer = $('.work-grid'),
            $columns, current, i;

        $gridContainer.attr('data-columns', columns);
        $gridContainer.empty();

        for (i = 0; i < columns; i++) {
            $gridContainer.append('<div class="column"></div>');
        }

        $columns = $gridContainer.find('.column');

        for (i = 0; i < WORKS.length; i++) {
            current = WORKS[i];

            $($columns[i % columns]).append([
                '<div class="work">',
                    '<h4>',
                        current.href ? '<a href="' + current.href + '" target="_new">' : '',
                        current.title,
                        current.href ? '</a>' : '',
                    '</h4>',
                    current.href ? '<a href="' + current.href + '" target="_new">' : '',
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
        var newColumns = Math.floor($('.container').width() / 300);
        
        if (columns !== newColumns && newColumns > 0) {
            columns = newColumns;
            drawWorkGrid()
        }
    }

    $(window).on('resize', resize);
    resize();
}());
