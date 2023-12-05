

/* prothome job aplication name  ekta key khulte hob ey babe */
const getStortJobAplication = () => {
    const stortJobAplication = localStorage.getItem('Job-aplications')
    if(stortJobAplication){
        return JSON.parse(stortJobAplication);
    }
    else{
        return [];
    }
}
/* close */

/* ten ja value ke localstorage save */
const saveJobAplications = (id) => {
    const stortJobAplications = getStortJobAplication();
    const exits = stortJobAplications.find(jobId => jobId == id);
    if(!exits){
        stortJobAplications.push(id);
        localStorage.setItem('Job-aplications', JSON.stringify(stortJobAplications));
    }
}
// close

export {getStortJobAplication, saveJobAplications}