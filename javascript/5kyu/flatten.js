function flatten(...rest) {
    return rest.reduce((flat, value) => 
     typeof value === 'object' && value !== null?
                       flat.concat(flatten(...value)) 
                       : [...flat, value]
    , [])
    }