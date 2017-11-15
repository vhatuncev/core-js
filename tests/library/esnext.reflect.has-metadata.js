QUnit.test('Reflect.hasMetadata', assert => {
  const { defineMetadata, hasMetadata } = core.Reflect;
  const { create } = core.Object;
  assert.isFunction(hasMetadata);
  assert.arity(hasMetadata, 2);
  assert.throws(() => {
    return hasMetadata('key', undefined, undefined);
  }, TypeError);
  assert.same(hasMetadata('key', {}, undefined), false);
  let object = {};
  defineMetadata('key', 'value', object, undefined);
  assert.same(hasMetadata('key', object, undefined), true);
  let prototype = {};
  object = create(prototype);
  defineMetadata('key', 'value', prototype, undefined);
  assert.same(hasMetadata('key', object, undefined), true);
  assert.same(hasMetadata('key', {}, 'name'), false);
  object = {};
  defineMetadata('key', 'value', object, 'name');
  assert.same(hasMetadata('key', object, 'name'), true);
  prototype = {};
  object = create(prototype);
  defineMetadata('key', 'value', prototype, 'name');
  assert.same(hasMetadata('key', object, 'name'), true);
});
