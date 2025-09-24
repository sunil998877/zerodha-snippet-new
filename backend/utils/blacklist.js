
const blacklist = new Set();

export const addToBlacklist = (token) =>{
      blacklist.add(token);
};

export const isBlacklist = (token) =>{
    
    return blacklist.has(token);
}