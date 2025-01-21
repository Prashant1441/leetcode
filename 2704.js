var expect = function (val) {
    
    return {
        toBe: function (val2) {
            if (val === val2) {
                return {value: val===val2}
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (val2) {
            if (val !== val2) {
                return {value:val !=val2};
            } else {
                throw new Error("Equal");
            }
        },
    };
};

const compare=expect(5).toBe(5)
console.log(compare)