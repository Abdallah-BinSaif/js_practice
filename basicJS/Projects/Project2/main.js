const userProfile = {
    username: "coderGuy",
    email: "coder@example.com",
    age: 28,
    interests: ["coding", "gaming", "reading"],
    isActive: true
}

function updateProfile(property, newValue) {
    userProfile[property] = newValue
    console.log(`updated ${property} to ${newValue}`)
    console.log(userProfile)
}

function addInterest(newInterest) {
    if(!userProfile.interests.includes(newInterest)){
        userProfile.interests.push(newInterest)
    }else{
        console.log("Interest already exists")
    }
    console.log(`updated interests ${userProfile.interests.join(", ")}`)
}

function removeInterest(interesToRemove) {
    const index = userProfile.interests.indexOf(interesToRemove)
    if(index === -1){
        console.log("Interest not found")
    }else{
        userProfile.interests.splice(index,1)
        console.log(`updated interests ${userProfile.interests.join(", ")}`)
    }
}

function displayProfileSummary() {
    const profile = Object.entries(userProfile)
    
    console.log(`Name: ${profile[0][1]}`)
    console.log(`Email: ${profile[1][1]}`)
    console.log(`Age: ${profile[2][1]}`)
    console.log(`Interest: ${profile[3][1].join(", ")}`)
    console.log(`isActive: ${profile[4][1]}`)
}

updateProfile("age", 30)
updateProfile("isActive", false)
addInterest("car racing")
addInterest("coding")
removeInterest("gaming")
removeInterest("hublo")
displayProfileSummary()
