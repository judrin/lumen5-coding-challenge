# Lumen 5 Coding Challenge

**Q1. What are some of the different strategies that you could use to evict data from the cache
to prevent it from growing indefinitely? When would each strategy be most effective?**

**A:** I can think of two strategies for this challenge.
- Least Frequently Used cache
 - evict data from the least used data to the most used data. 
 - good strategy in case of most popular items or best-selling products.
- Least Recently Used cache: 
 - evict data from the oldest to the newest. 
 - good strategy in case of recently visited pages or photos.

**Q2. Choose one of your strategies from Question 1. Write out the data structure that you
would use to implement this cache. Why did you choose this data structure?**

**A:** I would go with the Least Frequently Used cache strategy in this case. This challenge stores cache `TextMetrics` instances by **word** and **font**. There would be some words and fonts most used by users, and these should be stored as a cache regardless of the stored time. That's the reason I chose the Least Frequently Used cache strategy.

***Please check `CacheNode.js` file to see my implementation for question 2.***

**Q3. Write the method that evicts entries from the cache, as well as the method to get a
cache entry and set a cache entry:**

**A:** ***Please check `TextMetricsCache.js` file to see my implementation for question 3.***

**Q4. Describe the various things that you would test to make sure that evictEntries is working
correctly. Then, write the code for one of these test cases.

**A:** I think the most important to test `evictEntries` are:
- evict an exact number of entries from `cacheData` by given `numEntriesToEvic`
- handle the case when the requested number of entries to evict is greater than the actual `cacheData` size

***Please check `TextMetricsCache.test.js` file to see a sample test case for question 4.***
