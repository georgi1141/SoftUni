function worldRecord(input) {
  let worldRecordSec = Number(input[0]);

  let distanceInMeters = Number(input[1]);
  let timeForOneMeter = Number(input[2]);

  let timeInSec = distanceInMeters * timeForOneMeter;
  let resistance = Math.floor(distanceInMeters / 15) * 12.5;
  let result = timeInSec + resistance;

  if (worldRecordSec <= result) {
    console.log(
      `No, he failed! He was ${(result - worldRecordSec).toFixed(
        2
      )} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${result.toFixed(2)} seconds.`
    );
  }
}

worldRecord(["10464", "1500", "20"]);
