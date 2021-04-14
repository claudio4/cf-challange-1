import airports from './airports.json' // data from https://github.com/jbrooksuk/JSON-Airports
import template from './template'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response(template(airports[request.cf.colo]), {
    headers: { 'content-type': 'text/html' },
  })
}
