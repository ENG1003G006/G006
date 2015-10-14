function RecordingPage()

var latitude = 0;
var longitude = 0;

var self = this;
currentLocation = {latitude: [],longitude: []};



    this.RecordPageInitialised = function()
    {
        if (navigator.geolocation)

        navigator.geolocation.watchPosition(currentPos,errorPos,optionPos);

        else 
    {
        console.log('Error, browser does not support geolocation')
    }
    }
    
    function currentPos(pos){
        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude;
        
        posAccuracy = coords.accuracy.toFixed(2);
    }

    this.RecordPageButtons = function()
    {    
        var button1 = {
            title:'Start'
            id:'1'
        }
    
        var button2 = {
            title:'Stop'
            id:'2'
        }
        
        var button3 = {
            title:'Clear'
            id:'3'
        }
        
        var button4 = {
            title:'Save'
            id:'4'
        }
    }
        
    this.RecordButtonsPressed = function(buttonId)
    
    
