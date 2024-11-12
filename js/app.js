/**
 * Objects
 * 
 * In JS, EVERYTHING is an object!!
 * 
 * Javascript is what is called an object-oriented programming language
 * 
 * With objects we can not only store data, but we can classify it
 * 
 * Syntax:
 * 
 *      let objName = {
 *          property: value,
 *          key: value
 *      }
 * 
 * Objects are not iterable
 */



// console.log(console)

// build a me object
let me = {
    myName: {
        first: 'Herbert',
        last: 'Brown',
        nicknames: ['Coach', 'Satch']
    },
    age: 45,
    occupation: 'Professor of Awesomeness',
    "children": ["Y'Sonni", "Josiah"],
    favs: {
        food: 'tacos',
        sportsTeams: {
            nfl: 'Dallas Cowboys',
            nba: 'Los Angeles Lakers',
            mlb: 'Los Angeles Dodgers',
            nhl: 'Edmonton Oilers',
            wnba: 'Las Vegas Aces',
            mls: 'Atlanta United',
            premierLeague: 'Wolverhampton'
        },
        musician: 'Nicholas Payton'
    },
    hobbies: ['Coding', 'Reading', 'Collecting Vinyl', 'DJing', 'Cooking'],
    isAwesome: true,
    tattoos: null,
    greeting: function() {
        var message = `My name is ${this.myName.first} ${this.myName.last}, but you can call me ${this.myName.nicknames[1]} and I am ${this.age} years old today! Happy Satchmas!`

        console.log(message);
        return message
    },
    "movies I like": ['Black Dynamite', 'The Wiz', 'Grumpy Old Men', 'Birdemic']
}

console.log(me)

// Access Data from an Object

// Dot notation => obj.key
console.log(me.age)

console.log(me.children)

// Bracket notation => obj[key]
console.log(me["movies I like"])

const movies = 'movies I like'
console.log(me[movies]); // []
console.log(me.movies) // undefined

console.log(me.hobbies)

// access DJing
console.log(me.hobbies[3])

// console.log(me.greeting());
me.greeting()

const greeting =()=> {
    console.log('I am a function, not a method')
}

greeting()

/* 
    Updating objects

    obj.key = new value
*/

me.favs.food = 'sushi'

console.log(me)

me.shoeSize = 12

/**
 * Object.freeze() & Object.seal()
 * 
 * Object.seal() seals an object. Prevents extensions and makes existing properties non-configurable
 *
 * 
 * Object.freeze() freezes an object. Prevents extensions and makes existing properties non-configurable AND non-writable
 */

Object.seal(me)

me.hand = 'right'

console.log(me.hand)

Object.freeze(me)

me.isAwesome = false

console.log(me);

/**
 * Build an object of a favorite movie, tv, or video game character. Include a method that returns a message pertaining to the character
 */

let movie = {
    title: 'Planet of the Apes',
    genre: ['action', 'sci-fi', 'drama'],
    yearReleased: 1968,
    rating: 'G',
    mainCast: ['Charlton Heston', 'Roddy McDowell', 'Kim Hunter', 'Maurice Evans'],
    director: 'Franklin Schaffner',
    plot: 'Finally the apes save humanity from their wretched selves',
    givePlot: function() {
        console.log(`${this.title} is a movie from the year ${this.yearReleased}. ${this.plot}.`)
    }
}

movie.givePlot()

/**
 * Classes => Classes are objects whose properties can be passed on to other containers.
 * 
 * Syntax: 
 * 
 *      class ClassName {
 *          constructor() {
 *              key = value
 *              key = value
 *          }
 *          method() {
 *              // do stuff
 *          }
 *          method() {
 *              // do stuff
 *          }
 *      }
 */

// Build Animal class 
class Animal {
    constructor() {
        //  contains properties that are accessible on the load
        this.hair = false,
        this.name,
        this.canFly,
        this.size,
        this.diet,
        this.legs,
        this.eyes,
        this.sound
    }

    makeSound() {
        console.log(`The ${this.name} sounds like this: ${this.sound}`)
    }
}

// create an instance of the Animal object and pass it into a container
const horse = new Animal()
const dog = new Animal()
const orangutan = new Animal()

horse.sound = 'neigh'
dog.sound = 'woof'
orangutan.sound = 'HOOOOO'

horse.name = 'horse'
dog.name = 'dog'
orangutan.name = 'orangutan'

console.log(orangutan);

orangutan.makeSound()
dog.makeSound()