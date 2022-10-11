const insertDummuyCacheEntries = () => {
  // codes to insert dummy cache entries
};

// this test is based on the test framework (mocha + chai) that I'm familiar with
it('should cacheData size be 0 even the requested number of entries to evic is greater than the cache data size', () => {
  insertDummuyCacheEntries(); // assume this will insert entries less than 10 such as 7
  textMetricsCache.evictEntries(10);

  expect(textMetricsCache.size).to.be.equal(0); // check cache size after running successfully evictEntries
});
