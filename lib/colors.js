function Colors() {
    init: {
        this.__initializeVariables();
    }
}

Colors.prototype = {
    generateColors: function() {
        ra=Math.round(this.__red+(255-this.__red)*this.__primaryTint);
        ga=Math.round(this.__green+(255-this.__green)*this.__primaryTint);
        ba=Math.round(this.__blue+(255-this.__blue)*this.__primaryTint);

        rb=Math.round(this.__red+(255-this.__red)*this.__secondaryTint);
        gb=Math.round(this.__green+(255-this.__green)*this.__secondaryTint);
        bb=Math.round(this.__blue+(255-this.__blue)*this.__secondaryTint);

        rc=Math.round(this.__red*this.__primaryShade);
        gc=Math.round(this.__green*this.__primaryShade);
        bc=Math.round(this.__blue*this.__primaryShade);

        rd=Math.round(this.__red*this.__secondaryShade);
        gd=Math.round(this.__green*this.__secondaryShade);
        bd=Math.round(this.__blue*this.__secondaryShade);

        colora="("+ra+","+ga+","+ba+")";
        colorb="("+rb+","+gb+","+bb+")";
        colorc="("+this.__red+","+this.__green+","+this.__blue+")";
        colord="("+rc+","+gc+","+bc+")";
        colore="("+rd+","+gd+","+bd+")";

        console.log(colora);
        console.log(colorb);
        console.log(colorc);
        console.log(colord);
        console.log(colore);
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

        this.generateColors();
    }
}
