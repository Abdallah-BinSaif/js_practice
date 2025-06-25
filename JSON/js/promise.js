const ride = new Promise((resolve, reject) => {
    arrived = false;
    if(arrived){
        resolve("driver arrived");

    }
    else {
        reject("driver bailed");
    }
});

ride
.then(value => console.log(value))
.catch(error => console.log(error))



const newRide = () => {
    return new Promise((resolve, reject) => {
        arrived = true;
        if(arrived){
            resolve("driver arrived")
        }
        else{
            reject("driver bailed")
        }
    })
};

newRide()
.then(res => console.log(res))
.catch(err => console.log(err))
