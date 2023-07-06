# vite-template

This is a template example of how you can create interactive react components that include CSS styling and SVG images in bitburner.

# File overview

### vite.config.js

This is the configuration file for the Vite tool, which is used for "bundling" the project. Taking a number of source files and combining them all into the output file.

More information about Vite can be found in its documentation: https://vitejs.dev/guide/

### tsconfig.json

This is the configuration file for Typescript, which is a superset language of javascript. Of particular note here is that we use the "noemit" option, as Vite is able to read typescript files itself just fine. However Vite doesn't check do any type checking, so we still run `tsc` as part of the build process to check our types.

### package.json and package-lock.json

This file tells NPM, the package manager we're using for javascript in this repo, which packages this repo depends on. For example we depend on the Vite package, as we use Vite to bundle our code.

### NetscriptDefinitions.d.ts

This file defines the Typescript type definitions for bitburner. However we made some small modifications too add the ns.tprintRaw and ns.printRaw functions, as those are normally "secret" functions, but we need them for this example, and we don't want our Typescript tooling to complain.

### filesync.json

This is the configuration file for the [bitburner-filesync](https://github.com/bitburner-official/bitburner-filesync) tool that is useful for transfering files over to bitburner using the remote file API.

### .eslintrc.cjs

This is the config file for our linter. In particular we turn on the `no-floating-promises` rule so we make sure to never forget to await a `weaken` function or similar. We also disable the `no-unused-vars` and instead use a typescript aware version of that rule.

### main.ts

This is the entry point of our script. You'll notice it's written in typescript instead of javascript, so we need to bring in the NS type from our netscript type definitions.

### globals.d.ts

Here we are able to say that the `React` global already exists, which it does due to the fact that Bitburner itself runs react. We also give it a type, which will allow us to typecheck our react code.

### custom.d.ts

By adding these `declare module` segments, we tell Typescript we're allowed to import `svg` files and `css` files. Importing these files isn't supported by Typescript or Javascript, but Vite has support for it.

### Example.tsx

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. React uses it to make building components easy. In this case the file is a `.tsx` file which means it's the typescript version of JSX. We declare a function component named `Example` here. Because in our `tsconfig.json` file we have `"jsx": "react"`, Vite will transform this file into a series of React.createElement calls.

### react.svg

This is a SVG image. There's no support for importing images in Javascript, but Vite takes those import calls and inlines the image as a base64 string. Because SVG images are so small in filesize, we can use one here without increasing the size of our bundle too much.

### example.module.css

This is our css file, and you can see it's imported by Example.tsx twice. The first import `cssInline` imports the raw css output, which we then put into a style tag to include it into the DOM. The second import `css` imports a javascript object, where the keys are the css classes as they are in the src file, and the values are the the css classes post bundling. Because it's a `.module.css` file Vite will randomize the class names in the bundling process. This way we can inject in our own styles without worrying about overwriting a style in Bitburner.
