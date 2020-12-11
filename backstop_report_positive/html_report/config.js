report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_main-banner_0_desktop.png",
        "test": "../bitmaps_test/20201211-111653/backstop_default_BackstopJS_Homepage_0_main-banner_0_desktop.png",
        "selector": ".main-banner",
        "fileName": "backstop_default_BackstopJS_Homepage_0_main-banner_0_desktop.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8000/open-edx-services/comprehensive-theming/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.05",
          "analysisTime": 43
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});