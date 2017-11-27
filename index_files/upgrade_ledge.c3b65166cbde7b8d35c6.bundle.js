webpackJsonp([69,32],{170:function(e,t,o){"use strict";var n=o(9),i=o(265),s=o(235),r=(o(1).create("domain_registration"),"There was an unknown error with your domain registration. Please review your information and try again."),a={DEFAULT_ADDRESS_ERROR:r,setErrorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(e.type){case"user-not-pro":e.msg="Sorry, you have to upgrade to Pro to register a domain.";break;case"godaddy-error":break;default:e.msg=r}return e},getDomainSuggestions:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.force,i=void 0!==o&&o,s=t.quantity,r=void 0===s?20:s;return i&&delete e.suggested_domain_xhr,e.suggested_domain_xhr||(e.suggested_domain_xhr=n.ajax({type:"GET",url:e.url()+"/domain_suggestions",data:{quantity:r},headers:{"Content-Type":"application/json"}}),e.suggested_domain_xhr.fail(function(){delete e.suggested_domain_xhr})),e.suggested_domain_xhr},registerDomain:function(e,t){if(!(t instanceof i))throw new Error("Domain must be a Product model, from the user’s cart");var o=t.pick.apply(t,["domain","purchase","registrar","formula","price","tld_type"]);o.purchase||(o.editable=!0);var n=new s(o);n.get("purchase")||n.verifyDns();var r=e.get("mapped_domains"),a=r.findWhere({canonical:!0});n.set("canonical",!a),r.add(n);var l=n.save();return l.fail(function(e){r.remove(n)}),l}};e.exports=a},263:function(e,t,o){"use strict";var n=o(305),i=o(215);e.exports=function(e){var t=n.remove(i(e).replace(/ /g,"").toLowerCase());return t+".me"}},338:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=o(14),s=n(i),r=o(4),a=o(2),l=o(9),d=o(17),c=o(512),p=o(379),g=o(1).create("ledge");o(47);var u=r.View.extend({template:c,styles:p,className:function(){return(0,s.default)({"text-wrap":this.options.text_wrap},[p.scope,this.options.className])},ui:{button:".button",close:".ledge-close"},events:{click:"onClick","click @ui.button":"onClickButton","click @ui.close":"onClickClose"},initialize:function(e){if("string"!=typeof e.text&&"string"!=typeof e.html)throw new Error("Ledge requires text or html");this.initializeOptions(),this.initializeModel(),this.render(),this.show()},initializeOptions:function(){g("initializeOptions"),a.defaults(this.options,{close_button:!1,text_wrap:!1,buttons:[],viewOptions:{}})},initializeModel:function(){this.model=new d,this.model.set(this.options)},onRender:function(){var e=this;a.defer(function(){e.fadeIn()})},fadeIn:function(){this.$el.addPrefixedClass("fade","in")},fadeOut:function(){this.$el.addPrefixedClass("fade","out")},show:function(){this.ledge&&this.ledge.length||(this.ledge=l('<div class="ledge"></div>'),l.body.append(this.ledge),l.body.addClass("has-ledge")),this.ledge.html(this.el)},onClick:function(e){e.stopPropagation(),this.trigger("click",e)},onClickButton:function(e){e.stopPropagation(),this.trigger("click:button",e);var t=this.ui.button.index(e.target),o=this.options.buttons[t],n=o&&o.name;n&&this.trigger("click:"+n,e)},onClickClose:function(){this.trigger("dismiss"),this.fadeOut()},onBeforeDestroy:function(){this.ledge.remove(),l.body.removeClass("has-ledge")}});e.exports=u},368:function(e,t,o){t=e.exports=o(7)(),t.push([e.id,".ledge-scope-3dRRK{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:hsla(0,0%,100%,.9);box-shadow:0 0 10px 0 rgba(0,0,0,.3);position:fixed;bottom:0;padding:0 30px;box-sizing:border-box;line-height:60px;z-index:1;width:100%;opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%);transition:all .35s ease-in-out}.ledge-scope-3dRRK.fade-in{transition-duration:.4s;-webkit-transform:translateY(0);transform:translateY(0);opacity:1}.ledge-scope-3dRRK.fade-out{transition-duration:.25s;opacity:0}.panel-right .ledge-scope-3dRRK{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}.ledge-scope-3dRRK .ledge-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.ledge-scope-3dRRK .ledge-content h1{font-size:16px;margin:0;margin-right:20px;color:#333}.ledge-scope-3dRRK .ledge-content .primary-buttons .button{min-width:100px}.ledge-scope-3dRRK .ledge-content .primary-buttons .button+.button{margin-left:10px}.ledge-scope-3dRRK .ledge-close{width:18px;font-size:18px;cursor:pointer;filter:alpha(opacity=30);opacity:.3}.ledge-scope-3dRRK .ledge-close:hover{filter:alpha(opacity=100);opacity:1}@media only screen and (max-width:720px){.ledge-scope-3dRRK{line-height:inherit;padding:20px;padding-top:12px;text-align:center}.ledge-scope-3dRRK .ledge-content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-flex:1;-ms-flex:1 0;flex:1 0}.ledge-scope-3dRRK .ledge-content h1{margin-bottom:10px;margin-right:0}.ledge-scope-3dRRK .ledge-close{width:12px;font-size:12px;position:absolute;top:10px;right:10px}}@media only screen and (max-width:640px){.ledge-scope-3dRRK{padding:10px}.ledge-scope-3dRRK .ledge-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ledge-scope-3dRRK .ledge-content h1{max-width:calc(100vw - 115px);font-size:12px;margin-bottom:0;margin-right:5px;-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ledge-scope-3dRRK .ledge-content .primary-buttons .button{min-width:0}.ledge-scope-3dRRK .ledge-close{top:15px}.ledge-scope-3dRRK.text-wrap{display:block}.ledge-scope-3dRRK.text-wrap .ledge-content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;margin:0}.ledge-scope-3dRRK.text-wrap .ledge-content h1{width:calc(100vw - 115px);margin:0;font-size:14px;white-space:normal;overflow:auto;text-overflow:inherit}.ledge-scope-3dRRK.text-wrap .ledge-content .primary-buttons{margin-top:5px}.ledge-scope-3dRRK.text-wrap .ledge-content .primary-buttons .button.small{font-size:14px;line-height:25px}.ledge-scope-3dRRK.text-wrap .ledge-close{top:10px}}",""]),t.locals={scope:"ledge-scope-3dRRK"}},379:function(e,t,o){var n=o(368),i=o(8);"string"==typeof n&&(n=[[e.id,n,""]]),e.exports=n.locals||{},e.exports._getContent=function(){return n},e.exports._getCss=function(){return n.toString()},e.exports._insertCss=function(e){return i(n,e)}},512:function(e,t,o){var n=o(10);e.exports=function(e){var t,o="";Array.prototype.join;return o+='<div class="ledge-content">\n    <h1>\n        ',e.html?o+="\n            "+(null==(t=e.html)?"":t)+"\n        ":e.text&&(o+="\n            "+(null==(t=e.text)?"":n.escape(t))+"\n        "),o+='\n    </h1>\n    <div class="primary-buttons">\n        ',e.buttons.forEach(function(e){o+="\n            ",o+=e.href?'\n                <a class="'+(null==(t=e.classnames)?"":t)+'" href="'+(null==(t=e.href)?"":t)+'">'+(null==(t=e.text)?"":t)+"</a>\n            ":'\n                <button type="button" class="'+(null==(t=e.classnames)?"":t)+'">'+(null==(t=e.text)?"":t)+"</button>\n            ",o+="\n        "}),o+="\n    </div>\n</div>\n",e.close_button&&(o+='\n    <div class="ledge-close glyph-close glyph-center">&nbsp;</div>\n'),o+="\n"}},1292:function(e,t,o){"use strict";var n=o(4),i=o(2),s=o(6),r=o(338),a=o(164),l=o(112),d=o(263),c=o(170);o(1).create("upgrade_ledge");e.exports=n.Object.extend({initialize:function(){this.model=a.model,this.model.get("flags.pro_only_partner")?this.showLedge():this.fetchDomain()},fetchDomain:function(){var e=this,t=d(this.model.toJSON());c.getDomainSuggestions(this.model,{quantity:9}).done(function(o){var n=o&&o[0]&&o[0].domain;n?e.showLedge(n):e.showLedge(t)}).fail(function(){e.showLedge(t)})},showLedge:function(e){var t=this.model.get("flags.pro_only_partner")?this.getProPartnerOptions():this.getDefaultOptions(e);this.ledge=new r(t),s.metrics_editpanel.trigger("ledge:upgrade:shown"),this.listenTo(this.ledge,"click:button",this.onClickButton),this.listenTo(this.ledge,"dismiss",this.dismissLedge)},getDefaultOptions:function(e){var t=l.is("mobile"),o=t?"Customize your link: "+e:"Get your own customized link: "+e,n="Get my link",i=t?"small":"large";return{text:o,close_button:!0,buttons:[{text:n,classnames:"button "+i+" dark seafoam"}]}},getProPartnerOptions:function(){var e=l.is("mobile"),t=e?"":"Make a name for yourself with a domain and custom email address.",o=e?"Upgrade":"Go Professional";return{text:t,close_button:!0,buttons:[{text:o,classnames:"button large dark seafoam"}]}},onClickButton:function(){s.metrics_editpanel.trigger("ledge:upgrade:clicked",{source:"profile"}),s.editpanel.request("show:path","edit/upgrade")},dismissLedge:function(){this.model.get("actions").patch({dismissed_upgrade_ledge:i.now()})},onBeforeDestroy:function(){this.ledge&&this.ledge.destroy()}})}});
//# sourceMappingURL=upgrade_ledge.c3b65166cbde7b8d35c6.bundle.js.map