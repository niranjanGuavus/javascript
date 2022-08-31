
function treeTopView(node, dist, level, dic) {
   
    if(!node) return;

    if(dic.has(dist)) {
        const [v, l] = dic.get(dist);
        if(level < l) dic.set(dist, [node.value, level]);
    }else {
        dic.set(dist, [node.value, level]);
    }

    treeTopView(node.left, dist-1, level+1, dic);
    treeTopView(node.right, dist+1, level+1, dic);
}


let valueDic = new Map();
//find get tree top view values through iterate the valueDic
for (const [key, value] of valueDic) {
    console.log(value[0])
}


function treeBottomView(node, dist, level, dic) {
   
    if(!node) return;

    if(dic.has(dist)) {
        const [v, l] = dic.get(dist);
        if(level >= l) dic.set(dist, [node.value, level]);
    }else {
        dic.set(dist, [node.value, level]);
    }

    treeTopView(node.left, dist-1, level+1, dic);
    treeTopView(node.right, dist+1, level+1, dic);
}

