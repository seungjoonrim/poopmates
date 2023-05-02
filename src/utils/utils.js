function getDifferenceUntilFutureTime(timeString, unit = "minutes") {
  const futureTime = new Date(timeString);
  const currentTime = new Date();

  if (futureTime <= currentTime) {
    return 0;
  }

  const millisecondsDifference = futureTime.getTime() - currentTime.getTime();

  if (unit === "seconds") {
    const secondsDifference = Math.ceil(millisecondsDifference / 1000);
    return secondsDifference;
  } else if (unit === "minutes") {
    const minutesDifference = Math.ceil(millisecondsDifference / (1000 * 60));
    return minutesDifference;
  } else {
    throw new Error(`Invalid unit provided: ${unit}. Must be either "seconds" or "minutes".`);
  }
}

function isPoopingExpired(user) {
  if (!user) { return }
  const timeLeft = getDifferenceUntilFutureTime(user.isPoopingExpiresAt, "seconds");
  return (timeLeft <= 0) ? true : false;
}

export {
  getDifferenceUntilFutureTime,
  isPoopingExpired
}
