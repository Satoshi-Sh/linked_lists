function Node(value=null,nextNode=null){
    return {
    value:value,
    nextNode:nextNode
    }
}

function LinkedList(){
    return {
        fullList:[],
        append(node){
          const last = this.fullList.at(-1)  
          if (last){
          last.nextNode= node
          }
          this.fullList.push(node);
          return;
        },
        prepend(node){
          node.nextNode=this.fulllist.at(0)
          this.fullList.unshift(node);
          return;
        },
        size(){
            return this.fullList.length;
        },
        head(){
            return this.fullList.at(0)
        },
        tail(){
            return this.fullList.at(-1)
        },
        at(index){
            return this.fullList.at(index);
        },
        pop(){
            this.fullList.pop();
            const last = this.fullList.at(-1);
            last.nextNode= null;
            return this.fullList;
        },
        contains(value){
            let ls = []
            for (let i of this.fullList){
                ls.push(i.value)
            }
            return ls.includes(value);
        },
        find(value){
            let ls = []
            for (let i of this.fullList){
                ls.push(i.value)
            }
            console.log(ls)
            function check (x){
                return value==x;
            }
            return ls.findIndex(check)
        },
        toString(){
            let string =''
            let current = this.fullList.at(0)
            while (current.nextNode) {
                    string += `${current.value} -> `
                    current = current.nextNode
            }
            string += 'null'
            return string
        },
        //extra credit 
        insertAt(value,index)
        {   
            if(index> this.fullList.length){
                console.log('Out of range')
                return;
            }
            const next = this.fullList.at(index)
            const node= Node(value,next)
            this.fullList.splice(index,0,node)
            if(index-1>=0){
            const before = this.fullList.at(index-1)
            before.nextNode=node;
            }
        },
        removeAt(index){
        if (index==0){
            this.fullList.splice(index,1)
        }
        else {
            const deleted =this.fullList.splice(index,1)
            const before = this.fullList.at(index-1);
            before.nextNode= deleted[0].nextNode;

        }
        }
        
    }

}


//test 
function makeList(){
let linked = LinkedList();
for (let i=0;i<10;i++){
 const node = Node(i,)
 linked.append(node)
}
 return linked
}
linked = makeList()

// insert test
//linked.insertAt(5,5)
//console.log(linked.fullList)

// removeAt test

//linked.removeAt(5);
//console.log(linked.toString())


// pop test 
//linked.pop() 
//console.log(linked.toString()) removed 

//contains test
//console.log(linked.contains(2))
//console.log(linked.contains('a'))

// findIndex test
//console.log(linked.find(2))  ->2
//console.log(linked.find('a')) ->-1

//general
//console.log(linked.size())
//console.log(linked.head())
//console.log(linked.tail())
//console.log(linked.at(5));
