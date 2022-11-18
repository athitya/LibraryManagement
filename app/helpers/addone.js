import { helper } from '@ember/component/helper';

export default helper(function addone(positional /*, named*/) {
  const [number] = positional;
  return number + 1;
});
