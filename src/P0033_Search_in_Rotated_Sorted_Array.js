/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    if( nums === null || nums.length === 0)
    	return -1;

    if(nums.length <= 2){
    	if(nums[0] === target) 
    		return 0; 
    	else if(nums[1] === target)
    		return 1;
    	else
    		return -1;

    }

    var k =  nums.length - 2;
    
    while( k >=0 && nums[k] <= nums[k + 1]){
    	k--;
    }
  
    if(k >= 0){
    	if(target >= nums[0] && target <= nums[k]){
    		return binarySearch(nums , 0 , k , target);
    	}
    	else if(target >= nums[k+1] && target <= nums[nums.length - 1]){
    		return binarySearch(nums , k + 1 , nums.length  , target);
    	}
    	else{
    		return -1;
    	}

    } else {
     	return binarySearch(nums , 0 , nums.length - 1 , target);
    }	

    return -1;
};

var binarySearch = function(nums , l , r , target){
 var left = l , right = r , mid = l +  parseInt( (r - l) / 2);
  while(left <=  right){
  	if(target < nums[mid]){
  		right = mid  - 1;
  	}else if(target > nums[mid]){
  		left = mid + 1; 
  	} else if(target === nums[mid]) {
  		return mid;
  	}
  	mid = left + parseInt((right - left) / 2);
  }	
  return -1;
};

var nums  = [4, 5, 6, 7, 0, 1, 2] , target = 6;
var result = search(nums , target);
console.log(result);

nums  = [4, 5, 6, 7, 0, 1, 2] , target = 10;
result = search(nums , target);
console.log(result);

nums  = [4, 5, 6, 7, 0, 1, 2] , target = 0;
result = search(nums , target);
console.log(result);

nums  = [4, 5, 6, 7, 0, 1, 2] , target = 4;
result = search(nums , target);
console.log(result);

nums  = [1, 1, 3, 4, 5, 6, 7] , target = 7;
result = search(nums , target);
console.log(result); 

nums  = [3, 5, 1] , target = 1;
result = search(nums , target);
console.log(result); 

nums  = [5, 1, 3] , target = 5;
result = search(nums , target);
console.log(result);
