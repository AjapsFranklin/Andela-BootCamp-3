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
    var L=0
    var R = this.myArray.length-1
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