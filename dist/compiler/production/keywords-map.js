module.exports = {
    keywords: {
        'class Config': 'class cc',
        'static set': 'static s',
        'static get': 'static g',
        'static has': 'static h',
        'static extend': 'static e',
        'Config.data': 'cc.d',
        'Config.extend': 'cc.e',
        'Config.set': 'cc.s',
        'Config.get': 'cc.g',    
        'Config.has': 'cc.h',    
    },  
    // the prefix will be added in the production time, 
    // if the first prefix already exists then the compiler will try 
    // to check the next one and so on.
    // if no prefix is provied, then replacement will be done as written above.
    prefix: [], 
};