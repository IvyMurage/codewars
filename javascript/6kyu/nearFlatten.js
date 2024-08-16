function nearFlatten(nested) {
    return nested.reduce((flat, value) => 
            value.every(val => typeof val !== 'object') ? 
            flat.concat([value]) : flat.concat(nearFlatten(value))
            ,[]).sort((a, b) => a[0] - b[0])
    }