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

    generateColors: function() {

        rb=Math.round(this.__red+(255-this.__red)*this.__secondaryTint);
        gb=Math.round(this.__green+(255-this.__green)*this.__secondaryTint);
        bb=Math.round(this.__blue+(255-this.__blue)*this.__secondaryTint);

        rc=Math.round(this.__red*this.__primaryShade);
        gc=Math.round(this.__green*this.__primaryShade);
        bc=Math.round(this.__blue*this.__primaryShade);

        rd=Math.round(this.__red*this.__secondaryShade);
        gd=Math.round(this.__green*this.__secondaryShade);
        bd=Math.round(this.__blue*this.__secondaryShade);

        colorb=+rb+","+gb+","+bb;
        colord=rc+","+gc+","+bc;
        colore=rd+","+gd+","+bd;

        this.palette.baseColor = this.__getBaseColor();

        this.palette.monoChrome.push(this.__getPrimaryTintColor());
        this.palette.monoChrome.push(colorb);
        this.palette.monoChrome.push(this.palette.baseColor);
        this.palette.monoChrome.push(colord);
        this.palette.monoChrome.push(colore);
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
