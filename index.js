class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  };
};

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    const startSt = this.beginningLocation.split(" and ")[0].replace('th','');
    const startAve = this.beginningLocation.split(" and ")[1].replace('th','');
    const endSt = this.endingLocation.split(" and ")[0];
    const endAve = this.endingLocation.split(" and ")[1];

    // north-south math
    const nsBlock = Math.abs(startSt - endSt);
    // east-west math
    const ewBlocks = Math.abs(eastWest.indexOf(startAve) - eastWest.indexOf(endAve));

    return nsBlocks + ewBlocks;
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
