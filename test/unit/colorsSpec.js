/* jasmine specs for colors.js go here */

describe('Colors', function() {
    var colors;

    beforeEach(function() {
        colors = new Colors();
    });

    describe('Initialized variables', function() {
        it('should have a default red color', function() {
            expect(colors.__red).toBe(255);
        });

        it('should have a default green color', function() {
            expect(colors.__green).toBe(0);
        });

        it('should have a default blue color', function() {
            expect(colors.__blue).toBe(0);
        });

        it('should have a default angle', function() {
            expect(colors.__angle).toBe(30.0);
        });

        it('should have a default primaryTint', function() {
            expect(colors.__primaryTint).toBe(0.8);
        });

        it('should have a default secondaryTint', function() {
            expect(colors.__secondaryTint).toBe(0.4);
        });

        it('should have a default primaryShade', function() {
            expect(colors.__primaryShade).toBe(0.6);
        });

        it('should have a default secondaryShade', function() {
            expect(colors.__secondaryShade).toBe(0.3);
        });

        it('should have a palette', function() {
            expect(colors.palette).toBeDefined();
        });
    });

    describe('palette colors', function() {
        it('should have a baseColor', function() {
            expect(colors.palette.baseColor).toBe('#FF0000');
        });

        describe('monoChrome', function() {
            it('should have a first color', function() {
                expect(colors.palette.monoChrome[0]).toBe('#FFCCCC');
            });

            it('should have a first color', function() {
                expect(colors.palette.monoChrome[1]).toBe('255,102,102');
            });

            it('should have a first color', function() {
                expect(colors.palette.monoChrome[2]).toBe('#FF0000');
            });

            it('should have a first color', function() {
                expect(colors.palette.monoChrome[3]).toBe('153,0,0');
            });

            it('should have a first color', function() {
                expect(colors.palette.monoChrome[4]).toBe('77,0,0');
            });
        });
    });
});
