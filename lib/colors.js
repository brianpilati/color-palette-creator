function Colors() {
    init: {
        this.__initializeVariables();
    }
}

Colors.prototype = {
    __getBaseColor: function(red, green, blue) {
        return this.__convertToHex(
            red,
            green,
            blue
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

    __min3: function(a,b,c) {
        return (a<b)?((a<c)?a:c):((b<c)?b:c);
    },

    __max3: function(a,b,c) {
        return (a>b)?((a>c)?a:c):((b>c)?b:c);
    },

    __hueShift: function(h,s) {
        h+=s;
        while (h>=360.0) {
            h-=360.0;
        }

        while (h<0.0) {
            h+=360.0;
        }
        return h;
    },

    RGB2HSV: function() {
        hsv = new Object();
        max = this.__max3(this.__red,this.__green,this.__blue);
        dif = max - this.__min3(this.__red,this.__green,this.__blue);
        hsv.saturation=(max==0.0)?0:(100*dif/max);
        if (hsv.saturation==0) hsv.hue=0;
        else if (this.__red==max) hsv.hue=60.0*(this.__green-this.__blue)/dif;
        else if (this.__green==max) hsv.hue=120.0+60.0*(this.__blue-this.__red)/dif;
        else if (this.__blue==max) hsv.hue=240.0+60.0*(this.__red-this.__green)/dif;
        if (hsv.hue<0.0) hsv.hue+=360.0;
        hsv.value=Math.round(max*100/255);
        hsv.hue=Math.round(hsv.hue);
        hsv.saturation=Math.round(hsv.saturation);
        return hsv;
    },

    HSV2RGB: function(hsv) {
        var rgb=new Object();
        if (hsv.saturation==0) {
            rgb.r=rgb.g=rgb.b=Math.round(hsv.value*2.55);
        } else {
            hsv.hue/=60;
            hsv.saturation/=100;
            hsv.value/=100;
            i=Math.floor(hsv.hue);
            f=hsv.hue-i;
            p=hsv.value*(1-hsv.saturation);
            q=hsv.value*(1-hsv.saturation*f);
            t=hsv.value*(1-hsv.saturation*(1-f));
            switch(i) {
                case 0: rgb.r=hsv.value; rgb.g=t; rgb.b=p; break;
                case 1: rgb.r=q; rgb.g=hsv.value; rgb.b=p; break;
                case 2: rgb.r=p; rgb.g=hsv.value; rgb.b=t; break;
                case 3: rgb.r=p; rgb.g=q; rgb.b=hsv.value; break;
                case 4: rgb.r=t; rgb.g=p; rgb.b=hsv.value; break;
                default :
                    rgb.r=hsv.value; rgb.g=p; rgb.b=q;
            }
            rgb.r=Math.round(rgb.r*255);
            rgb.g=Math.round(rgb.g*255);
            rgb.b=Math.round(rgb.b*255);
        }
        return rgb;
    },

    __complementary: function() {
        temphsv = this.RGB2HSV();
        temphsv.hue = this.__hueShift(temphsv.hue, 180.0);
        return this.HSV2RGB(temphsv);
    },

    __addComplementary: function() {
        this.palette.complementary.primary = this.palette.monoChrome;

        temprgb = this.__complementary();

        this.palette.complementary.complementary.push(
            this.__getBaseColor(
                temprgb.r,
                temprgb.g,
                temprgb.b
            )
        );
    },

    generateColors: function() {
        this.palette.baseColor = this.__getBaseColor(
            this.__red,
            this.__green,
            this.__blue
        );
        this.palette.monoChrome.push(this.__getPrimaryTintColor());
        this.palette.monoChrome.push(this.__getSecondaryTintColor());
        this.palette.monoChrome.push(this.palette.baseColor);
        this.palette.monoChrome.push(this.__getPrimaryShadeColor());
        this.palette.monoChrome.push(this.__getSecondaryShadeColor());

        this.__addComplementary();
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
            monoChrome: [],
            complementary: {
                primary: [],
                complementary: []
            }
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
