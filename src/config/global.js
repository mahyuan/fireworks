import resize from './resize'
import util from './util'


module.exports.config = {
	width: 360,
	height: 600,
	canvases: ['fireworks'],
	snowInterval: 60, // 飘落微粒间隔
	heartInterval: 15,
	snow: { //微粒属性
		x: undefined,
		y: undefined,
		minSize: 5,
		maxSize: 10,
		size: undefined,
		speed: .5,
		opacity: .8,
	},
	heart: {
		x: undefined,
		y: undefined,
		minSize: 5,
		maxSize: 10,
		size: undefined,
		speed: 1,
		opacity: 1,
	},
	fallType: 'snow', // 飘落类型 ['snow', 'heart', 'mix']
	// 阶段一
	dialogueOpt:{ 
		interval: 2000,  //两句话的间隔时间
		speed: 100,   //语速
		color1: '#ff00ff',
		font1: '14px Arial',
		color2: '#f97afb',
		color3: 'red',
		color4: '#ffff00',
		color5: '#00ff00',
		color6: '#00ffff',
		color7: '#fff',
	},	
	// 阶段二
	sunset: 8000,   // 天黑时间

    // 阶段三
	fireworkInterval:[60, 240],// 烟花产生间隔 //---不建议改动
	//烟花的属性
	fireworks:{ 
		x: undefined,
		y: height,
		xEnd: undefined,
		yEnd: undefined,
		size: 2,
		radius: 2,  //烟花半径
		velocity: 3,  //速率
		opacity: 0.8,
		count: 300,   //炸裂后粒子数
		wait: undefined,  //消失后 => 炸裂  等待时间
		color: undefined,  //烟花颜色
	},

}
