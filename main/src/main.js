import * as singleSpa from 'single-spa'

singleSpa.registerApplication(
  'navbar',
  () => {
    return System.import('@micro/navbarVendors').then(() => {
      return System.import('@micro/navbarMain')
    })
  },
  (location) => true,
)

// vue demo
singleSpa.registerApplication(
  'vue',
  ()=>{
    return System.import('@micro/vueVendors').then(()=>{
      return System.import('@micro/vueMain')
    })
  },
  (location) => location.pathname.startsWith('/vue'),
  { authToken: 'd83jD63UdZ6RS6f70D0' }
)

// fm demo
singleSpa.registerApplication(
  'fm',
  () => {
    return System.import('@micro/fmVendors').then(() => {
      return System.import('@micro/fmMain');
    })
  },
  (location) => location.pathname.startsWith('/fm'),
  { authToken: 'd83jD63UdZ6RS6f70D0' }
)
// boat demo
singleSpa.registerApplication(
  'boat',
  () => {
    return System.import('@micro/boatVendors').then(() => {
      return System.import('@micro/boatMain');
    })
  },
  (location) => location.pathname.startsWith('/boat'),
  { authToken: 'd83jD63UdZ6RS6f70D0' }
)

singleSpa.start()