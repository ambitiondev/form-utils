# Ambitiondev Form utils

This bundle contains some useful form utilities to use in your (web)app.

..

## Table of contents
|    |                       |
|----|-----------------------|
| 1. | Installation          |
| 2. | Features              |

## 1. Installation
Simply execute the following:

```
    npm i @ambitiondev/form-utils --save
```

or:

```
    yarn add @ambitiondev/form-utils
```

## 2. Features

### formDataToJson

This function converts your formdata entries to a JSON-object. Useful for endpoints that require JSON in stead of form data.

#### usage:
```
    import { formDataToJson } from '@ambitiondev/form-utils'

    const form = document.querySelector('form');
    const data = new FormData(form);

    ...

    const processedData = formDataToJson(data);
```

This should return your form data as an object, like so:

```
    {
        "name": "developer@testdata.dev",
        "address": "Ambition street 4",
        ...
    }
```
