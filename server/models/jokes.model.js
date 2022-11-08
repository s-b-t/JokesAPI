const mongoose = require('mongoose');

// Create a Schema for Jokes

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, '* Joke setup is required!'],
        minlength: [10, '* Joke setup must be 10 characters!']
    },
    punchline: {
        type: String,
        required: [true, '* Joke punchline is required!'],
        minlength: [3, '* Joke punchline must be 3 characters!']
    }
}, {timestamps: true});

// create a constructor function for our model and store in variable 'Joke'
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;