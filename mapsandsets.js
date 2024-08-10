new Set([1,1,2,2,3,4]) 
// returns [1,2,3,4]

[...new Set("referee")].join('')
// returns "r","e","f" / no 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

looks like m.set([1,2,3], false);

function hasDuplicate(arr){
    
let set = new Set(arr);

if(set.size === arr.length){return false;}

else {return true;}
}

function vowelCount(str){

    let map = new Map();

    let len = str.length;

    for( let i =0; i<len; i++){

        let char = str.charAt(i)

        if(map.has(char)){

            let value = map.get(char); 
            
            map.set(char,value+1);
        }
        else{
        map.set(char,1)
    }}

}