bubbly({
  colorStart: '#DBDBDB',
  colorStop: '#EDEDED',
  blur:25,
  compose: 'source-over',
  bubbleFunc:() => `hsla(${Math.random() * 500}, 20%, 40%, .3)`
});