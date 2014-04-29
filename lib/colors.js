function Colors() {
    init: {
        this.__initializeVariables();
    }
}

Colors.prototype = {
    __getBaseColor: function() {
        return this.__convertToHex(
            this.__red,
            this.__green,
            this.__blue
        );
    },

    __getPrimaryTintColor: function() {
        return this.__convertToHex(
            Math.round(this.__red+(255-this.__red)*this.__primaryTint),
            Math.round(this.__green+(255-this.__green)*this.__primaryTint),
            Math.round(this.__blue+(255-this.__blue)*this.__primaryTint)
        );
    },

    __getSecondaryTintColor: function() {
        return this.__convertToHex(
            Math.round(this.__red+(255-this.__red)*this.__secondaryTint),
            Math.round(this.__green+(255-this.__green)*this.__secondaryTint),
            Math.round(this.__blue+(255-this.__blue)*this.__secondaryTint)
        );
    },

    __getPrimaryShadeColor: function() {
        return this.__convertToHex(
            Math.round(this.__red*this.__primaryShade),
            Math.round(this.__green*this.__primaryShade),
            Math.round(this.__blue*this.__primaryShade)
        );
    },

    __getSecondaryShadeColor: function() {
        return this.__convertToHex(
            Math.round(this.__red*this.__secondaryShade),
            Math.round(this.__green*this.__secondaryShade),
            Math.round(this.__blue*this.__secondaryShade)
        );
    },

    generateColors: function() {
        this.palette.baseColor = this.__getBaseColor();
        this.palette.monoChrome.push(this.__getPrimaryTintColor());
        this.palette.monoChrome.push(this.__getSecondaryTintColor());
        this.palette.monoChrome.push(this.palette.baseColor);
        this.palette.monoChrome.push(this.__getPrimaryShadeColor());
        this.palette.monoChrome.push(this.__getSecondaryShadeColor());
    },

    __convertToHex: function(red, green, blue) {
        return "#" + this.toHex(red) +
            this.toHex(green) +
            this.toHex(blue);
    },

    toHex: function(number) {
        var hex = parseInt(number).toString(16).toUpperCase();
        if (parseInt(hex, 16) < 16) {
            hex = "0" + hex;
        }
        return hex;
    },

    __buildColorPalette: function() {
        return {
            baseColor: undefined,
            monoChrome: []
        }

    },

    __initializeVariables: function() {
        this.__red = 255;
        this.__green = 0;
        this.__blue = 0;
        this.__angle = 30.0;
        this.__primaryTint = 0.8;
        this.__secondaryTint = 0.4;
        this.__primaryShade = 0.6;
        this.__secondaryShade = 0.3;
        this.palette = this.__buildColorPalette();

        this.generateColors();
    }
}
