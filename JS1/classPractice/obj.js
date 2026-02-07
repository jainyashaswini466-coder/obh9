let input = [ 
    {name:"Alice", role:"dev"}, 
    {name:"Bob", role:"tester"}, 
    {name:"Eve", role:"dev"} 
]

//on basis of property (role)

let output = { 
    dev: [{name:"Alice", role:"dev"}, {name:"Eve", role:"dev"}], 
    tester: [{name:"Bob", role:"tester"}] 
}


