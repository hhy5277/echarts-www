// Generated by CoffeeScript 1.9.3
(function() {
  define(function(require) {
    var colorLabel, exports, palette;
    palette = require('./palette');
    colorLabel = [['Red', 'A400'], ['Yellow', 'A200'], ['Blue', 'A400'], ['Grey', '400'], ['Light Blue', 'A400'], ['White'], ['Orange', 'A400'], ['Lime', 'A400'], ['Blue Grey', '200'], ['Teal', 'A400'], ['Cyan', 'A400'], ['Blue', '900'], ['Purple', '400'], ['Deep Orange', '300'], ['Purple'], ['Cyan'], ['Teal'], ['Green']];
    exports = {
      getItemColor: function(n) {
        var colors;
        colors = colorLabel.map(function(val) {
          return palette.get(val[0], val[1] || '');
        });
        if (n) {
          return colors.slice(0, n);
        } else {
          return colors.slice();
        }
      },
      getAxis: function() {
        return palette.get('White', 'Secondary Text');
      },
      getText: function() {
        return palette.get('White', 'Text');
      },
      getDefault: function() {
        return this.getItemColor();
      }
    };
    return exports;
  });

}).call(this);

//# sourceMappingURL=colors.js.map
