const person = {
    name: "Shubham",
    address: {
        line1: 'Electronic city',
        city: 'Bengeluru',
        country: 'India'
    },
    ph: "+91 7895625145",
    profiles: ['twitter','linkedin','instagram'],
    printProfile: () => {

        person.profiles.map(
            (profile)=> {
console.log(profile)
            }
        )
        console.log(person.profiles[0])
    }
}

export default function LearnJavaScript() {

    return(
<div>
<div>{person.name} </div>
    <div>{person.address.line1} </div>
    <div>{person.address.city} </div>
    <div>{person.address.country} </div>
    <div>{person.ph} </div>
    <div>{person.profiles[0]}</div>
    <div>{person.printProfile()}</div>

</div>
  
    )
}