(function (ns, d3, _, $, undefined) {

    var helpers = {
        xScaleFactory: function (data, options) {
            // if we have dates in the x field of the data points
            // we need a time scale, otherwise is an oridinal
            // two ways to shape the data for time scale:
            //  [{ x: date, y: 1}, {x: date, y: 2}]
            //  [{ data: [ x: date, y: 1]}, {data: [x: date, y: 100]}]
            // if we get no data, we return an ordinal scale
            var isTimeData = _.isArray(data) && data.length > 0 && data[0].data ?
                data[0].data[0].x && _.isDate(data[0].data[0].x) :
                _.isArray(data) && data.length > 0 && data[0].x && _.isDate(data[0].x);

            return isTimeData && options.xAxis.type !== 'ordinal' ? new _.nw.TimeScale(data, options) : new _.nw.OrdinalScale(data, options);
        }

    };

    _.nw = _.extend({}, _.nw, helpers);

})('Narwhal', window.d3, window._, window.jQuery);