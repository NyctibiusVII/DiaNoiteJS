$.fn.spectrum = function(options) {
    // Defining the variables
        var index = 0;
        var $element = $(this);

    // Array of Colours
        var colourArray = [
            //--color-1:            #ff4949;
            //--color-2:            #ff8c49;
            //--color-3:            #ffe449;
            //--color-4:            #8cff49;
            //--color-5:            #49ff95;
            //--color-6:            #49fff6;
            //--color-7:            #49adff;
            //--color-8:            #495bff;
            //--color-9:            #8f49ff;
            //--color-10:            #b649ff;
            //--color-11:            #db49ff;
            //--color-12:            #ff49e1;
            //--color-13:            #ff49ad;
            //--color-14:            #ff4986;
            //--color-15:            #ff4967;
            {
                src: 'colour1',
                colour: '#ff4949'
            },
            {
                src: 'colour2',
                colour: '#ff8c49'
            },
            {
                   src: 'colour3',
                colour: '#ffe449'
            },
            {
                src: 'colour4',
                colour: '#8cff49'
            },
            {
                src: 'colour5',
                colour: '#49ff95'
            },
            {
                src: 'colour6',
                colour: '#49fff6'
            },
            {
                src: 'colour7',
                colour: '#49adff'
            },
            {
                src: 'colour8',
                colour: '#495bff'
            },
            {
                src: 'colour9',
                colour: '#8f49ff'
            },
            {
                src: 'colour10',
                colour: '#b649ff'
            },
            {
                src: 'colour11',
                colour: '#db49ff'
            },
            {
                src: 'colour12',
                colour: '#ff49e1'
            },
            {
                src: 'colour13',
                colour: '#ff49ad'
            },
            {
                src: 'colour14',
                colour: '#ff4986'
            },
            {
                src: 'colour15',
                colour: '#ff4967'
            }
        ];

        //Use set interval to go through our colourArray
        //Each interval change the background colour of the element
        //Plugin is on, and increment the index.
        setInterval(function() {
            //Change background of selected $element to be
            //colourArray[index]
            //Increment index
            index = index + 1;
            //Make sure that index is not larger than the length of the colourArray
            //If so,
        }, 5000);

        // Create a style tag
        var style = $("<style>");

        for (var i = 0; i < colourArray.length; i++) {
            // Append a CSS rule to the style tag
            var currentColour = colourArray[i];
            var colorStyle =  " ."+currentColour.src+ " { background: "+currentColour.colour+"; } \n\n";

            style.append(colorStyle);
            // console.log(colourArray[i]);
        }; // end for loop

        var c = 0;
        var currentColour = setInterval(function(){
            // setColor();
            var className = colourArray[c].src;
            //console.log("We should change the class to ", className);
            $('#spectrumPlugin').removeClass().addClass(className + ' spectrumHeader');
            c++;

            if(c === colourArray.length) {
                c = 0;
            }
        }, 4000);

        // Appends the style tag in the body of the HTML document
        $('body').append(style);
    };