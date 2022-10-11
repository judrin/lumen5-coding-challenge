class CacheNode {
  constructor(key, value, prev = null, next = null) {
    this.key = key;
    this.value = value;
    this.frequency = 1;
    this.prev = prev;
    this.next = next;

    if (prev) {
      this.prev.next = this;
    }

    if (next) {
      this.next.prev = this;
    }
  }

  moveToNext() {
    if (!this.next) return;

    if (this.prev) {
      this.prev.next = this.next;
    }

    [this.next.prev, this.prev] = [this.prev, this.next];
    [this.next.next, this.next] = [this, this.next.next];

    if (this.next) {
      this.next.prev = this;
    }
  }

  deleteNode() {
    if (this.prev) {
      this.prev.next = this.next;
    }

    if (this.next) {
      this.next.prev = this.prev;
    }

    this.prev = null;
    this.next = null;

    return this;
  }

  increaseFrequency() {
    this.frequency++;
  }
}
