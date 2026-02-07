// Deep nested structure
let complex = {
    name: 'Project',
    tasks: [[1, 2], [3, 4]],
    config: { nested: { value: 100 } }
};

let deepCopy = structuredClone(complex);
deepCopy.tasks[0].push(99);
deepCopy.config.nested.value = 999;

console.log(complex.tasks[0]);  // [1, 2] - unchanged!
console.log(complex.config.nested.value);  // 100 - unchanged!



### const with Arrays

**Concept:** `const` prevents reassignment but allows mutation of array contents.

// const only protects the reference, not the content

