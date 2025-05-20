import StudentComponent from "./student-component";
import StudentCompAdv from "./student-component-advanced";

export default function PropsPage(){

    let studentOne = {
        studentName: "Joe",
        studentAge: 25,
        hasGraduated: false,
        schedule: ["CPRG123", "CPRG456", "CPRG789", "CPRG306"],
        address: {
            street: "123 Main St.",
            city: "Calgary",
            province: "AB"
        }
    }

    let studentTwo = {
        studentName: "Alice",
        studentAge: 23,
        address: {
            city: "Edmonton"
        }
    }

    return(
        <main>
            <StudentComponent sName="Kevin" sAge={23} sCity="Calgary"/>
            <StudentComponent sName="Frank" sAge={21} sCity="Edmonton" />
            <StudentComponent
                sName={studentOne.studentName}
                sAge={studentOne.studentAge}
                sCity={studentOne.address.city}
            />
            <StudentCompAdv studentObj={studentOne} />
            <StudentCompAdv studentObj={studentTwo} />
        </main>
    );
}