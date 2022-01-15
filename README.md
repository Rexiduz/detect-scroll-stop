##Example

```
const scrollStop = require('detect-scroll-stop')
...
..
let element = document.querySelector('.container')

const listener = function(){
	console.log('stopped!!')
}
scrollStop(element, listener)
```

Support `ReactJs`

```
import scrollStop from 'detect-scroll-stop'
...

const containerRef = useRef()
...
..
.
useEffect(() => {
	const listener = () => {
		console.log('scrolling has stopped')
	}

	const cleanup = scrollStop(containerRef, listener)

	return () => {
		cleanup()
	}
}, [])


return (
	<div ref={containerRef}>
		...
		...
		..
		.
	</div>
)
```
