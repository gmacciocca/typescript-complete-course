
class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) : void { // should create a new key-value pair
        this.map[key] = item;
    }
    
    getItem(key: string) : T { // should retrieve the value of the provided key
        return this.map[key];
    }
    clear() : void { // should remove all key-value pairs
        this.map = {};
    }
    printMap() : void { // should output key-value pairs
        Object.keys(this.map).forEach((key, index) => {
            console.log(`(${index}) ${key} = ${this.map[key]}`);
        })
        for(let key in this.map) {
            console.log(`${key} = ${this.map[key]}`);
        }
    }
}

// The map should be usable like shown below:
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
