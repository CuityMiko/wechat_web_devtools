'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('classnames'),d=require('./ff946754202ecf377034d29daac7c8d9.js');class e extends a.Component{constructor(a){super(a),this.state={currentPanel:0},this.blinkObjects={}}handleCopyClick(a){let b=a.currentTarget.dataset.type,c=nw.Clipboard.get();c.set(this.props[b].toString());const d=this.blinkObjects[b];d&&(d.style.opacity='0.5',!this._blinkTimeout&&(this._blinkTimeout=setTimeout(()=>{d.style.opacity='1',this._blinkTimeout=null},200))),this.props.showSuccessTip('\u590D\u5236\u6210\u529F')}handlePathOpenClick(){d.sendMessage('EDITOR',JSON.stringify({type:'COMMAND',command:'openFile',data:{path:'/'+(this.props.pathName||'')+'.js'}}))}handlePanelLabelClick(a){this.setState({currentPanel:a})}render(){let b=this.props;const d=this.state.currentPanel;return a.createElement('div',{className:'simulator-status-bar'},a.createElement('div',{className:c('ui-flex',{"ui-flex-item":0===d})},a.createElement('label',{htmlFor:'',onClick:this.handlePanelLabelClick.bind(this,0)},'\u9875\u9762\u8DEF\u5F84'),0===d?a.createElement('p',{ref:(a)=>this.blinkObjects.pathName=a,className:'ui-selectable',title:b.pathName},b.pathName?b.pathName:'(\u7A7A)'):null,0===d&&b.pathName?a.createElement('a',{onClick:this.handleCopyClick.bind(this),"data-type":'pathName'},'\u590D\u5236'):null,0===d&&b.pathName?a.createElement('a',{onClick:this.handlePathOpenClick.bind(this)},'\u6253\u5F00'):null),a.createElement('div',{className:c('ui-flex',{"ui-flex-item":1===d})},a.createElement('label',{htmlFor:'',onClick:this.handlePanelLabelClick.bind(this,1)},'\u573A\u666F\u503C'),1===d?a.createElement('p',{ref:(a)=>this.blinkObjects.scene=a,className:'ui-selectable'},b.scene?b.scene:'(\u7A7A)',b.scene?a.createElement('span',null,'\xA0\xA0',b.sceneMap[b.scene]||''):null):null),a.createElement('div',{className:c('ui-flex',{"ui-flex-item":2===d})},a.createElement('label',{htmlFor:'',onClick:this.handlePanelLabelClick.bind(this,2)},'\u9875\u9762\u53C2\u6570'),2===d?a.createElement('p',{ref:(a)=>this.blinkObjects.query=a,className:'ui-selectable'},b.query?b.query:'(\u7A7A)'):null,2===d&&b.query?a.createElement('a',{onClick:this.handleCopyClick.bind(this),"data-type":'query'},'\u590D\u5236'):null))}}module.exports=e}(require('lazyload'),require);