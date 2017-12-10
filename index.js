// Code your solution in this file!
function distanceFromHqInBlocks (street) {
  if (street >= 42) {
    return street - 42
  } else {
    return 42 - street
  }
}

function distanceFromHqInFeet(street) {
  d = distanceFromHqInBlocks(street)
  return d * 264
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264
  } else {
    return (end - start) * 264
  }
}

function calculatesFarePrice(start, end){
  let d = distanceTravelledInFeet(start, end)

  if (d <= 400) {
    return 0
  } else if (400 <= d && d <= 2000) {
    return d * 0.02
  } else if (2000 < d && d < 2500) {
    return 25
  } else if (d > 2500) {
    return 'cannot travel that far'
  }
}
