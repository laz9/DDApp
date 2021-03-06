import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {Surface,Shape,Path,LinearGradient,Text} from '@react-native-community/art';


export class HcdWaveView extends Component {
  static defaultProps = {
    powerPercent: 50, //0-100
    proportion: 0.5,//0-1
    surfaceWidth: 300,
    surfaceHeigth: 300,
    backgroundColor: '#FF7800',
    stroke: 'white',
    fill: 'white',
    strokeWidth: 2,
    superViewBackgroundColor: "blue",
    type: 'dc' //ac:交流 dc:直流
  }

  constructor(props) {
    super(props);
    this.copyRadian = 0.5;
    this.proportion = this.props.proportion;//Arc control
    this.surfaceWidth = this.props.surfaceWidth;
    this.surfaceHeigth = this.props.surfaceHeigth;
    this.moveY = this.surfaceWidth;
    this.radius = this.surfaceWidth / 2.0;
    this.state = {
      a: 1.5,
      b: 0,
      increase: false,
      flashCount: 0
    };
  }

  componentDidMount() {
    if (this.props.type == 'dc') {
      this.intervalTimer = setInterval(() => {
        var a = this.state.a
        var b = this.state.b
        var increase = this.state.increase
        if (increase) {
          a += 0.01
        } else {
          a -= 0.01
        }
        if (a <= 1) {
          increase = true
        }
        if (a >= 1.5) {
          increase = false
        }
        b += 0.1
        this.setState({
          a: a,
          b: b,
          increase: increase
        })
      }, 20)
    } else if (this.props.type == 'ac') {
      this.flashTimer = setInterval(() => {
        var flashCount = this.state.flashCount
        flashCount += 2
        flashCount %= 30
        this.setState({
          flashCount: flashCount
        })
      }, 60)
    }
  }

  componentWillUnmount() {
    if (this.props.type == 'dc') {
      this.intervalTimer && clearTimeout(this.intervalTimer)
    } else if (this.props.type == 'ac') {
      this.flashTimer && clearTimeout(this.flashTimer)
    }
  }

  // 直流充电动画
  artDrawDCChargeWaveView() {
    // 左边刻度
    const leftLinePath = new Path();
    var radius = this.props.surfaceWidth / 2;
    for (var i = 0, angle = Math.PI * 0.5, tmp, len; i <= 30 * this.props.powerPercent / 100; i++) {
      len = 12;
      tmp = radius - 5;
      leftLinePath.moveTo(
        radius + tmp * Math.cos(angle),
        radius + tmp * Math.sin(angle)
      );
      tmp -= len;
      leftLinePath.lineTo(radius + tmp * Math.cos(angle), radius + tmp * Math.sin(angle));
      leftLinePath.close();
      angle += Math.PI / 30;
    }

    // 右边刻度
    const rightLinePath = new Path();
    var radius = this.props.surfaceWidth / 2;
    for (var i = 0, angle = Math.PI * 0.5, tmp, len; i <= 30 * this.props.powerPercent / 100; i++) {
      len = 12;
      tmp = radius - 5;
      rightLinePath.moveTo(
        radius + tmp * Math.cos(angle),
        radius + tmp * Math.sin(angle)
      );
      tmp -= len;
      rightLinePath.lineTo(radius + tmp * Math.cos(angle), radius + tmp * Math.sin(angle));
      rightLinePath.close();
      angle -= Math.PI / 30;
    }

    var circleRadius = radius - 30
    const path = new Path()
      .moveTo(radius, radius - circleRadius)
      .arc(0, circleRadius * 2, circleRadius)
      .arc(0, -circleRadius * 2, circleRadius)
      .close();
    let colors = [ "white", "#58D3F7", ];
    let linearGradient = new LinearGradient(colors, 0, 20, 90, 280);

    return <View style={{ backgroundColor: 'rgba(0,0,0,0.0)' }}>
      <Surface width={this.surfaceWidth} height={this.surfaceHeigth} >
        {this.artDrawBg()}
        <Shape d={leftLinePath} stroke="#FCEE5D" strokeWidth={2} fill={"red"} />
        <Shape d={rightLinePath} stroke="#FCEE5D" strokeWidth={2} fill={'red'} />
        <Shape d={path} fill={linearGradient}/>
        {this.artDrawWave()}
        <Text strokeWidth={1} 
          stroke="#FFFFFF" 
          alignment="center" 
          x={this.props.surfaceHeigth / 2} 
          y={this.props.surfaceHeigth / 2 - 30} 
          fill="#FFFFFF"
          font={`30px "Helvetica Neue", "Helvetica", Arial`}>{this.props.powerPercent + '%'}</Text>
        <Text strokeWidth={1} 
          stroke="#FFFFFF" 
          alignment="center" 
          x={this.props.surfaceHeigth / 2} 
          y={this.props.surfaceHeigth / 2 + 10} 
          fill="#FFFFFF"

          font={`12px "Helvetica Neue", "Helvetica", Arial`}>当前电量</Text>
      </Surface>
    </View>
  }

  // 画背景
  artDrawBg() {
    const bgLine = Path();
    var radius = this.props.surfaceWidth / 2;
    for (var i = 0, angle = 0, tmp, len; i < 60; i++) {
      len = 12;
      tmp = radius - 5;
      bgLine.moveTo(
        radius + tmp * Math.cos(angle),
        radius + tmp * Math.sin(angle)
      );
      tmp -= len;
      bgLine.lineTo(radius + tmp * Math.cos(angle), radius + tmp * Math.sin(angle));
      bgLine.close();
      angle += Math.PI / 30;
    }
    return (
      <Shape d={bgLine} stroke="#a6e0fb" strokeWidth={2} fill={"red"} />
    )
  }

  // 交流充电动画
  artDrawACChargeView() {
    // 左边刻度
    const leftLinePath = new Path();
    var radius = this.props.surfaceWidth / 2;
    for (var i = 0, angle = Math.PI * 0.5, tmp, len; i <= this.state.flashCount; i++) {
      len = 12;
      tmp = radius - 5;
      leftLinePath.moveTo(
        radius + tmp * Math.cos(angle),
        radius + tmp * Math.sin(angle)
      );
      tmp -= len;
      leftLinePath.lineTo(radius + tmp * Math.cos(angle), radius + tmp * Math.sin(angle));
      leftLinePath.close();
      angle += Math.PI / 30;
    }

    // 右边刻度
    const rightLinePath = new Path();
    var radius = this.props.surfaceWidth / 2;
    for (var i = 0, angle = Math.PI * 0.5, tmp, len; i <= this.state.flashCount; i++) {
      len = 12;
      tmp = radius - 5;
      rightLinePath.moveTo(
        radius + tmp * Math.cos(angle),
        radius + tmp * Math.sin(angle)
      );
      tmp -= len;
      rightLinePath.lineTo(radius + tmp * Math.cos(angle), radius + tmp * Math.sin(angle));
      rightLinePath.close();
      angle -= Math.PI / 30;
    }

    var circleRadius = radius - 30
    const path = new Path()
      .moveTo(radius, radius - circleRadius)
      .arc(0, circleRadius * 2, circleRadius)
      .arc(0, -circleRadius * 2, circleRadius)
      .close();
    let colors = [ "white", "#58D3F7", ];
    let linearGradient = new LinearGradient(colors, 0, 20, 90, 280);

    var scale = radius / 95
    var flashPath = new Path()
    flashPath.moveTo(radius + 6 * scale, radius - 28 * scale)
    flashPath.lineTo(radius + 4 * scale, radius - 4 * scale)
    flashPath.lineTo(radius + 18 * scale, radius - 4 * scale)
    flashPath.lineTo(radius - 6 * scale, radius + 28 * scale)
    flashPath.lineTo(radius - 4 * scale, radius + 3 * scale)
    flashPath.lineTo(radius - 17 * scale, radius + 3 * scale)
    flashPath.close()

    return <View style={{ backgroundColor: 'rgba(0,0,0,0.0)' }}>
      <Surface width={this.surfaceWidth} height={this.surfaceHeigth} >
        {this.artDrawBg()}
        <Shape d={leftLinePath} stroke="#FCEE5D" strokeWidth={2} fill={"red"} />
        <Shape d={rightLinePath} stroke="#FCEE5D" strokeWidth={2} fill={'red'} />
        <Shape d={path} fill={linearGradient}/>
        <Shape d={flashPath} stroke="#ffffff" strokeWidth={2} fill={'#ffffff'} />
      </Surface>
    </View>
  }

  artDrawWave() {
    var powerPercent = parseInt(this.props.powerPercent)
    const radius = this.props.surfaceWidth / 2 - 30;

    if (powerPercent < 100) {
      const centerX = this.props.surfaceWidth / 2
      const centerY = this.props.surfaceHeigth / 2

      const a = this.state.a
      const b = this.state.b
      const amplitude = 10

      var currentLinePointY = radius * 2 + 30 - radius * 2 * (this.props.powerPercent / 100.0)
      var startX = 30
      var endX = this.props.surfaceWidth - startX

      var startPoint, endPoint

      const linePath = new Path();
      for (var x = startX; x <= endX; x++) {
        var y = a * Math.sin(x / 180 * Math.PI + 4 * b / Math.PI) * amplitude + currentLinePointY
        if (y < centerY) {
          var circleY = centerY - Math.sqrt(Math.pow(radius, 2) - Math.pow(centerX - x, 2))
          if (y < circleY) {
            y = circleY
          }
        } else if (y > centerY) {
          var circleY = centerY + Math.sqrt(Math.pow(radius, 2) - Math.pow(centerX - x, 2))
          if (y > circleY) {
            y = circleY
          }
        }
        if (x == startX) {
          linePath.moveTo(x, y)
          startPoint = [x, y]
        } else if (x == endX) {
          endPoint = [x, y]
        }
        linePath.lineTo(x, y)
      }
      linePath.moveTo(endPoint[0], endPoint[1])
      linePath.arc(-2 * radius, 0, radius)
      linePath.close()
      return (
        <Shape d={linePath} strokeWidth={0} fill={'#b7e3fb'}/>
      )
    } else {
      const linePath = new Path()
        .moveTo(radius + 30, 30)
        .arc(0, radius * 2, radius)
        .arc(0, -radius * 2, radius)
        .close();
      return (
        <Shape d={linePath} strokeWidth={0} fill={'#b7e3fb'}/>
      )
    }
  }

  

  typeView() {
    if (this.props.type === 'dc') {
      return this.artDrawDCChargeWaveView()
    } else if (this.props.type === 'ac') {
      return this.artDrawACChargeView()
    }
  }

  render() {
    return (
      <View style={{ width: this.props.surfaceWidth, height: this.props.surfaceHeigth, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.0)', }}>
        {this.typeView()}
      </View>
    )
  }
}