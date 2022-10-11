class TextMetricsCache {
  constructor() {
    // your data structure is stored in this.cacheData
    this.cacheData = {};
    this.leastFrequency = null;
    this.mostFrequency = null;
    this.size = 0;
  }
  getCachedEntry(word, font) {
    // please write the code to look up and return the stored
    // TextMetrics, if it exists in the cache, for the input
    // word and font strings.
    const key = word + font;
    const entry = this.cacheData[key];

    if (!entry) return;

    entry.increaseFrequency();

    let currEntry = entry;

    while (currEntry?.next && currEntry.frequency > currEntry.next.frequency) {
      currEntry.moveToNext();

      if (this.leastFrequency.value === currEntry.value) {
        this.leastFrequency = currEntry.prev;
      }

      if (!currEntry.next) {
        this.mostFrequency = currEntry;
      }

      currEntry = currEntry.next;
    }

    return entry.value;
  }
  setCachedEntry(word, font, textMetricsData) {
    // please write the code to store the textMetricsData
    // which corresponds to the input word and font strings
    const key = word + font;

    if (this.cacheData[key]) return;

    const newEntry = new CacheNode(
      key,
      textMetricsData,
      null,
      this.leastFrequency
    );

    this.cacheData[key] = newEntry;
    this.leastFrequency = newEntry;
    this.size++;

    if (!this.mostFrequency) {
      this.mostFrequency = newEntry;
    }
  }
  /**
   * This method will be called when there are too many entries
   * in the cache and we need to evict some of them.
   *
   * @param {integer} numEntriesToEvict - the number of entries that need
   * to be evicted from this.cacheData
   */
  evictEntries(numEntriesToEvict) {
    // Please write the code to choose entries to evict and evict them,
    // according to the strategy/data structure you chose in Question 2.
    const evictedEntries = [];
    let currEntry = this.leastFrequency;

    for (let i = 0; i < numEntriesToEvict; i++) {
      if (!currEntry) break;

      const nextEntry = currEntry.next;
      const deletedEntry = currEntry.deleteNode();
      this.leastFrequency = nextEntry;
      this.size--;

      delete this.cacheData[deletedEntry.key];

      evictedEntries.push(deletedEntry.value);
      currEntry = nextEntry;
    }

    if (!this.leastFrequency) {
      this.mostFrequency = null;
    } else if (!this.leastFrequency.next) {
      this.mostFrequency = this.leastFrequency;
    }

    return evictedEntries;
  }
}
