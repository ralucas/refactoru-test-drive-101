var splice = function(arr, start, numToReplace, replace) {
    var spliceArr = [];
    var replaceArr = [];

    if(arguments.length > 3){
    	for(var l = 3; l < arguments.length; l++){
    		replaceArr.push(arguments[l]);
    	}
    }

    if(start > arr.length){
        start = arr.length;
    }

    var replaceEnd = start + replaceArr.length;

    if(replaceArr.length > 1){
    	replaceEnd = start + 1;
    }

    for(var i = 0; i < start; i++){
    	spliceArr.push(arr[i]);
    }

    for(var i = start; i < replaceEnd; i++){
    	for(var j = 0; j < replaceArr.length; j++){
    		spliceArr.push(replaceArr[j]);
    	}
    }

    for(i = (start+numToReplace); i < arr.length; i++){
    	spliceArr.push(arr[i]);
    }

	return spliceArr;
};