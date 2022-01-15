/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The callback function to run after scrolling
 * @param  {Integer}  refresh  How long to wait between scroll events [optional]
 */

function scrollStop(node = window, callback, refresh = 66) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return

  // Setup scrolling variable
  let isScrolling

  const target = 'current' in node ? node.current : node

  const listener = function (event) {
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling)

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(callback, refresh)
  }

  // Listen for scroll events
  target.addEventListener('scroll', listener, false)

  return () => {
    target.removeEventListener('scroll', listener, false)
  }
}

module.exports = scrollStop
