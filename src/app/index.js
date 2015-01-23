
import '../polyfill'
import { load as loadTheme } from '../scintillator'
import co from 'co'

export function main() {
  co(function*() {
    let theme = yield loadTheme('/skins/default/skin.xml')
    console.log(theme)
  })
  .done()
/*
  var stage = new PIXI.Stage(0x66FF99)
  var width = 1280
  var height = 720
  var renderer = new PIXI.autoDetectRenderer(width, height)
  var view = renderer.view

  view.style.display = 'block'
  view.style.margin = '0 auto'

  var url = '/skins/default/NoteHint/Active/Scratch.png'
  var sprite = PIXI.Sprite.fromImage(url)
  stage.addChild(sprite)
  sprite.x = 300
  sprite.y = 300

  document.body.appendChild(renderer.view)

  function resize() {
    var scale = Math.min(
      window.innerWidth / width,
      window.innerHeight / height,
      1
    )
    view.style.width = Math.round(width * scale) + 'px'
    view.style.height = Math.round(height * scale) + 'px'
  }

  function frame() {
    sprite.rotation += 0.1
    renderer.render(stage)
    requestAnimationFrame(frame)
  }

  $(window).on('resize', resize)
  resize()
  frame()
*/

}

