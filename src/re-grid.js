'use strict';

/*
    Spectrum analyzer grid with markers and text labels
*/

const numToFreq = require('./num-to-freq');

module.exports = function ($) {
    return function Grid (props) {
        const w = props.width;
        const h = props.height;
        const xStep = w / 10;
        const yStep = h / 10;
        return (
            $('g', {},
                $('rect', {
                    x:0, y:0,
                    width: w, height: h,
                    stroke: '#bbb'
                }),
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
                    const x = (i * xStep) |0;
                    return $('line', {
                        x1: x, y1: 0,
                        x2: x, y2: h,
                        key: i,
                        stroke: (i === 5) ? '#bbb' : '#777'
                    });
                }),
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
                    const y = (i * yStep) |0;
                    return $('line', {
                        x1: 0, y1: y,
                        x2: w, y2: y,
                        key: i,
                        stroke: '#777'
                    });
                }),
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => {
                    const y = (i * yStep) |0;
                    return $('text', {
                        x: -5,
                        y: y + 4,
                        key: i,
                        textAnchor: 'end',
                        className: 'label'
                    }, -(i * 10));
                }),
                $('text', {
                    x: 4,
                    y: h + 20,
                    className: 'label',
                    textAnchor: 'start'
                }, numToFreq(props.center - props.span / 2)),
                $('text', {
                    x: w / 2,
                    y: h + 20,
                    className: 'label',
                    textAnchor: 'middle'
                }, numToFreq(props.center)),
                $('text', {
                    x: w - 4,
                    y: h + 20,
                    className: 'label',
                    textAnchor: 'end'
                }, numToFreq(props.center + props.span / 2))
            )
        );
    }
};
