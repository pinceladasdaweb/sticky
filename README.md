# Sticky
> Vanilla JS + CSS3 Sticky Header.

## What is it?
Sticky creates an on-demand sticky header. Specify when you want your header to become fixed and the rest is magic. [Demo](http://www.pinceladasdaweb.com.br/blog/uploads/sticky/).

## How to use?
Sticky is a [Vanilla JS](http://vanilla-js.com/) plugin with no dependancies. Include the [`sticky.min.js`](assets/js/sticky.min.js) in the footer of your page and initialise it:

```javascript
(function() {
    Sticky.init({
        target: 'nav',
        offset: 335 
    });
}());
```
## Options
Customise how Sticky works by passing in custom options.

```javascript
// Options
target: 'nav' // Element tagname, element class or element id
offset: 335 // Scroll offset
```

## Browser support
IE8+ and modern browsers.

## License
Sticky is licensed under the MIT License.