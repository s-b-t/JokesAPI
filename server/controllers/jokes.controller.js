const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allTheJokes => res.json({jokes: allTheJokes}))
    .catch(err => res.json({message: 'Something went wrong retrieving ALL JOKES!', error: err}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findById(req.params._id)
    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err => res.json({message: 'Something went wrong retrieving ONE JOKE!', error: err}))
}

// module.exports.findRandomJoke = (req, res) => {
    //     Joke.findRandom
    // }
    
    module.exports.createJoke = (req, res) => {
        Joke.create(req.body)
        .then(createAJoke => res.json({joke: createAJoke}))
        .catch(err => res.json({message: 'Something went wrong CREATING A JOKE!', error: err}))
    }
    
    module.exports.updateJoke = (req, res) => {
        Joke.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true, runValidators: true})
            .then(updatedJoke => res.json({joke: updatedJoke}))
            .catch(err => res.json({message: 'Something went wrong UPDATING A JOKE!', error: err}));
        }
        
        module.exports.deleteJoke = (req, res) => {
            console.log('You\'ve Made It Big!!!')
            Joke.findByIdAndDelete(req.params._id)
            .then(result => res.json({result: result}))
            .catch(err => res.json({message: 'Something went wrong DELETING A JOKE!', error: err}));
        }

        // --- GET RANDOM JOKE ---
        module.exports.findRandomJoke = (req, res) => {
            Joke.find({})
            .then(allJokes => {
                const randIdx = Math.floor(Math.random() * allJokes.length)
                const randJoke = allJokes[randIdx];
                console.log(randIdx, randJoke)
                return res.json(randJoke)
            })
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
        }
