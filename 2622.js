class TimeLimitedCache {
    constructor() {
        this.store=new Map()
    }
    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        let check = true;

        return function () {
            if (store.has(key)) {
                store.set()
                return check
            }
        };


    }
    /**
     * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {

        cache.then((value) => {
            return value;
        }).catch(() => -1);
    }
    /**
     * @return {number} count of non-expired keys
     */
    count() {

        cache.then((value));
    }
}




/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */