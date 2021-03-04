sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("tinyworld.tinyui.controller.View1", {
		onInit: function () {
			  var oModel = new sap.ui.model.odata.ODataModel("/euro.xsodata", true);
			  var oView = this.getView();
			  oView.setModel(oModel);
		}
	});
});