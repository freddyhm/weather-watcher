define(["jquery","underscore","backbone","app/views/modal","app/templates"],function(e,t,n,r,i){"use strict";var s=r.extend({template:i.settings,events:{"click #btn-save":"saveSettings"},initialize:function(){r.prototype.initialize.apply(this,arguments),this.$bodyEl.html(this.template(this.model.toJSON()))},saveSettings:function(e){var t={welcomeMessage:this.$("#welcomeMessageInput").val(),backgroundColor:this.$("#backgroundColorInput").val(),celsius:this.$("#tempType").val()==="cel"?!0:!1};this.model.save(t),this.$modalEl.modal("hide")}});return s});