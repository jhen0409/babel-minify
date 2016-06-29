import nameGenerator from './namegen';

function isFunction(binding) {
  return binding.path.isFunctionExpression() ||
    binding.path.isFunctionDeclaration() ||
    binding.path.isClassDeclaration() ||
    binding.path.isClassExpression();
}

function renameIdentifiers(path, {
  opts: {
    keep_fnames = false,
    mangle_globals = false
  } = {}
} = {}) {
  if ((!mangle_globals) && path.scope === path.getFunctionParent().scope) return;

  const bindings = path.scope.getAllBindings();
  const ownBindings = Object.keys(bindings).filter(b => path.scope.hasOwnBinding(b));
  const names = nameGenerator();

  ownBindings.filter(b => {
    if (!keep_fnames) return true;
    return !isFunction(path.scope.getBinding(b));
  }).map(b => {
    let next = names.next().value;
    while (path.scope.hasBinding(next)) {
      next = names.next().value;
    }
    path.scope.rename(b, next);
  });
}

export default function Mangle() {
  return {
    visitor: {
      Program(path, options) {
        if (options.opts && options.opts.mangle_globals)
          renameIdentifiers(path, options);
      },
      BlockStatement: renameIdentifiers
    }
  };
}
