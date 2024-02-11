let stu1={
    id:1,
    fullName:"Nurane Ismayilzade",
    age:21,
    address:"Ramana"
}
let stu2={
    id:2,
    fullName:"Konul Qasimova",
    age:47,
    address:"Genclik"
}
let stu3={
    id:3,
    fullName:"Ismayil Ismayilov",
    age:18,
    address:"Merdekan"
}
let stu4={
    id:4,
    fullName:"Kemale Eliyeva",
    age:35,
    address:"Ehmedli"
}
let stu5={
    id:5,
    fullName:"Ruslan Ehmedli",
    age:20,
    address:"Xalqlar Dostlugu"
}
let group={
    name:"P418",
    capacity:3,
    students:[],
    addStudent:function (stu) {
        if (stu==undefined) {
            alert("Input can't be empty");
            return;
        }
        if (this.students.length==this.capacity) {
            alert("Group already filled")
            return;
        }
        this.students.push(stu)
    },
    getAllStudents:function(){
        return this.students;
    },
    getById:function(id){
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].id==id) {
                return this.students[i];
            }
        }
        return ("Bele bir id tapilmadi !")
    },
    searchStudents:function(searchtext){
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].fullName.trim().includes(searchtext)) {
                return this.students[i]
            }            
        }
        return ("Fullname-ye uygun student tapilmadi !")
    }

}
group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
// let result=group.getAllStudents();
// console.log(result);
// let result=group.getById(1);
// console.log(result);
let result=group.searchStudents("")
console.log(result);
