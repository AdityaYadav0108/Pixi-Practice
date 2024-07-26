let app;

window.onload = ()=>{
  app = new PIXI.Application({
    resizeTo: window,
    background: '#1099bb'
  })

  document.body.appendChild(app.view);

  let text = new PIXI.Text('Jump King');
  text.x = app.view.width/2;
  text.y = app.view.height/2;
  text.anchor.set(0.5);
  text.style = new PIXI.TextStyle({
    fill: '0xFF0000',
    fontSize:  40,
    fontFamily: 'custom'
  });

  app.stage.addChild(text)
}