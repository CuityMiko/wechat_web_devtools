'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(a){if(!a)return;const{modifiers:b,key:c}=a;let d=[];b&&(d=b.map((a)=>{return l.hasOwnProperty(a)?l[a]:a}));let e=d?d.join(''):'';return e?`${e}${n[c]||c||''}`:n[c]||c||''}function b(b){const c=i.cloneDeep(b.shortcuts||{});for(const d in c)c.hasOwnProperty(d)&&!d.startsWith('_')&&(c[d]=_extends({},c[d],{displayText:a(c[d]),error:!1}));return c}function c(a,b){if(!a||1>a.length)return[b];let c=[...a],d=c.findIndex((a)=>a===b);if(0<=d)return c;let e=0,f=m[b];for(;e<c.length&&!(m[c[e]]<f);e++);return c.splice(e,0,b),c}function d(a){let b=[];for(let d of a)b=c(b,d);return b}function e(a,b){if(!a||!b||a.length!==b.length)return!1;const c=new Set([...a.map((a)=>a.toLowerCase()),...b.map((a)=>a.toLowerCase())]);return!(c.size!==a.length)}function f(a,b){return a.key.toUpperCase()===b.key.toUpperCase()&&e(a.modifiers,b.modifiers)}const g=require('react'),h=require('react-dom'),i=require('lodash'),j=require('classnames'),{keyCodeMap:k,modifierDisplayTextMap:l,modifierPriorityMap:m,keyDisplayTextMap:n}=require('./9355620dfff47077fc5946269d43cd4d.js'),{allShortcuts:o}=require('./f87ad2ec2a5cfdfc5b7856a3adcf63ef.js'),p='shortcuts';module.exports=class extends g.Component{constructor(a){super(a),this.state=_extends({},b(a),{currentPanel:0,focus:null}),this._modifiersInput=new Set,this._keyInput=''}componentWillReceiveProps(a){this.setState(_extends({},this.state||{},b(a))),a.show||(this.blurInputs(),this.toggleEditingShortcuts(!1))}componentWillUnmout(){this.blurInputs(),this.toggleEditingShortcuts(!1)}blurInputs(){const a=h.findDOMNode(this).querySelectorAll('input');a.forEach((a)=>{try{a.blur()}catch(a){}})}toggleEditingShortcuts(a){this.props.updateIDESetting&&this.props.shortcuts._editingShortcuts!==a&&this.props.updateIDESetting(p,'_editingShortcuts',a)}handleFocus(a){this.setState({focus:a},()=>this.toggleEditingShortcuts(!0))}handleBlur(){this._keyInput='',this._modifiersInput.clear(),this.setState({focus:null},()=>this.toggleEditingShortcuts(!1))}changeShortcut(a,b){this.props.updateIDESetting&&this.props.updateIDESetting(p,a,{key:b.key,modifiers:b.modifiers})}validShortcut(a,b){if(1>b.modifiers.length){if(!b.key||1>b.key.length)return!0;if(!/^F\d+$/ig.test(b.key))return'nomodifiers'}if(!b.key||1>b.key.length)return'nokeys';const c=[...o],d=this.props.shortcuts;for(const e in d)d.hasOwnProperty(e)&&e!==a&&!e.startsWith('_')&&c.push(d[e]);for(let d=0;d<c.length;d++)if(f(c[d],b))return'conflict';return!0}setStateAndValid(a,b){let c=this.validShortcut(a,b[a]);b[a].error=!0!==c&&c,this.setState(b,()=>{!0===c&&this.changeShortcut(a,this.state[a])})}handleKeyDown(b,d){d.preventDefault();const e=k[d.keyCode];if(e){if(e.isDelete)return this._modifiersInput.clear(),this._keyInput='',void this.setStateAndValid(b,{[b]:{key:'',modifiers:[],displayText:''}},()=>this.blurInputs());if(e.isModifier){let d;d=0<this._modifiersInput.size?c(this.state[b].modifiers,e.name):[e.name],this._modifiersInput.add(e.name);const f={modifiers:d,key:this._keyInput?this._keyInput:''};f.displayText=a(f),this.setStateAndValid(b,{[b]:f})}else{if(this._keyInput===e.name)return;this._keyInput=e.name;let c=0<this._modifiersInput.size?this.state[b].modifiers:[];const d={modifiers:c,key:e.name};d.displayText=a(d),this.setStateAndValid(b,{[b]:d})}}}handleKeyUp(b,c){c.preventDefault();const e=k[c.keyCode];if(e)return e.isModifier?(this._modifiersInput.delete(e.name),this._deleteModifierTimeout&&(clearTimeout(this._deleteModifierTimeout),this._deleteModifierTimeout=null),void(this._deleteModifierTimeout=setTimeout(()=>{if(0<this._modifiersInput.size){const c={key:this.state[b].key,modifiers:d(this._modifiersInput)};c.displayText=a(c),this.setStateAndValid(b,{[b]:c}),this._deleteModifierTimeout=null}else this._keyInput='',!1!==this.state[b].error&&this.setStateAndValid(b,{[b]:{key:'',modifiers:[],displayText:''}})},200))):void(this._keyInput='')}handleRestoreAllButtonClick(){this._modifiersInput.clear(),this._keyInput='',this.blurInputs(),this.props.resetToDefault&&this.props.resetToDefault()}handleResetButtonClick(a){this._modifiersInput.clear(),this._keyInput='',this.blurInputs(),this.setStateAndValid(a,{[a]:{key:'',modifiers:[],displayText:''}})}handlePanelClick(a){this.setState({currentPanel:a})}render(){const a=[{display:'none'},{display:'none'},{display:'none'}];a[this.state.currentPanel]={};const b=()=>{};return g.createElement('div',null,g.createElement('div',{className:'setting-hotkey ui-form'},g.createElement('div',{className:'ui-flex'},g.createElement('div',null,g.createElement('div',{className:'ui-select-list',tabIndex:'0'},g.createElement('div',{onClick:this.handlePanelClick.bind(this,0),className:j('ui-select-list-item',{"ui-select-list-item-active":0===this.state.currentPanel})},g.createElement('p',null,'\u754C\u9762\u5F00\u5173')),g.createElement('div',{onClick:this.handlePanelClick.bind(this,1),className:j('ui-select-list-item',{"ui-select-list-item-active":1===this.state.currentPanel})},g.createElement('p',null,'\u5DE5\u5177')),g.createElement('div',{onClick:this.handlePanelClick.bind(this,2),className:j('ui-select-list-item',{"ui-select-list-item-active":2===this.state.currentPanel})},g.createElement('p',null,'\u7F16\u8F91')))),g.createElement('div',{className:'ui-flex-item',style:a[0]},g.createElement('div',{className:'ui-form-item'},g.createElement('div',{className:'setting-hotkey-item-group ui-form-controls'},g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.toggleToolbar.error||'nomodifiers'===this.state.toggleToolbar.error})},g.createElement('label',{htmlFor:''},'\u5DE5\u5177\u680F'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'toggleToolbar'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'toggleToolbar'),onBlur:this.handleBlur.bind(this,'toggleToolbar'),placeholder:'\u65E0',value:this.state.toggleToolbar.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'toggleToolbar'),onKeyUpCapture:this.handleKeyUp.bind(this,'toggleToolbar')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'toggleToolbar'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'}))))),g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.toggleSimulatorWindow.error||'nomodifiers'===this.state.toggleSimulatorWindow.error})},g.createElement('label',{htmlFor:''},'\u6A21\u62DF\u5668'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'toggleSimulatorWindow'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'toggleSimulatorWindow'),onBlur:this.handleBlur.bind(this,'toggleSimulatorWindow'),placeholder:'\u65E0',value:this.state.toggleSimulatorWindow.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'toggleSimulatorWindow'),onKeyUpCapture:this.handleKeyUp.bind(this,'toggleSimulatorWindow')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'toggleSimulatorWindow'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'}))))),g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.toggleEditorWindow.error||'nomodifiers'===this.state.toggleEditorWindow.error})},g.createElement('label',{htmlFor:''},'\u7F16\u8F91\u5668'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'toggleEditorWindow'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'toggleEditorWindow'),onBlur:this.handleBlur.bind(this,'toggleEditorWindow'),placeholder:'\u65E0',value:this.state.toggleEditorWindow.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'toggleEditorWindow'),onKeyUpCapture:this.handleKeyUp.bind(this,'toggleEditorWindow')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'toggleEditorWindow'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'}))))),g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.toggleFileTree.error||'nomodifiers'===this.state.toggleFileTree.error})},g.createElement('label',{htmlFor:''},'\u76EE\u5F55\u6811'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'toggleFileTree'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'toggleFileTree'),onBlur:this.handleBlur.bind(this,'toggleFileTree'),placeholder:'\u65E0',value:this.state.toggleFileTree.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'toggleFileTree'),onKeyUpCapture:this.handleKeyUp.bind(this,'toggleFileTree')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'toggleFileTree'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'}))))),g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.toggleDebugWindow.error||'nomodifiers'===this.state.toggleDebugWindow.error})},g.createElement('label',{htmlFor:''},'\u8C03\u8BD5\u5668'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'toggleDebugWindow'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'toggleDebugWindow'),onBlur:this.handleBlur.bind(this,'toggleDebugWindow'),placeholder:'\u65E0',value:this.state.toggleDebugWindow.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'toggleDebugWindow'),onKeyUpCapture:this.handleKeyUp.bind(this,'toggleDebugWindow')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'toggleDebugWindow'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'})))))))),g.createElement('div',{className:'ui-flex-item',style:a[1]},g.createElement('div',{className:'ui-form-item'},g.createElement('div',{className:'setting-hotkey-item-group ui-form-controls'},g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.rebuild.error||'nomodifiers'===this.state.rebuild.error})},g.createElement('label',{htmlFor:''},'\u7F16\u8BD1'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'rebuild'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'rebuild'),onBlur:this.handleBlur.bind(this,'rebuild'),placeholder:'\u65E0',value:this.state.rebuild.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'rebuild'),onKeyUpCapture:this.handleKeyUp.bind(this,'rebuild')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'rebuild'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'}))))),g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.refresh.error||'nomodifiers'===this.state.refresh.error})},g.createElement('label',{htmlFor:''},'\u5237\u65B0'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'refresh'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'refresh'),onBlur:this.handleBlur.bind(this,'refresh'),placeholder:'\u65E0',value:this.state.refresh.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'refresh'),onKeyUpCapture:this.handleKeyUp.bind(this,'refresh')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'refresh'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'}))))),g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.preview.error||'nomodifiers'===this.state.preview.error})},g.createElement('label',{htmlFor:''},'\u9884\u89C8'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'preview'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'preview'),onBlur:this.handleBlur.bind(this,'preview'),placeholder:'\u65E0',value:this.state.preview.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'preview'),onKeyUpCapture:this.handleKeyUp.bind(this,'preview')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'preview'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'}))))),g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.upload.error||'nomodifiers'===this.state.upload.error})},g.createElement('label',{htmlFor:''},'\u4E0A\u4F20'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'upload'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'upload'),onBlur:this.handleBlur.bind(this,'upload'),placeholder:'\u65E0',value:this.state.upload.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'upload'),onKeyUpCapture:this.handleKeyUp.bind(this,'upload')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'upload'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'}))))),g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.toggleForegroundBackgroundStatus.error||'nomodifiers'===this.state.toggleForegroundBackgroundStatus.error})},g.createElement('label',{htmlFor:''},'\u524D\u540E\u53F0\u5207\u6362'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'toggleForegroundBackgroundStatus'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'toggleForegroundBackgroundStatus'),onBlur:this.handleBlur.bind(this,'toggleForegroundBackgroundStatus'),placeholder:'\u65E0',value:this.state.toggleForegroundBackgroundStatus.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'toggleForegroundBackgroundStatus'),onKeyUpCapture:this.handleKeyUp.bind(this,'toggleForegroundBackgroundStatus')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'toggleForegroundBackgroundStatus'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'})))))))),g.createElement('div',{className:'ui-flex-item',style:a[2]},g.createElement('div',{className:'ui-form-item'},g.createElement('div',{className:'setting-hotkey-item-group ui-form-controls'},g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.format.error||'nomodifiers'===this.state.format.error})},g.createElement('label',{htmlFor:''},'\u683C\u5F0F\u5316\u4EE3\u7801'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'format'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'format'),onBlur:this.handleBlur.bind(this,'format'),placeholder:'\u65E0',value:this.state.format.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'format'),onKeyUpCapture:this.handleKeyUp.bind(this,'format')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'format'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'}))))),g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.gotoFile.error||'nomodifiers'===this.state.gotoFile.error})},g.createElement('label',{htmlFor:''},'\u8DF3\u8F6C\u6587\u4EF6'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'gotoFile'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'gotoFile'),onBlur:this.handleBlur.bind(this,'gotoFile'),placeholder:'\u65E0',value:this.state.gotoFile.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'gotoFile'),onKeyUpCapture:this.handleKeyUp.bind(this,'gotoFile')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'gotoFile'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'}))))),g.createElement('div',{className:j('setting-hotkey-item','ui-flex',{"ui-form-item-error":'conflict'===this.state.gotoRecentFile.error||'nomodifiers'===this.state.gotoRecentFile.error})},g.createElement('label',{htmlFor:''},'\u6700\u8FD1\u6587\u4EF6'),g.createElement('div',null,g.createElement('div',{className:j('ui-input-box',{"ui-input-box-focus":'gotoRecentFile'===this.state.focus})},g.createElement('input',{className:'ui-input',type:'text',onChange:b,onFocus:this.handleFocus.bind(this,'gotoRecentFile'),onBlur:this.handleBlur.bind(this,'gotoRecentFile'),placeholder:'\u65E0',value:this.state.gotoRecentFile.displayText,onKeyDownCapture:this.handleKeyDown.bind(this,'gotoRecentFile'),onKeyUpCapture:this.handleKeyUp.bind(this,'gotoRecentFile')}),g.createElement('a',{onClick:this.handleResetButtonClick.bind(this,'gotoRecentFile'),className:'ui-input-opr'},g.createElement('i',{className:'ui-icon-clear'})))))))))),g.createElement('div',{className:'setting-action-area'},g.createElement('button',{onClick:this.handleRestoreAllButtonClick.bind(this),className:'ui-button ui-button-default'},'\u6062\u590D\u9ED8\u8BA4')))}}}(require('lazyload'),require);