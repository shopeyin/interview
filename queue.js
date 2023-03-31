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
        console.log(`here` + deleteItem)
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

// console.log(q.peek())
// console.log(`first `+ q.print())


// console.log(q.dequeue())
// console.log(q.size())

// console.log(q.print())
// console.log(q.isEmpty())


cartItems = [
    {id:1,name:'ola'},{id:2,name:'femi'}
]

item = {
    id:2,
    name:'bola'
}

const addItemToCart = (cartItems,item)=>{
  
    let existingItem = cartItems.find(cartItem => cartItem.id === item.id)
    

    if(existingItem){
        return cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...cartItems, { ...item, quantity: 1 }];
}

addItemToCart(cartItems,item)
console.log(cartItems)