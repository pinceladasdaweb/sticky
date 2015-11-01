# Sticky
> Vanilla JS + CSS3 Sticky Header.

## What is it?
Sticky creates an on-demand sticky header. Specify when you want your header to become fixed and the rest is magic. [Demo](http://www.pinceladasdaweb.com.br/blog/uploads/sticky/).

## Getting Started

```bash
# Get the latest snapshot
$ git clone git@github.com:pinceladasdaweb/sticky.git
```

## How to use?
Sticky is a [Vanilla JS](http://vanilla-js.com/) plugin with no dependancies. Include the [`sticky.min.js`](build/sticky.min.js) before your ```</body>``` tag and initialise it:

```html
<script src="path/to/sticky.min.js"></script>
<script>
	new Sticky({
	    target: 'nav',
	    offset: 335
	});
</script>
```

Loading Sticky via AMD (require.js):

```html
<script>
require(["path/to/sticky.min.js"], function(Sticky) {
    new Sticky({
        target: 'nav',
        offset: 335
    });
});
</script>
```

## Options
The script expect the following values:

| Value                              | Description                                                 |
| ---------------------------------- |:-----------------------------------------------------------:|
| **target**                         | Element tagname, element class or element id                |
| **offset**                         | Scroll offset                                               |

##Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/sticky/releases) for detailed changelog.

## License
[MIT](LICENSE)