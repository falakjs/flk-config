# Configurations
Most of the framework packages support developer default configurations to be used allover the called packages|components to be much easier on usage.

All of the configurations lies on file in the app directory `config.js` which should be located in `src/appName/modules/config.js`.

> 
The Config class handles configurations in the runtime, thus it has nothing to do with the framework configurations in the `config.json` file in the `root` directory.

# Table of contents
- [Configurations](#configurations)
- [Table of contents](#table-of-contents)
- [Usage](#usage)
- [Getting values from the config file](#getting-values-from-the-config-file)
- [Get](#get)
- [Has](#has)
- [Set](#set)
- [Precompiled configurations](#precompiled-configurations)
- [List of precompiled configurations](#list-of-precompiled-configurations)

# Usage

Now let's see how to use it.

Using the `Config.extend` method makes it more convenient to set bulk of configurations in one time.

`config.js` file
```javascript
// runtime configurations
Config.extend({
    http: {
        endpoint: {
            baseUrl: '',
            apiKey: '', // used with the `key` for Authorization header 
        }
    }
});
```

Now let's see how to get any values from that config file.

# Getting values from the config file

The `Config` class has [Config.get](#get) method which makes it easy for you to get any value from it.


# Get
`get(key: string, defaultValue: any = null): any`

This method is used to get any value from the `config.js` file using the **object dot notation syntax**.


The **object dot notation syntax** means that the configurations is marked as `namespaces` which means you can get the object value of a primary key in the configurations.

Let's see what does it mean in action.

```javascript

let httpOptions = Config.get('http');
// the returned value will be: 
httpOptions = {
    endpoint: {
        baseUrl: '',
        apiKey: ''
    }
```

Now let's say that you want only the value of  the `apiKey`, here we will use the **object dot notation syntax**


```javascript
let endPointApiKey = Config.get('http.endpoint.apiKey');
```
That's it!, so if we want to get a certain value for a key from any of configurations you can write the key name like this `mainKey.subKey.subSubKey.key`.

# Has
`static has(key: string): boolean`

To check if the given key exists in the configurations file.

```javascript

if (Config.has('some.value')) {
    // do something
}

```

# Set
`static set(key: string, value: mixed): void`

Set/Replace the value for the given key

```javascript
Config.set('app.name', 'My New App Name!');
```

# Precompiled configurations

There are some precompiled configurations that is added to the config handler, it all relies under the `app` scope.

For example: `Config.get('app.name'); // Blog`

# List of precompiled configurations
Here is the available options under the `app` scope:

| key | Value | Description |
|---|---|---|
| `name`| `Dynamic`| Based on current application name, the value will be set.|
| `direction`| `ltr|rtl`| The current direction of the application, defaults to the base direction of the app in the root `config.json` file.|
| `localeCode`| `Dynamic`| The current locale code of the application, defaults to the base direction of the app in the root `config.json` file.|
| `env`| `development/production`| Current environment mode of the application, on the `flk serve` it will be `development`.|
| `baseUrl`| `Dynamic`| The base url set in the root config `config.json` file.|
| `scriptPath`| `Dynamic`| The script path of the current application, defaults to `/` for base app.|
| `scriptUrl`| `Dynamic`| The script full url of the current application, defaults to the `baseUrl` combined with `scriptPath` value.|