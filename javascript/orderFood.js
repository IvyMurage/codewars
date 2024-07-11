function orderFood(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.reduce((mealCount, { meal }) => {
    mealCount[meal] = (mealCount[meal] || 0) + 1;
    return mealCount;
  }, {});
}
