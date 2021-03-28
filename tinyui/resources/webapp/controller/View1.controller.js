sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("tinyworld.tinyui.controller.View1", {
		onInit: function () {
			var oModel = new sap.ui.model.odata.ODataModel("/euro.xsodata", true);
			var oView = this.getView();
			oView.setModel(oModel);
		},
		onPress: function () {
			var oInput = this.getView().byId("input").getValue();
			var name = oInput;
			var partof = "Europe";
			var payload = {};
			payload.name = name;
			payload.partof = partof;
			var insertdata = JSON.stringify(payload);
			$.ajax({
				type: "POST",
				url: "/country/country.xsjs",
				contentType: "application/json",
				data: insertdata,
				dataType: "json",
				crossDomain: true,
				success: function (data) {
					alert("Data inserted successfully");
				},
				error: function (data) {
					var message = JSON.stringify(data);
					alert(message);
				}
			});
		}
	});
});