// #1
document.write("დავალება #1" + "<br>")
for(let i=5; i <101; i++){
    document.write(i + "<br>")
}
document.write("<br>")

// #2
document.write("დავალება #2" + "<br>")

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for(let i =0; i < array1.length; i+=1){
    if(array1[i] >0 & array1[i] < 10){
        document.write(array1[i] + "<br>");
    }
}
// #3
document.write("დავალება #3" + "<br>")
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i =0; i < array2.length; i+=1){
    if(array2[i] == 5){
        document.write(array2[i] + " არის" + "<br>");
    }
}

// 4
document.write("დავალება #4 -'console' -ში" + "<br>")

let users = [
    {username1: 'Giorgi', status: false},
    {username2: 'Levani', status: false},
    {username3: 'Anna', status: true}
]
let user1 = users[0]
let user2 = users[1]
let user3 = users[2]
if(user1.status == true){
    console.log(user1)
}
if(user2.status ==true){
    console.log(user2)

}
if(user3.status ==true){
    console.log(user3)

}

