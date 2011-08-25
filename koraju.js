

//TODO
//Reverse chronological
//Don't show blanks
//Maybe define greyscale saturation
//Keep track of activated ones, delete them if not deleted

imageArray = new Array();
imageArray[0] = ["im.jpg", "nextTest"];
imageArray[1] = ["im.jpg", "nextTest"];
imageArray[2] = ["im.jpg", "nextTest"];
imageArray[3] = ["im.jpg", "nextTest"];
imageArray[4] = ["im.jpg", "nextTest"];
imageArray[5] = ["im.jpg", "nextTest"];
imageArray[6] = ["im.jpg", "nextTest"];
imageArray[7] = ["im.jpg", "nextTest"];
imageArray[8] = ["im.jpg", "nextTest"];
imageArray[9] = ["im.jpg", "nextTest"];
imageArray[10] = ["im.jpg", "nextTest"];
imageArray[11] = ["im.jpg", "nextTest"];
imageArray[12] = ["im.jpg", "nextTest"];
imageArray[13] = ["im.jpg", "nextTest"];
imageArray[14] = ["im.jpg", "nextTest"];
imageArray[15] = ["im.jpg", "nextTest"];
imageArray[16] = ["im.jpg", "nextTest"];
imageArray[17] = ["im.jpg", "nextTest"];
imageArray[18] = ["im.jpg", "nextTest"];
imageArray[19] = ["im.jpg", "nextTest"];
imageArray[20] = ["im.jpg", "nextTest"];
imageArray[21] = ["im.jpg", "nextTest"];
imageArray[22] = ["im.jpg", "nextTest"];
imageArray[23] = ["im.jpg", "nextTest"];
imageArray[24] = ["im.jpg", "nextTest"];
imageArray[25] = ["im.jpg", "nextTest"];
imageArray[26] = ["im.jpg", "nextTest"];
imageArray[27] = ["im.jpg", "nextTest"];
imageArray[28] = ["im.jpg", "nextTest"];
imageArray[29] = ["im.jpg", "nextTest"];
imageArray[30] = ["im.jpg", "nextTest"];
imageArray[31] = ["im.jpg", "nextTest"];
imageArray[32] = ["im.jpg", "nextTest"];
imageArray[33] = ["im.jpg", "nextTest"];
imageArray[34] = ["im.jpg", "nextTest"];
imageArray[35] = ["im.jpg", "nextTest"];
imageArray[36] = ["im.jpg", "nextTest"];
imageArray[37] = ["im.jpg", "nextTest"];
imageArray[38] = ["im.jpg", "nextTest"];
imageArray[39] = ["im.jpg", "nextTest"];
imageArray[40] = ["im.jpg", "nextTest"];
imageArray[41] = ["im.jpg", "nextTest"];
imageArray[42] = ["im.jpg", "nextTest"];
imageArray[43] = ["im.jpg", "nextTest"];
imageArray[44] = ["im.jpg", "nextTest"];
imageArray[45] = ["im.jpg", "nextTest"];
imageArray[46] = ["im.jpg", "nextTest"];
imageArray[47] = ["im.jpg", "nextTest"];
imageArray[48] = ["im.jpg", "nextTest"];
imageArray[49] = ["im.jpg", "nextTest"];
imageArray[50] = ["im.jpg", "nextTest"];
imageArray[51] = ["im.jpg", "nextTest"];
imageArray[52] = ["im.jpg", "nextTest"];
imageArray[53] = ["im.jpg", "nextTest"];
imageArray[54] = ["im.jpg", "nextTest"];
imageArray[55] = ["im.jpg", "nextTest"];
imageArray[56] = ["im.jpg", "nextTest"];
imageArray[57] = ["im.jpg", "nextTest"];
imageArray[58] = ["im.jpg", "nextTest"];
imageArray[59] = ["im.jpg", "nextTest"];
imageArray[60] = ["im.jpg", "nextTest"];
imageArray[61] = ["im.jpg", "nextTest"];
imageArray[62] = ["im.jpg", "nextTest"];
imageArray[63] = ["im.jpg", "nextTest"];
imageArray[64] = ["im.jpg", "nextTest"];
imageArray[65] = ["im.jpg", "nextTest"];
imageArray[66] = ["im.jpg", "nextTest"];
imageArray[67] = ["im.jpg", "nextTest"];

imageArray.reverse() // Should reverse it all if not assign

debug = 0               //Enable debug                      [0 or 1]
autoDetect = 1          //Enable auto detection of no rows  [0 or 1]
enable_opacity = 1      //Enable or Disable Opacity         [0 or 1]
opacmin = 0.5           //Minimum Opaticy                   [0 to 1]
thresh = 100            //Threshold till activation         [x]px
minsz = 50              //Sm Size of overall border + photo [x]px
minimsz = 25            //Sm Size of photo (< minsz)        [x]px
maxsz = 150             //Mx Size of overall border + photo [x]px
maximsz = 145           //Mx Size of photo (< maxsz)        [x]px
y = 200                 //Start position in x direction     [x]px
x = 100                 //Start position in y direction     [x]px
pad = 60               //Distance between center of boxes  [x]px
yn = 15                  //Number of images in y direction   [0 to 10]
if (autoDetect){
    xn = Math.ceil(imageArray.length / yn)
}
else{
xn = 4                  //Number of images in x direction   [0 to 10]
}
arr = new Array(xn)
activated = new Array()

jQuery(document).ready(function(){

if (debug){
$("body").append('<div id="borderTracker" style="border:1px solid #f00;width:'+(thresh*2)+';height:'+(thresh*2)+';position:absolute;top:0px;left:0px;z-index:99"></div>')
}

for (row = 0; row < xn; ++row)
{
	arr[row] = new Array(yn)
	for (col = 0; col < yn; ++col)
    {
        if ((row*yn+col) == imageArray.length){break}
		arr[row][col] = new Array(2)
		arr[row][col][0] = y + row * pad
		arr[row][col][1] = x + col * pad
        arr[row][col][2] = 0
        arr[row][col][3] = 0
        img = '<img id="imgger'+row+col+'" style="margin:'+Math.round((minsz-minimsz)/2)+'px;width:'+minimsz+'px;height:'+minimsz+'px" src="'+imageArray[(row*yn+col)][0]+'">' + (row*yn+col)
		$("body").append('<div id="divver'+row+col+'" style="top:'+(arr[row][col][0] - minsz/2)+'px;left:'+(arr[row][col][1]-minsz/2) +'px;width:'+minsz+'px;height:'+minsz+'px;z-index:0;background-color:rgb('+Math.round(row/xn*255)+','+Math.round(col/yn*255)+',0);position:absolute;">'+img+'</div>')
        if (enable_opacity) {$('#divver'+row+col).css('opacity', opacmin)}
	}
}

$(document).mousemove(function(e)
{


    
if (debug){

normX = e.pageX - x
normY = e.pageY - y

affectXSize = Math.round(((normX + thresh) - (normX - thresh)) / pad) + 1
affectYSize = Math.round(((normY + thresh) - (normY - thresh)) / pad) + 1
xstartBlock = Math.round((normX - thresh) / pad)
ystartBlock = Math.round((normY - thresh) / pad)

if (xstartBlock < 0){ xstartBlock = 0}
if (xstartBlock > yn){ xstartBlock = yn}
if (ystartBlock < 0){ ystartBlock = 0}
if (ystartBlock > xn){ ystartBlock = xn}

    document.getElementById("coords").innerHTML=e.pageX+","+e.pageY+
    "</br>Normalised:" + normX + "," + normY+
    "</br>Normalised +- thresh:(" + (normX - thresh) +","+ (normY - thresh)+ " " + (normX + thresh) +","+ (normY + thresh)+")"+
	"</br>Affected X Size:" + affectXSize +
    "</br>Affected Y Size:" + affectYSize +
    "</br>XStartBlock:"+ xstartBlock+
    "</br>YStartBlock:"+ ystartBlock+
    "</br>XEP:"+ (xstartBlock + affectXSize)+
    "</br>YEP:"+ (ystartBlock + affectYSize)
    $("#borderTracker").css('top', e.pageY - thresh + "px")
    $("#borderTracker").css('left', e.pageX - thresh + "px")
}

    for (row = 0; row < xn; ++row)
    {
		for (col = 0; col < yn; ++col)
        {
            arr[row][col][3] = arr[row][col][2]
            arr[row][col][2] = 0
            
            a = Math.sqrt( Math.pow(Math.abs(arr[row][col][0] - e.pageY), 2) + Math.pow(Math.abs(arr[row][col][1] - e.pageX), 2) )
            //$('#status').html(e.pageX +', '+ e.pageY+ ',' + a);
                if (a < thresh) 
            {
                //a = (Math.abs(y - e.pageY) + Math.abs(x - e.pageX)) / 2
                    szer = minsz + ((maxsz - minsz) * (1-(a / thresh)))
                    szimer = minimsz + ((maximsz - minimsz) * (1-(a / thresh)))
                    $('#divver'+row+col).css('width', szer + "px")
                    $('#divver'+row+col).css('height', szer + "px")
                    
                    $('#divver'+row+col).css('top', arr[row][col][0] - szer / 2 + "px")
                    $('#divver'+row+col).css('left', arr[row][col][1] - szer / 2 + "px")
                    $('#divver'+row+col).css('z-index', thresh - Math.round(a))

                    if (enable_opacity) {
                        $('#divver'+row+col).css('opacity', 1 - a/thresh + opacmin)
                    }

                    $('#imgger'+row+col).css('width', szimer + "px")
                    $('#imgger'+row+col).css('height', szimer + "px")
                    
                    $('#imgger'+row+col).css('margin', Math.round((szer - szimer) / 2) +"px")
                    arr[row][col][2] = 1
                    
            }

            if ((arr[row][col][3] == 1) && (arr[row][col][2] == 0)) {
                    $('#divver'+row+col).css('width', minsz + "px")
                    $('#divver'+row+col).css('height', minsz + "px")
                    $('#divver'+row+col).css('top', arr[row][col][0] - (minsz) / 2 + "px")
                    $('#divver'+row+col).css('left', arr[row][col][1] - (minsz) / 2 + "px")
                    
                    if (enable_opacity) {
                        $('#divver'+row+col).css('opacity', opacmin)
                    }
                    
                    $('#imgger'+row+col).css('width', minimsz + "px")
                    $('#imgger'+row+col).css('height', minimsz + "px")       
                    
                    $('#imgger'+row+col).css('margin', ((minsz - minimsz) / 2) +"px")   
            }
        }
    }

}); 
})
