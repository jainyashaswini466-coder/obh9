let complex = {
    name: 'Project',
    tasks: [[1, 2], [3, 4]],
    config: { nested: { value: 100 } }
};

let deepCopy = structuredClone(complex);

deepCopy.tasks[0].push(99);

deepCopy.config.nested.value = 999;


// console.log(deepCopy)

// console.log(complex)

//Shallow copy - where nested objects fail to have fresh references for their elements

//Deep copy - structuredClone() - creates fresh references for the elements via recurssive spread