/**
 * This type represents the result of a request to a store.
 * It can either be:
 * - 'ok' with a value of type T, or
 * - 'timeout' indicating that the request did not complete in time.
 */
type RequestStoreResult<T> = 
  | { status: 'ok'; value: T } 
  | { status: 'timeout' };
