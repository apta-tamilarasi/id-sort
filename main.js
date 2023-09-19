// Sort an array of JavaScript objects based on library ID

let library = [ 
{
title: 'The Road Ahead',
author: 'Bill Gates',
libraryID: 1254
},
{
title: 'Walter Isaacson',
author: 'Steve Jobs',
libraryID: 4264
},
{
title: 'Mockingjay: The Final Book of The Hunger Games',
author: 'Suzanne Collins',
libraryID: 3245
},
{
title: 'Adventures of Tom Sawyer',
author: 'Mark Twain',
libraryID: 1345
},
{
title: 'Adventures of Sherlock Holmes',
author: 'Sir Arthur Conan Doyle',
libraryID: 2245
}
];

let a=library.sort(function(e,b){
    return (e.libraryID-b.libraryID)
})

document.write(JSON.stringify(a))