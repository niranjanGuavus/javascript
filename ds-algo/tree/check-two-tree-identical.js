
//solution with recursion 
function checkIdentical(x, y) {

    if(x == null && y == null) {
        return true;
    }

    return (x!= null && y!= null) && (x.value === y.value) && 
        checkIdentical(x.left, y.left) && checkIdentical(x.right, y.right);
}

//solution without recursion 
function checkSimilar(x, y) {

    if(x == null && y == null) {
        return true;
    }

    if(x == null || y == null){
        return false;
    }

    let nodeQueue = [[x,y]];

    while(nodeQueue.length>0) {
        const [n1, n2] = nodeQueue.shift();

        //check both node values
        if(n1.value !== n2.value){
            return false;
        }


        //check both node left node exist or not
        if(n1.left && n2.left) {
            nodeQueue.push([n1.left, n2.left]);
        } else {
            return false;
        }

        if(n1.right && n2.right) {
            nodeQueue.push([n1.right, n2.right]);
        } else {
            return false;
        }
    }

    return true;
}
