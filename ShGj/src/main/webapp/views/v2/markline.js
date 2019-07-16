
LMap.Layer.EchartMarkLine = LMap.Class(LMap.Layer,
    {
        isBaseLayer : false,
        echart : null,
        mapLayer : null,
        _geoCoord: [],
        initialize : function (name, mapView, echart, options)
        {
            var scope = this, echartdiv = document.createElement("div"), handler;
            this.map = mapView.getSuperMap();
            LMap.Layer.prototype.initialize.apply(this, [name, options]);

            echartdiv.style.cssText = "position:absolute;width:" + this.map.size.w + "px;height:"
                + this.map.size.h + "px;";
            scope.div.appendChild(echartdiv);
            scope.map = this.map;
            scope.echartdiv = echartdiv;
            scope.opacity = options.opacity;
            scope.echart = echart;
            scope.option = options.option;
            handler = function (e)
            {
                scope.updateLayer(e);
            };
            this.map.events.register("zoomend", this, handler);
            this.map.events.register("moveend", this, handler);
        },
        geoCoord2Pixel:function(geoCoord){
            var scope = this;
            var lonLat = new LMap.LonLat(geoCoord[0], geoCoord[1]);
            var scrPt = scope.map.getPixelFromLonLat(lonLat);
            var x = scrPt.x,
                y = scrPt.y;
            return [x,y];
        },
        updateLayer : function (e)
        {
            var scope = this;
            var myChart = scope.echart.init(scope.echartdiv);
            var orgXy, w, h;
            if(e){
                orgXy = e.object.layerContainerOriginPx;

            }
            else{
                orgXy={x:0,y:0};
            }
            w = scope.map.size.w;
            h = scope.map.size.h;
            scope.echartdiv.style.cssText = "position:absolute;top:"+(-orgXy.y)+"px;left:"+(-orgXy.x)+
                "px;width:" + w + "px;height:" + h + "px;";
            var ecOption = scope.getEcOption();
            myChart.setOption(ecOption);
        },
        /**
         *将echart的option转换
         * @returns {*}
         */
        getEcOption: function(){
            var scope = this;
            scope._option = scope.option;
            var series = scope._option.series || {};
            // 记录所有的geoCoord
            for (var i = 0, item; item = series[i++];) {
                var geoCoord = item.geoCoord;
                if (geoCoord) {
                    for (var k in geoCoord) {
                        scope._geoCoord[k] = geoCoord[k];
                    }
                }
            }

            // 添加x、y
            for (var i = 0, item; item = series[i++];) {
                var markPoint = item.markPoint || {};
                var markLine = item.markLine || {};

                var data = markPoint.data;
                if (data && data.length) {
                    for (var k = 0, len = data.length; k < len; k++) {
                        if (!(data[k].name && this._geoCoord.hasOwnProperty(data[k].name))) {
                            data[k].name = k + 'markp';
                            scope._geoCoord[data[k].name] = data[k].geoCoord;
                        }
                        scope._AddPos(data[k]);
                    }
                }

                data = markLine.data;
                if (data && data.length) {
                    for (var k = 0, len = data.length; k < len; k++) {
                        if (!(data[k][0].name && this._geoCoord.hasOwnProperty(data[k][0].name))) {
                            data[k][0].name = k + 'startp';
                            scope._geoCoord[data[k][0].name] = data[k][0].geoCoord;
                        }
                        if (!(data[k][1].name && this._geoCoord.hasOwnProperty(data[k][1].name))) {
                            data[k][1].name = k + 'endp';
                            scope._geoCoord[data[k][1].name] = data[k][1].geoCoord;
                        }
                        scope._AddPos(data[k][0]);
                        scope._AddPos(data[k][1]);
                    }
                }
            }
            return scope._option;
        },
        _AddPos:function(obj){
            var scope = this;
            var coord = scope._geoCoord[obj.name];
            var pos = scope.geoCoord2Pixel(coord);
            obj.x = pos[0]; //- self._mapOffset[0];
            obj.y = pos[1]; //- self._mapOffset[1];
        },
        destroy : function ()
        {
            LMap.Layer.Grid.prototype.destroy.apply(this, arguments);
        },
        CLASS_NAME : "LMap.Layer.EchartMarkLine"
    }
);