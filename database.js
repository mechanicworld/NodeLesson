const fs = require('fs')

const save = function(filename, data){
    
    fs.writeFile(filename, JSON.stringify(data))
}
const load = function(filename, callback){
    fs.readFile(filename, 'utf-8', (err, file) => {
        if(err) {
            console.log('there is a read error!')
            callback(err)
            return
        }
        
        callback(null, JSON.parse(file));
        
    })
}

module.exports = {save, load}

