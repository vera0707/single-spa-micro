// 注册依赖环境
window.SystemJS = window.System

const devDependencies = {
  imports: {
    
  }
}
const prodDependencies = {}

function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement('script')
  newScript.type = 'systemjs-importmap'
  newScript.text = JSON.stringify(newMapJSON)
  const allMaps = document.querySelectorAll('script[type="systemjs-importmap"]')
  allMaps[allMaps.length - 1].insertAdjacentElement(
    'afterEnd',
    newScript
  )
}

if (process.env.NODE_ENV === 'development') {
  insertNewImportMap(devDependencies)
} else {
  insertNewImportMap(prodDependencies)
}