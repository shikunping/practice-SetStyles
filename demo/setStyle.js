(function(win,doc){

	var defaultSettings = {
		color:'red',
		background:'blue',
		border:'2px solid #000',
		fontSize:'30px',
		textAlign:'center',
		width:'200px',
		borderRadius:'5px'
	};

	function SetStyles(options){
		var self = this;
		if(!options){
			throw new Error('请传入配置参数');
		}
		if(options && !options.container){
			throw new Error("请传入组件选择器");
		}
		console.log(self);

		self = Object.assign(self,defaultSettings,options);
		self.container = doc.querySelectorAll(self.container);
		self._changeStyle();

	}
	SetStyles.prototype = {
		_changeStyle:function(){
			var self = this;
			console.log(self);
			for(var i = 0;i<self.container.length;i++){
				for(var pro in self){
					if(pro == "container"){
						continue;
					}
					if(pro == "text" && typeof self[pro] == "string"){
						self.container[i].innerText = self[pro];
						continue;
					}
					else if(pro == "text" && typeof self[pro] == 'function'){
						self.container[i].innerText = self[pro]();
						continue;
					}
					self.container[i].style[pro] = self[pro];
				}
			}

		}
	};

	win.SetStyles = SetStyles;



})(window,document)