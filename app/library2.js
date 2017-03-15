function Array(){
    this.myArray = []
    this.containsOdd = false
}

toTwenty.prototype = new Array();
toTwenty.prototype.constructor = toTwenty;
function toTwenty(){
Array.call(this);
    this.myArray=[]
    for(i=1; i<=20; i++)
      this.myArray.push(i);
    this.oneToTwenty = this.myArray
}

toForty .prototype = new Array();
toForty .prototype.constructor = toForty ;
function toForty (){
Array.call(this);
    this.myArray=[]
    for(i=2; i<=40; i+=2)
      this.myArray.push(i);
    this.twoToForty  = this.myArray

}


toOneThousand.prototype = new Array();
toOneThousand.prototype.constructor = toOneThousand ;
function toOneThousand (){
Array.call(this);

    this.myArray=[]
    for(i=10; i<=1000; i+=10)
      this.myArray.push(i);
    this.tenToOneThousand = this.myArray

}


Array.prototype.search = function(theNumber){
    this.count=0;
    this.index=0;
    this.length=0;

    mySqR = Math.sqrt(this.myArray.length)
    this.length=this.myArray.length
    var L=1
    var R = this.myArray.length-2
    var m=0;



    if(theNumber%2!=0 & this.containsOdd==false){
        this.count = 0; this.index=-1
        return {"count":this.count, "index":this.index, "length":this.length}
    }

     if(theNumber>this.myArray[this.myArray.length-1]){
         this.count = 0; this.index=-1
        return {"count":this.count, "index":this.index, "length":this.length}
    }
     if(theNumber == this.myArray[this.myArray.length-1]){
         this.count = 0; this.index=this.length-1
        return {"count":this.count, "index":this.index, "length":this.length}
     }
     if(theNumber == this.myArray[0]){
         this.count = 0; this.index=0
        return {"count":this.count, "index":this.index, "length":this.length}
     }
     else
    while(!(L > R)){
        var m = Math.floor((L+R)/2)
if (this.myArray[m] < theNumber){
            L =m+1
        }
        if (this.myArray[m] > theNumber){
            R = m-1
        }

        if(this.myArray[m] == theNumber)
        { 
            this.index=m
                return {"count":this.count, "index":this.index, "length":this.length}
            }
         
         this.count++           
    }
    this.count; this.index=-1
        return {"count":this.count, "index":this.index, "length":this.length}
     
}



function findMissing(arr1, arr2){
    myObject = Object.prototype.toString.call(arr1).split(" ")[1];
    myObject1 = Object.prototype.toString.call(arr2).split(" ")[1];


    if(myObject != "Array]")
        return "invalid input"

    if(myObject1 != "Array]")
        return "invalid input"

    arr1.sort(function (a,b){return a-b})
    arr2.sort(function (a,b){return a-b})

    if(arr1.length==[] & arr2.length == [])
        return 0
    if(arr1.length > arr2.length){
        for(i=0; i<arr2.length; i++)
                if(arr1[i] != arr2[i])
                    return arr1[i]
                return arr1[arr1.length-1]
            }

        else if(arr1.length < arr2.length){            
            for(i=0; i<=arr1.length; i++)
                if(arr2[i] != arr1[i])
                    return arr2[i]
                return arr2[arr2.length-1]
                    
        }
        else if (arr1.length == arr2.length)
            return 0

        else return 0
}

module.exports = {
    findMissing: findMissing,
    Array: Array,
    toTwenty: toTwenty,
    toForty: toForty,
    toOneThousand: toOneThousand
}
