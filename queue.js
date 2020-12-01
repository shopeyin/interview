class Queue{
    constructor(){
        this.items = []
        this.count=0
    }

    enqueue(val){
        // this.items.push(val)
        this.items[this.count] = val
        this.count++
        // console.log(this.items)
        return this.count-1
    }

    peek(){
        return this.items[0]
    }

    size(){
        return this.count
    }

    dequeue(){
        let deleteItem = this.items.shift()
        this.count--
        return deleteItem
    }

    isEmpty(){
        return this.count === 0
    }

    print(){
        let str = ''

        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + " " 
        }
        return str
    }

}


let q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

console.log(q.peek())
console.log(`first `+ q.print())



console.log(q.size())

console.log(q.print())
console.log(q.isEmpty())