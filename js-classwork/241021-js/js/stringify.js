const sales = [ 
    {
        id:1,
        title:"phones",
        date:"2024-10-04",
        count:16,
        sum:15382.56
    },
    {
        id:2,
        title:"tablets",
        date:"2024-11-11",
        count:125,
        sum:85232.56
    },
    {
        id:3,
        title:"computers",
        date:"2024-11-16",
        count:105,
        sum:32682.56
    },
    {
        id:4,
        title:"other",
        date:"2024-12-05",
        count:152,
        sum:445638.56
    },
    {
        id:5,
        title:"services",
        date:"2024-12-25",
        count:186,
        sum:15538.56
    }
]

function filterBySum (){
    console.log(sales.filter((total)=> total.sum > 50000))
}


function filterByDecember() {
    console.log(sales.filter((sale)=> new Date(sale.date).getMonth() === 12))
}

const getSum= (...nums)=>{
    return nums
}

const getTestSum= (...nums)=>{
    let total = 0
    for ( element in nums) {
        total += nums[element]
    }
    return total
}

const getReduceSum = (...nums)=>{
    return nums.reduce((total, num)=>total+num)
}

console.log(getReduceSum(12,45,76,888,9996,12))

const getSortSum = (...nums)=>{
    return nums.sort((a, b)=> b -a);
}

console.log(getSortSum(12,45,76,888,9996,12))

const student = ["Tomas", "Adomas", "Ieva", "Jonas"]

 
student.sort((a, b)=> { 
    if (a.title > b.title)return -1;
    if (a.title < b.title)return 1;
    return 0;
})

console.log(student)