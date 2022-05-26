let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
array.sort((a,b) => {return a-b});

let ans = [];

let i = 0, j = 0;


function answer(array){
	
	while(i < array.length){
		while(array[i] == array[j]){
			j++;
		}
		let temp = array.slice(i, j);
		i = j;
		if(temp.length > 1){
			ans.push(temp);
		}
		else{
			ans.push(temp[0]);
		}
	}
}

function sum(array){
	let sum = 0;
	for(item of array){
		sum += item;
	}
	
	return sum;
}

answer(array);
sum(array);
console.log(ans);
console.log(array);
//adding some comments, the above naming convention can be changed
//adding one mre comment for merge conflict