function myEach(collection, callback) {
  collection.forEach((item, i, collection) => {
    callback(item);
    return collection;
  });
}
