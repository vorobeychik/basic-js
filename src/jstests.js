function createDreamTeam(members) {
    if( !Array.isArray(members) || members.length === 0 ){ return  false}
    const regexp = /[a-zA-Z]/g;
    let arr = [];
    for(let i = 0; i < members.length;i++){
        if(typeof members[i] !== "string" ){continue}
        if(typeof members[i] === "string" ){members[i] = members[i][members[i].search(regexp)];
            arr.push(members[i])}

    }
    console.log(arr.sort().join('').toUpperCase())
    return arr.sort().join('').toUpperCase();

};
let arr = [['David Abram'],
    ['Robin Attfield'],
    'Thomas Berry',
    ['Paul R.Ehrlich'],
    'donna Haraway',
    ' BrIaN_gOodWiN  ',
    {
        0: 'Serenella Iovino'
    },
    'Erazim Kohak',
    '  val_plumwood',
    ]
console.log(createDreamTeam(arr))
