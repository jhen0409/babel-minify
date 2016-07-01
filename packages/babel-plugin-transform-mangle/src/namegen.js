// @flow
export default function* nameGenerator() /*:Generator<string,void,void>*/ {
  const atoz = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let i = 0;
  /* eslint-disable no-constant-condition */
  while (true) {
  /* eslint-enable */
    if (i) for (let j of atoz) yield j+i;
    else yield* atoz;
    i++;
  }
}
