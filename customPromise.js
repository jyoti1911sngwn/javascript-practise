const STATES = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

class MyPromise {
  #state = STATES.PENDING;
  #value;
  #onFulfilledCallbacks = [];
  #onRejectedCallbacks = [];

  constructor(executor) {
    const resolve = this.#resolve.bind(this);
    const reject = this.#reject.bind(this);

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  #resolve(value) {
    queueMicrotask(() => {
      if (this.#state !== STATES.PENDING) return;
      this.#state = STATES.FULFILLED;
      this.#value = value;
      this.#onFulfilledCallbacks.forEach((cb) => cb(value));
    });
  }

  #reject(reason) {
    queueMicrotask(() => {
      if (this.#state !== STATES.PENDING) return;
      this.#state = STATES.REJECTED;
      this.#value = reason;
      this.#onRejectedCallbacks.forEach((cb) => cb(reason));
    });
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          resolve(
            typeof onFulfilled === "function" ? onFulfilled(value) : value
          );
        } catch (e) {
          reject(e);
        }
      };

      const handleRejected = (reason) => {
        try {
          if (typeof onRejected === "function") {
            resolve(onRejected(reason));
          } else {
            reject(reason);
          }
        } catch (e) {
          reject(e);
        }
      };

      if (this.#state === STATES.PENDING) {
        this.#onFulfilledCallbacks.push(handleFulfilled);
        this.#onRejectedCallbacks.push(handleRejected);
      }

      if (this.#state === STATES.FULFILLED) {
        queueMicrotask(() => handleFulfilled(this.#value));
      }

      if (this.#state === STATES.REJECTED) {
        queueMicrotask(() => handleRejected(this.#value));
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

function init() {
  return new MyPromise((r) => r(10));
}
init().then(
  (res) => console.log(res + 1),
  (err) => console.log(err)
);
