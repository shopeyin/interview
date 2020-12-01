class  Stack{
    constructor(){
        this.items = []
        this.count = 0
    }

    push(element){
     this.items[this.count] = element
     console.log(element,this.count)
     this.count++
   
     return this.count - 1
     
    }

  

    pop(){
        if(this.count === 0 ) return undefined
        let deleteItem = this.items[this.count-1]
        this.count--
        console.log(`${deleteItem} remved`)
        return deleteItem
    }

    peek(){
        return this.items[this.count - 1]
    }

    isEmpty(){
         console.log(this.count === 0 ?'STACK IS EMPTY' : 'NOT EMPTY')
        return this.count == 0 
    }

    size(){
        return this.count
    }


    checkBracket(arg){
        for (let i = 0; i < arg.length; i++) {
          if(arg.charAt(i)==='{' || arg.charAt(i)==='(' || arg.charAt(i)==='[' ){
              console.log('push here')
            this.push(arg.charAt(i))
          }else{
            console.log('pop here')
              if((arg.charAt(i)==='}' && this.pop() !=='{') || (arg.charAt(i)===')' && this.pop() !=='(') || (arg.charAt(i)===']' && this.pop() !=='[')  ){
                  return false
              }
          }
            
        }

        
        if(this.count > 0){
            return false
        }

        return true
    }   

    print(){
        let str = ''
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
            
        }
        return str
    }

    clear(){
        this.items = []
        this.count = 0
        return this.items
    }
}

const stack = new Stack()

// stack.push(100)

// stack.push(200)
// stack.pop()
// console.log(stack.size())
// //stack.pop()
// console.log(stack.print())
console.log(stack.checkBracket('()]'))
// stack.pop()
//  let a  = [1,2,3]
// a.splice(1,0,'a')
// console.log(a)
// let a  = [1,2,3]
// let z = a.splice(-3,1)
// console.log(z)


