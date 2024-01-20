export default function ({ route, redirect }) {
  if (process.client) {
    if (route.path === '/terms-of-use') {
      window.location = 'https://sharegro.zendesk.com/hc/en-us/articles/16561299202715-Member-Agreement-Terms-of-Service'
    }
    if (route.path === '/download') {
      redirect('/')
    }
  }
}
