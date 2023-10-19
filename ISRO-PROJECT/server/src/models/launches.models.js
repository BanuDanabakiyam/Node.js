const launches = new Map();
let lastestFlightNumber = 100;

const launch = {
    flightNumber : 100,
    mission : 'kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate : new Date('December 12, 1995'),
    target: 'kepler-442 b',
    customer: ['ZTM', 'ISRO'],
    upcoming: true,
    succes: true,
};
launches.set(launch.flightNumber, launch);
function existsLaunchWithId(launchId){
return launches.has(launchId);
}
function getAllLaunches(){
    return Array.from(launches.values());

}
function addNewLaunch(launch){
    lastestFlightNumber++;
    launches.set(lastestFlightNumber,Object.assign(launch,{
        succes: true,
        upcoming: true,
        customers: ['Zero to Mastery','NASA'],
        flightNumber: lastestFlightNumber,
    }));
}
function abortLaunchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.succes = false;
    return aborted;

}
module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
}