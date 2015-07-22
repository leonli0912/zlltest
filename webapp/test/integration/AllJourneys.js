jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"cyclelist/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"cyclelist/test/integration/pages/Worklist",
		"cyclelist/test/integration/pages/Object",
		"cyclelist/test/integration/pages/NotFound",
		"cyclelist/test/integration/pages/Browser",
		"cyclelist/test/integration/pages/App"
	], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "cyclelist.view."
	});

	sap.ui.require([
		"cyclelist/test/integration/WorklistJourney",
		"cyclelist/test/integration/ObjectJourney",
		"cyclelist/test/integration/NavigationJourney",
		"cyclelist/test/integration/NotFoundJourney",
		"cyclelist/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});