let stu1={
    id:1,
    fullName:"Nurane Ismayilzade",
    age:21,
    address:"Tovuz"
}
let stu2={
    id:2,
    fullName:"Gulay Seferova",
    age:23,
    address:"Gence"
}
let stu3={
    id:3,
    fullName:"Alisa Ismayilzade",
    age:22,
    address:"Baki"
}
let stu4={
    id:4,
    fullName:"Ismayil Ismayilov",
    age:20,
    address:"Turkiye"
}
let stu5={
    id:5,
    fullName:"Konul Qasimova",
    age:27,
    address:"Naxcivan"
}
let group={
    name:"P418",
    capacity:5,
    students:[],
    addStudents:function (stu) {
        if (stu===undefined) {
            alert("Input can't be empty.")
            return
        }
        if (this.students.length==this.capacity) {
            alert("Group already filled.")
            return;
        }
        this.students.push(stu)
    },
    getAllStudents:function(){
        return this.students
    },
    getbyId:function (id) {
      for (let i = 0; i < this.students.length; i++) {
        if (id==this.students[i].id) {
            return (`id: ${this.students[i].id}  name: ${this.students[i].fullName}  age:${this.students[i].age}  address:${this.students[i].address}`)
        }        
      }
      return alert("Bele bir id-li istifadeci tapilmadi.")  
    },
    getbyIdDelete:function (id) {
      let filteredStudents=this.students.filter(stu=>stu.id!==id)
      if (filteredStudents.length<this.students.length) {
        this.students=filteredStudents;
        return this.students
      }
      return alert("Bele bir id-li student tapilmadi.")
    },
    getbyIdSearch:function (fullname) {
        let newStudentsArray=[];
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].fullName.toLowerCase().trim().includes(fullname.toLowerCase().trim())) {
                newStudentsArray.push(this.students[i])
            }            
        }
        if (newStudentsArray.length>0) {
            return newStudentsArray;
        }
        return alert("Bele bir fullname-li student tapilmadi.") 
    },  
    updateStudent:function (id,NewStudentAbouts) {
        for (let i = 0; i < this.students.length; i++) {
            if (id===this.students[i].id) {
                let newStudent=this.students[i]
                for (const key in NewStudentAbouts) {
                    newStudent[key]=NewStudentAbouts[key]
                }
                return "Student guncellendi."
            }            
        }
        return alert("Bele bir id-ye sahib student tapilmadi.")
    }
}
group.addStudents(stu1);
group.addStudents(stu2);
group.addStudents(stu3);
group.addStudents(stu4);
group.addStudents(stu5);
// let res=group.getAllStudents();
// console.log(res);
// let res=group.getbyId(2);
// console.log(res);
// let res=group.getbyIdDelete(1);
// console.log(res);
// let res=group.getbyIdSearch("ismayil")
// console.log(res);
group.updateStudent(5, { fullName: "Leyla Agayeva", age: 25, address: "Baki" });
let res=group.getAllStudents();
console.log(res);