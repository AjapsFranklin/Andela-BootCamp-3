  
(function (){

    var myApp = require('../app/library2.js');
    var toTwenty = new myApp.toTwenty();
    var toForty = new myApp.toForty();
    var toOneThousand = new myApp.toOneThousand();


describe('Binary Search to traverse an ordered list, effectively', function() {
  describe('Populate the arrays with valid content', function() {
    
    it('should create an array from 1 to 20, with intervals of 1', function() {
      expect(toTwenty.oneToTwenty[0]).toBe(1);
      expect(toTwenty.oneToTwenty[19]).toBe(20);
      expect(toTwenty.oneToTwenty.length).toBe(20);
      for(var i = 0; i < toTwenty.oneToTwenty.length - 1;i++) {
        expect(toTwenty.oneToTwenty[i + 1] - toTwenty.oneToTwenty[i]).toBe(1);
      }
    });

    it('should create an array from 2 to 40, with intervals of 2', function() {
      expect(toForty.twoToForty[0]).toBe(2);
      expect(toForty.twoToForty[19]).toBe(40);
      expect(toForty.twoToForty.length).toBe(20);
      for(var i = 0; i < toForty.twoToForty.length - 1;i++) {
        expect(toForty.twoToForty[i + 1] - toForty.twoToForty[i]).toBe(2);
      }
    });

    it('should create an array from 10 to 10000, with intervals of 10', function() {
      expect(toOneThousand.tenToOneThousand[0]).toBe(10);
      expect(toOneThousand.tenToOneThousand[99]).toBe(1000);
      expect(toOneThousand.tenToOneThousand.length).toBe(100);
      for(var i = 0; i < toOneThousand.tenToOneThousand.length - 1;i++) {
        expect(toOneThousand.tenToOneThousand[i + 1] - toOneThousand.tenToOneThousand[i]).toBe(10);
      }
    });
  });

  describe('Get the index of the item with an expected number of loops in array [1, 2 . . . 20]', function() {

    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var search  = toTwenty.search(16);
      expect(search.count).toBeLessThan(5);
      expect(search.index).toBe(15);
    });

    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var search = toTwenty.search(33);
      expect(search.count).toBeLessThan(search.length);
      expect(search.index).toBe(-1);
    });
  });
  
  it('should not contain any form of `indexOf` in the search function', function() {
    expect(myApp.prototype.search.toString().indexOf('indexOf')).toBe(-1);      
  });
  
  describe('Get the index of the item with an expected number of loops in array [2, 4 . . . 40]', function() {

    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var search  = toForty.search(16);
      expect(search.count).toBeLessThan(5);
      expect(search.index).toBe(7);
    });

    it('should return {count: 0, index: 9} for 20', function() {
      var search  = toForty.search(20);
      expect(search.count).toBe(0);
      expect(search.index).toBe(9);
    });


    it('should return {count: 0, index: 19} for 40', function() {
      var search  = toForty.search(40);
      expect(search.count).toBe(0);
      expect(search.index).toBe(19);
    });

    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var search = toForty.search(33);
      expect(search.count).toBeLessThan(search.length);
      expect(search.index).toBe(-1);
    });
  });

  describe('Get the index of the item with an expected number of loops in array [10, 20 . . . 1000]', function() {

    it('should return {count: /* <= 3 */, index: 3} for 40', function() {
      var search  = toOneThousand.search(40);
      expect(search.count).toBeLessThan(4);
      expect(search.index).toBe(3);
    });

    it('should return {count: /* <= 5*/, index: 87} for 800', function() {
      var search  = toOneThousand.search(880);
      expect(search.count).toBeLessThan(6);
      expect(search.index).toBe(87);
    });

    it('should return {count: < /* array length */, index: -1} for 10000 ', function () {
      var search = toOneThousand.search(10000);
      expect(search.count).toBeLessThan(search.length);
      expect(search.index).toBe(-1);
    });

  });
});