sap.ui.define([
		"cyclelist/controller/BaseController"
	], function(BaseController) {
	"use strict";

	return BaseController.extend("cyclelist.controller.NotFound", {

		/**
		 * Navigates to the worklist when the link is pressed
		 * @public
		 */
		onLinkPressed: function() {
			this.getRouter().navTo("worklist");
		}

	});

});