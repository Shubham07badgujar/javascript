const tinderUser = new Object()
// const tinderUser = {}

tinderUser.ud = "123sahiasf"
tinderUser.name = "shubham"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "shubham",
        lastname: "Badgujar"
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2:"B"}
const obj2 = {3: "a", 4:"B"}
const obj5 = {5: "a", 6:"B"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj4 = Object.assign({},obj1 ,obj2,obj5)

const obj6 = {...obj1, ...obj2}
// console.log(obj6);

const user = [
    {
        id : 1,
        email: "shubham@gmail.com"
    },
    {
        id : 1,
        email: "shubham@gmail.com"
    },
    {
        id : 1,
        email: "shubham@gmail.com"
    },
    {
        id : 1,
        email: "shubham@gmail.com"
    },
    {
        id : 1,
        email: "shubham@gmail.com"
    },
    {
        id : 1,
        email: "shubham@gmail.com"
    },

]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename :"JS in Hindi",
    price: "999",
    courseInstructor :"Shubham"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

// const {courseInstructor: instructor} = course
// console.log(instructor);

//below concept is used in react only five lines
// const navbar = ({company }) =>{


// }
// navbar(company = "shubham")

// {
//     "name " : "shubham",
//     "coursename" : "js in hindi",
//     "price": "freee"
// }

[
    {},
    {},
    {},
]