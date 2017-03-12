var React = require('react');

var Detail = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},
	getInitialState:function(){
		return {
			list:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({url:this.props.url}).then(function(data){
			// console.log(data);
			_this.setState({
				list:data.subjects
			})
		});
	},
	render:function(){
		// console.log(this.props.params.id);
		var detail = [];
		var _id = this.props.params.id;
		$.each(this.state.list,function(i,ele){			
			if(ele.id == _id){
				// console.log(ele);
				detail.push(
					<div className="detail" key={_id}>
						<h2>{ele.title}:{ele.original_title}({ele.year})</h2>
						<div className="main_detail">
							<div className="detail_l">
								<img src={ele.images.large} />
							</div>
							<ul className="detail_r">
								<li>导演：{ele.directors[0].name}</li>
								<li>主演：{ele.casts[0].name}</li>
								<li>类型：{$.each(ele.genres,function(i,e){return e;})}</li>
								<li className="casts">主演: 休·杰克曼 / 帕特里克·斯图尔特 / 达芙妮·基恩 / 波伊德·霍布鲁克 / 斯戴芬·莫昌特 / 伊丽莎白·罗德里格斯 / 多丽丝·莫尔加多 / 理查德·E·格兰特 / 玛丽·佩顿·斯图尔特 / 伊利斯·尼尔 / 艾瑞琪·拉·塞拉 / 劳伦·格罗斯 / 胡安·贾斯帕 / 克日什托夫·索什斯基 / 萨博·班克森</li>
								<li>地区: 美国</li>
								<li>片长: 123分钟(中国大陆), 135分钟(柏林电影节), 137分钟(美国)</li>
								<li>上映: 2017-02-17(柏林电影节), 2017-03-03(中国大陆/美国)</li>
							</ul>
						</div>
						<div className="intro">
							<h3 className="color-green">{ele.title}的剧情简介：</h3>
							<div className="intro_info">2029年，变种人大幅减少，X战警已经解散。身心疲惫的金刚狼罗根（休·杰克曼 Hugh Jackman 饰）自愈因子逐渐消失，整天饮酒度日，靠当司机养家。他在墨西哥边境隐居，并照顾着饱受病痛折磨的老X教授（帕特里克·斯图尔特 Patrick Stewart 饰）。有一天，一位陌生女子让罗根送一个叫劳拉（达芙妮·金 Dafne Keen 饰）的女孩去加拿大边境，一开始罗根拒绝了，但查尔斯一直在等着这个女孩的出现，劳拉拥有超强的战斗力，而且在许多方面都很像金刚狼。她被一个强大公司的幕后人物所追踪，因为她的DNA里有连接罗根的秘密，一场无休止的追捕由此展开。</div>
						</div>
						<div className="comment">
							<h4 className="color-green">{ele.title}短评：</h4>
							<li>评论111111111111</li>
							<li>评论222222222222</li>
							<li>评论333333333333</li>
							<li>评论44444444444</li>
							<li>评论55555555555</li>
							<li>评论6666666666</li>
						</div>
					</div>
				)
			}
		});
		return (
			<div className="detail">
				{detail}
			</div>
		)
	}
});

module.exports = Detail;