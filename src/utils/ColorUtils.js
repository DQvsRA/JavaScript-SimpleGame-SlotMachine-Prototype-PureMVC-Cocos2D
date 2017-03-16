/**
 * Created by dqvsra on 3/16/17.
 */
window.ColorUtils = {
    hexToRgb : function (hex, alpha) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return [r,g,b,alpha || 255];
    }
}