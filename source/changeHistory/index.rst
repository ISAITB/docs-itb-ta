Release history
===============

The current section provides an overview of the changes introduced in each test bed release (specifically each GITB software release) up to the current one. For each release
the following information is provided:

* The **release number** and **date**.
* The **release summary**, describing briefly the main focus of the release and its key highlights.
* The **release details**, listing the issues addressed in each release (bug fixes, new features and improvements).

The latest test bed release is **1.22.0**.

.. note::
    
    **GitHub repository:** The test bed's source code is `published on GitHub <https://github.com/ISAITB/gitb>`_. Although development is not driven through
    its GitHub repository, it remains an excellent notification channel for `new releases <https://github.com/ISAITB/gitb/releases>`_ and 
    `development updates <https://github.com/ISAITB/gitb/commits/development>`_. 

Release 1.22.0 - XX/XX/XXXX
---------------------------

This release significantly extends the test bed's reporting capabilities by introducing new report types at various aggregation
levels, as well as customisable certificates and XML reports at all levels for machine-based post-processing. In addition, conformance status monitoring
was enhanced by allowing users to view their status in earlier conformance snapshots, and by introducing a new hierarchical view per organisation as the
default presentation of the administrator's conformance dashboard. For users operating their own test bed instances, the new release brings 
significant new features such as advanced theming possibilities, new configuration options covering email and automated account clean-up, and the inclusion
of system settings in exports for configuration portability and sandbox definitions. Finally, the test bed's automation API was also extended to include
a lightweight health-check mechanism for availability monitoring, and an operation enabling the management of configuration properties.

With respect to test capabilities, this release brings first-class support for the management of images in test steps, and extends test suite and 
test case metadata to include normative specification references. Furthermore, user interactions were significantly overhauled to allow them to be
minimised and asynchronously completed, manage the inputs included in reports, and support configurable timeouts. Finally, it is now possible to
define administrator verifications of test sessions directly within the test bed, supporting scenarios where manual verification of test results
is required.

**Bug**

* [ITB-1521] - When creating a new community the option to use the domain's description cannot be enabled
* [ITB-1523] - The search field of multi-select filters is hidden when no results are found
* [ITB-1526] - Always display statement actor when creating new statements if specification foresees multiple non-hidden SUT actors
* [ITB-1527] - Organisation users are unable to filter by specification group
* [ITB-1531] - Valid TDL expressions referring to multiple nested containers do not get validated correctly
* [ITB-1532] - Unexpected test suite deployment errors via the REST API don't get logged
* [ITB-1536] - Test session creation error when using a SimulatedMessaging handler with an actor that has statement configuration properties
* [ITB-1541] - Prevent editor style caching that fails to display editor
* [ITB-1552] - Don't show target domain on import screen for administrator of community with no domain
* [ITB-1556] - Containerised build fails for gitb-ui
* [ITB-1565] - When deploying a test suite via REST API test case update instructions are ignored if test suite instructions are missing
* [ITB-1580] - Error while closing a processing transaction involving a remote processing service
* [ITB-1583] - Importing a domain archive skips the update of existing specification groups

**New Feature**

* [ITB-42] - Allow user-defined themes
* [ITB-1322] - Create conformance certificates and reports at the level of specification groups
* [ITB-1448] - Support the display of images in test step reports
* [ITB-1449] - Support the display of images in user interaction steps
* [ITB-1487] - Optionally allow organisation users to view their conformance status in earlier conformance snapshots
* [ITB-1503] - Make the page counters optional in conformance certificates
* [ITB-1509] - Support administrator input in TDL test cases
* [ITB-1511] - Allow the configurable inclusion of badges in conformance certificates
* [ITB-1512] - Support separate conformance badges for on-screen display and in PDF reports
* [ITB-1535] - Allow Test Bed administrators to configure automatic account deletion following inactivity
* [ITB-1540] - Include system settings in exports, imports and sandbox setups
* [ITB-1542] - Add a dedicated Test Bed health-check endpoint to facilitate automation processes and availability monitoring
* [ITB-1543] - Extend test suite and test case metadata to record specification references
* [ITB-1549] - Include default landing pages, legal notices and error templates in exports, imports and sandbox setups
* [ITB-1550] - Include system administrators in exports, imports and sandbox setups
* [ITB-1557] - Support asynchronous user input for test case interaction steps
* [ITB-1558] - Allow minimising user interaction prompts in test sessions
* [ITB-1561] - Support timeouts for user interactions in test sessions
* [ITB-1562] - Support user interaction inputs that are not displayed on the step's report
* [ITB-1563] - Allow configuration of a Test Bed instance's email settings through the UI
* [ITB-1570] - Support setting test configuration via the REST API
* [ITB-1572] - Support XML conformance statement reports
* [ITB-1573] - Allow community administrators to configure XSLTs for customised XML reports
* [ITB-1574] - Create conformance certificates and reports for an organisation spanning all conformance statements
* [ITB-1577] - Support use of custom organisation and system properties in conformance certificate custom messages
* [ITB-1582] - Replace the default presentation of the conformance dashboard with a hierarchical display of conformance statements per organisation

**Improvement**

* [ITB-597] - Make all password or secret value input fields consistent
* [ITB-789] - Disable the search buttons for custom properties when the relevant community does not define any
* [ITB-1378] - Replace default administrator password for new installations with auto-generated unique value
* [ITB-1418] - Support drag and drop for the reordering of parameters, properties and specifications
* [ITB-1505] - Allow TDL interaction steps to have their mime type provided as a variable expression
* [ITB-1515] - Add a "development mode" indication for sandbox Test Bed instances that lack a full security configuration
* [ITB-1524] - Migrate to latest Bootstrap version
* [ITB-1525] - Display an actor's name instead of its identifier in screens and reports
* [ITB-1528] - Don't display a statement's actor when all other specification actors are hidden
* [ITB-1533] - Ensure images provided in test cases can always be previewed
* [ITB-1534] - Extend the TDL DisplayProcessor to set its severity level
* [ITB-1539] - Display expandable icon for system settings panel
* [ITB-1544] - Adapt a sandbox instance's pre-configuration process to not remove processed data archives
* [ITB-1546] - Scan image uploads (badges, theme logos) to ensure they are of accepted image types
* [ITB-1548] - Upgrade Play and replace Akka by Pekko
* [ITB-1551] - Don't show system administrator options to community administrator during import preview
* [ITB-1553] - Support drag and drop for file uploads
* [ITB-1555] - Make all file upload controls consistent
* [ITB-1559] - Show badge indication for refreshed active sessions' logs in session listings
* [ITB-1564] - Allow disabling the Test Bed's contact form and copying the default mailbox
* [ITB-1575] - Hide actor information from PDF reports if actors are not displayed on the UI
* [ITB-1576] - Separate in PDF reports the display of specification groups and options
* [ITB-1578] - Define baseline DB scripts for faster setup time on new installations
* [ITB-1579] - Improve test engine error message when dynamically imported resource cannot be found

Release 1.21.1 - 07/11/2023
---------------------------

.. warning::
  This patch contains important security updates and upgrading from earlier versions is advised.

This is a limited maintenance release to address reported bugs, and most importantly to patch third-party libraries to resolve
published vulnerabilities. Of these the most important is the HTTP/2 Rapid Reset vulnerability that could render a Test Bed
instance vulnerable to a DDoS attack if used directly (i.e. without a reverse proxy) from end users.

**Bug**

* [ITB-1502] - The system administration screen shows the custom welcome page message as disabled even when it is set
* [ITB-1519] - Test Bed REST API documentation may become unavailable

**Improvement**

* [ITB-1516] - Library updates to address CVE-2023-44487 (HTTP/2 Rapid Reset)
* [ITB-1517] - Library updates to address (as a precaution) CVE-2023-22102 (MySQL connector exploit)
* [ITB-1518] - Library updates to address (as a precaution) CVE-2023-45819 (TinyMCE notifications exploit)

Release 1.21.0 - 06/10/2023
---------------------------

This release restructures the test bed's user interface to simplify navigation and make the organisation of all screens more intuitive.
In addition, complex specification setups are now presented in a more intuitive manner, hiding concepts that depending on a 
community's configuration may be superfluous. Test case management is extended by introducing optional and disabled
test cases, as well as new tags that provide visual cues for test case traits. With respect to monitoring a community's conformance, 
administrators can now take and review snapshots of their organisations' testing progress, and also define public badges for their
specifications that can be externally referred to to illustrate an organisation's conformance status. Finally, the management
of on-premise test bed instances is better supported, by exposing a new administration interface allowing administrators to
review and adapt the instance's configuration, as well as define global defaults for all hosted communities.

Alongside these changes to the test bed software, several new features were introduced in the GITB Test Description Language. New 
metadata was introduced to streamline test suite updates, and to define aspects such as test case custom tags, optional and disabled 
flags, from within test suite archives. Furthermore new embedded processing capabilities were introduced to facilitate JSON processing,
test session delays, and generation of random content.

**Bug**

* [ITB-1431] - Background test sessions failing to initialise appear as active
* [ITB-1442] - If the Test Bed is behind a proxy it may fail to redirect the user post-login to the public (internal) home page
* [ITB-1443] - Unable to deploy non-shared test suite via REST API
* [ITB-1447] - Test cases and scriptlets that fail syntax validation should not be attempted to be validated in depth during test suite upload
* [ITB-1451] - Shared test suites are skipped in bulk data imports
* [ITB-1461] - Unable to deploy via REST API a non-shared test suite that matches a shared test suite from another specification in the domain
* [ITB-1468] - Ignore leading and trailing whitespace in user emails when linking EU Login accounts
* [ITB-1470] - Unable to load scriptlets from other test suite in the domain
* [ITB-1471] - Unable to update shared test suite that is not linked to a specification
* [ITB-1472] - Unable to lookup built-in session variables (e.g. DOMAIN) from remote scriptlets
* [ITB-1473] - Scriptlets having a single parameter with a default value and no call inputs produce an error
* [ITB-1478] - Cannot delete specification group that contains specification options
* [ITB-1484] - Unable to import export archives with custom labels set for specification groups

**New Feature**

* [ITB-673] - Navigation breadcrumb
* [ITB-1223] - Allow Test Bed administrators to view and edit system-wide configuration properties
* [ITB-1313] - Support the definition of badges for different specifications
* [ITB-1315] - Allow badges to be queried publicly for organisations (like GitHub badges)
* [ITB-1342] - Allow the Test Bed administrator to define the welcome text displayed on the Test Bed's welcome page
* [ITB-1351] - JSON Pointer embedded processing handler for data extraction from JSON content
* [ITB-1422] - Allow exporting a test case report from the test execution page
* [ITB-1429] - Allow administrators to preview pending changes to community landing pages
* [ITB-1430] - Allow administrators to preview pending changes to community legal notices
* [ITB-1438] - Support for optional test cases that do not count towards conformance
* [ITB-1452] - New embedded processing handler to apply a delay during a test session's execution
* [ITB-1453] - Support quick lookup of community resources when editing rich text content such as landing pages and test case documentation
* [ITB-1454] - Support disabled test cases
* [ITB-1458] - Allow test suite and test case definitions to define their update approach regarding metadata updates and test history reset
* [ITB-1462] - Extend TokenGenerator embedded processing handler to generate random numbers
* [ITB-1463] - Support the definition of labels with custom text and colour for test cases to display in the UI and reports
* [ITB-1466] - Allow administrators to take named snapshots of the conformance overview of their community
* [ITB-1467] - Allow domain parameters to be used as placeholders in conformance certificates
* [ITB-1482] - Allow the Test Bed administrator to adapt the home page message displayed on the login page
* [ITB-1483] - Edit a Test Bed instance's basic configuration values through the user interface

**Improvement**

* [ITB-743] - Restructure organisation user interface
* [ITB-919] - Make the left-side menu collapsible
* [ITB-920] - Move all navigation controls to the left-side menu
* [ITB-1014] - Migrate to latest Java LTS release (17)
* [ITB-1197] - Remove support for Internet Explorer 11
* [ITB-1238] - Use icons to illustrate the different menu options and tabs
* [ITB-1391] - Improve the efficiency of the conformance dashboard
* [ITB-1444] - Allow test services to define an empty getModuleDefinition implementation
* [ITB-1450] - If a test session is terminating do not attempt to create scriptlet outputs
* [ITB-1465] - Allow organisation administrators to edit their users without needing to delete and recreate
* [ITB-1469] - If multiple error messages are raised in a page prevent them from being displayed altogether
* [ITB-1474] - Allow instructions in interact steps to be forcefully displayed without using an editor
* [ITB-1476] - Make the title of a community's conformance certificate optional
* [ITB-1477] - Display test case and test suite descriptions in the conformance dashboard
* [ITB-1479] - Improve display of domain specifications and specification groups
* [ITB-1480] - Make the management of Test Bed default community settings (e.g. landing page) more intuitive
* [ITB-1481] - Make search filters immediately usable without needing to enable them
* [ITB-1485] - Return a 404 "Not found" response for any request to a non-existent path
* [ITB-1486] - Better distinguish non-reversible delete operations on the UI
* [ITB-1489] - Allow navigation to community and domain from conformance dashboard entries
* [ITB-1490] - Allow navigation to community, domain, specification and actor from session dashboard entries
* [ITB-1492] - Allow navigation to community and domain information from conformance statement detail page
* [ITB-1493] - Display system information in conformance statement details page
* [ITB-1495] - Allow a specific landing page to be set for the community or Test Bed administrator
* [ITB-1496] - Present the default conformance certificate options if these have never been set

Release 1.20.1 - 23/06/2023
---------------------------

This release corrects an issue reported by users concerning the test bed's user interface. It also adds a variant of the gitb-types
library to extend its support for older Java platforms.

**Bug**

* [ITB-1440] - Error while retrieving a system's conformance statements

**Improvement**

* [ITB-1432] - Extend support of gitb-types library to include Java 8 as a minimum

Release 1.20.0 - 05/05/2023
---------------------------

This release focuses fully on the test bed's user interface and specifically enhancing its reporting capabilities. The PDF reports produced by the 
test bed have been fully redesigned making them more intuitive, and enriching them with supporting information such as extended documentation,
test session log output, test coverage ratios and step result overviews. In addition, new options were introduced for community administrators to 
customise reports, and to facilitate the management and maintenance of test suite documentation. Finally, this release provided an opportunity to 
resolve reported bugs and to apply precautionary security patches to the test bed's underlying third party software libraries.

**Bug**

* [ITB-522] - Test case report pages may have misplaced headings for complex test cases
* [ITB-1399] - Test suite validation does not catch duplicate test case references
* [ITB-1400] - When a test suite upload fails due to an unexpected reason there is an additional error about a missing parameter
* [ITB-1408] - Error previewing conformance certificate PDF report
* [ITB-1412] - Error importing export archive in community without assigned domain
* [ITB-1416] - When selecting to check all available conformance statements it is possible to create invalid statements

**New Feature**

* [ITB-1394] - Include the test session log in test case reports
* [ITB-1395] - Include extended test case documentation in test session reports
* [ITB-1396] - Support custom ordering for specifications and conformance statements
* [ITB-1411] - Display test result percentage ratios when viewing conformance statements
* [ITB-1413] - Allow copying to the clipboard the HTML source for test suite and test case documentation
* [ITB-1414] - Allow previewing a test case's documentation in PDF reports

**Improvement**

* [ITB-1397] - Show only unique options in search filters
* [ITB-1398] - Expand the height of the selection box for specifications in the test suite upload dialogs
* [ITB-1403] - Include overview of step results in test case PDF report
* [ITB-1405] - Extend the rich text support in custom messages for conformance PDF reports
* [ITB-1406] - Improve PDF report styling and organisation
* [ITB-1407] - Normalize whitespace included in test suite and test case descriptions for PDF reports
* [ITB-1409] - Simplify the usage of placeholders in rich text editors
* [ITB-1410] - Include test result percentages in conformance statement reports and certificates

Release 1.19.0 - 17/03/2023
---------------------------

This release focuses on providing further flexibility in managing a community's overall testing setup and the versioning of 
test cases. Notable changes include the possibility to define additional levels of specifications, and test suites that are
shared across specifications whose test sessions count towards all relevant conformance statements. These extensions are
complemented by a new streamlined process of creating new conformance statements. In terms of version management, test suite
uploads now afford fine-grained control over the testing history and metadata of individual test cases. In addition, the metadata
linked to executed test sessions becomes a snapshot representing their context at execution time. Finally, it is now also possible
to upload community-specific resources such as images, that may be referenced in the community's documentation and landing pages.

Alongside these changes, minor improvements were also made to the GITB Test Description Language, focusing on additional means
of working with data collections. In addition, new variants of the "gitb-types" library were published catering for different API
versions making it simpler to maintain and evolve test extension services.

**Bug**

* [ITB-1302] - Self messaging steps (same to and from actors) are displayed with a squashed arrow
* [ITB-1333] - When selecting to delete test sessions, expanded test sessions are not displayed at full width
* [ITB-1341] - The self-registration page when not using SSO breaks the heading text's alignment
* [ITB-1348] - Tooltips displayed for table headers and wrongly aligned
* [ITB-1349] - Authorisation errors in REST API calls don't get reported correctly
* [ITB-1350] - Test suite management REST API calls are blocked if test session API calls are not allowed for organisations
* [ITB-1354] - A step's status report should allow collapsing only for non-root values
* [ITB-1362] - Test session step status maps allow overriding entries when scriptlet child steps have the same IDs
* [ITB-1363] - Test case and test suite documentation preview produces an error for empty content
* [ITB-1364] - Contact form attachments not named correctly
* [ITB-1366] - Steps within groups and loops not included in test session reports
* [ITB-1367] - Assign steps directly assigning values to maps within maps is reported as a test suite validation error
* [ITB-1368] - Skipped loop steps within other loop steps are not displayed correctly
* [ITB-1374] - Tests including flow steps and set to stopOnError may result in a wrong overall result

**New Feature**

* [ITB-1010] - Allow multiple conformance statements to be defined at the same time
* [ITB-1233] - Introduce optional specification groups to allow additional organisation over specifications
* [ITB-1297] - When uploading a test suite to reset its conformance testing status allow selecting the test cases for which this should happen
* [ITB-1303] - Allow community administrators to upload static resources for use in rich text content such as documentation and landing pages
* [ITB-1318] - Allow test suites to be defined at domain level and be shared across specifications
* [ITB-1352] - Extend CollectionUtils embedded processor to select a random entry from a list
* [ITB-1357] - Extend CollectionUtils processor with operation to see if a collection contains a value
* [ITB-1376] - Adapt GITB types library to support usage in both Java EE and Jakarta EE contexts
* [ITB-1380] - Allow filtering of available conformance statements when creating a new one
* [ITB-1383] - Extend CollectionUtils processor with operation to remove an item from a list or map

**Improvement**

* [ITB-1309] - In the conformance statement list for organisations don't display the domain if one is linked to the relevant community
* [ITB-1323] - Record completed test session information as a snapshot of the metadata applicable when the session was executed
* [ITB-1334] - Improve Content Security Policy
* [ITB-1337] - Simplify reverse proxy setup via environment variables configured directly in the Test Bed
* [ITB-1360] - Improve the error message when using a non-string variable as a template placeholder value
* [ITB-1361] - Record steps' scriptlet identifiers in the STEP_STATUS and STEP_SUCCESS status maps
* [ITB-1365] - Remove warnings from DB migration scripts when initialising a new Test Bed instance
* [ITB-1375] - Allow test suite and test case identifiers to be copied to the clipboard
* [ITB-1379] - Only propose available conformance statements when creating a new one
* [ITB-1381] - Treat a system's version information as optional
* [ITB-1382] - Display tooltips for status icons
* [ITB-1385] - Display icons for all UI constructs that are expandable or collapsible

Release 1.18.1 - 24/11/2022
---------------------------

This is a minor maintenance release to upgrade third party libraries and the test bed's database, as well as correct an
issue reported by test bed users when viewing the test session history.

**Bug**

* [ITB-1331] - Viewing the test session history may produce an "Out of sort memory" error

**Improvement**

* [ITB-1329] - Upgrade MySQL to version 8.0.31
* [ITB-1330] - Upgrade Commons Text to resolve CVE-2022-42889 (Text4Shell)
* [ITB-1332] - Colour-code result text displayed in test step report modals

Release 1.18.0 - 17/10/2022
---------------------------

This release focuses primarily on test engine and GITB TDL extensions to increase the test bed's testing capabilities.
It extends significantly the customisation of scriptlets, allowing steps, information and behaviours to be
adapted dynamically depending on the needs of the calling test cases. The most important of these changes are the new
possibilities to manage the visibility of all scriptlet elements, the conditional inclusion of blocks of steps, and the
support for default input values. Apart from scriptlet extensions, the test bed's built-in service handlers received 
several updates, focused primarily on adding further XML validation features, and the customisation of generated identifiers
and simulated message exchanges.

Aside GITB TDL extensions, several updates were made to the test bed's software. New automation options were made available
through triggers, including new trigger events, input data, support for REST services and JSON, as well as the possibility to
fully test triggers directly from the user interface. Reporting options were also extended, by supporting XML reports of test
sessions and individual test steps for machine processing, as well as a new operation on the test bed's REST API to 
retrieve complete test session reports. These new features were complemented by further minor improvements, such as support for default
custom property values, and various bug fixes. Finally, the test bed software's build tooling was extended to allow
containerised builds, allowing rapid prototyping and experimentation directly from the test bed's source.

**Bug**

* [ITB-1245] - The TokenGenerator's string operation may crash for badly formatted regular expressions
* [ITB-1254] - Updating an organisation user on a Test Bed instance not connected to EU Login produces an error
* [ITB-1268] - Test suite validation blocks scriptlets from using variables from parent contexts (test case or other scriptlets)
* [ITB-1272] - SchematronValidator reports Schematron warnings as information messages
* [ITB-1278] - Test execution diagram includes blank actor column when the Test Engine actor is not displayed
* [ITB-1287] - Messaging steps without transactions pass test suite validation for invalid step inputs of handlers
* [ITB-1308] - Imports used to clone domains and communities within the same Test Bed instance fail to complete

**New Feature**

* [ITB-791] - Allow the complete test of a trigger from its detail page
* [ITB-812] - New trigger event on test session start
* [ITB-1025] - Allow triggers to be defined as REST HTTP POST calls with JSON payload
* [ITB-1168] - Define an XmlValidator embedded validation handler to allow validation of XML against XSD and/or Schematron
* [ITB-1228] - Allow the exporting of test session reports in XML format via the user interface
* [ITB-1229] - Allow the exporting of test step reports in XML via the user interface
* [ITB-1230] - Allow the exporting of test session reports via REST API
* [ITB-1231] - Optionally include the XML test session report in the data of the trigger for test session completion
* [ITB-1246] - Include session identifier, test suite ID and test case ID, as optional data in all trigger calls that refer to specific test sessions
* [ITB-1249] - Include conformance statement properties as optional data in all trigger calls relevant to conformance statements
* [ITB-1261] - Allow scriptlet steps' hidden attribute to be set dynamically as long as it can be calculated at test case load
* [ITB-1262] - Allow messaging steps' reply attribute to be set dynamically within scriptlets as long as it can be calculated at test case load
* [ITB-1263] - Allow a call step to be set as hidden, hiding by default all child steps
* [ITB-1265] - New ExpressionValidator embedded validation handler for validation based on custom expressions
* [ITB-1266] - Allow a flow step's thread blocks to be individually hidden
* [ITB-1267] - Allow the hiding of if step containers but with visible child steps (if only a then block is defined)
* [ITB-1273] - Support default values for scriptlet parameters
* [ITB-1274] - Support static if step evaluation for conditional inclusion of steps in scriptlets (without if container boundaries)
* [ITB-1276] - Include the test session ID in all external messaging, processing and validation service calls
* [ITB-1277] - Include the test case ID in all external messaging, processing and validation service calls
* [ITB-1283] - Include the test step ID in all external messaging, processing and validation service calls
* [ITB-1296] - Support default values for organisation, system and statement properties
* [ITB-1299] - Include the test engine version information in all external messaging, processing and validation service calls
* [ITB-1300] - New predefined SESSION map in the test session context including test session metadata for use in test cases

**Improvement**

* [ITB-1243] - Fail test suite validation when multi-operation embedded processing handlers are used without specifying the operation to use
* [ITB-1244] - Extend the TokenGenerator's uuid operation to support optional prefix and postfix inputs
* [ITB-1247] - Use icons for trigger status display
* [ITB-1248] - Add visual grouping for trigger event types
* [ITB-1251] - Check formatting restrictions on domain parameter and statement parameter names
* [ITB-1252] - Add a user friendly name for conformance statement (endpoint) parameters
* [ITB-1253] - Consider a TAR report's context as a "map" by default
* [ITB-1257] - If using simplified process steps consider the input's type when resolving its corresponding parameter
* [ITB-1258] - Allow the assign step to create multiple levels of maps if they don't already exist
* [ITB-1259] - When using simulated embedded handlers (DisplayProcessor, SimulatedMessaging) allow mime types to be set for the display of provided parameters
* [ITB-1260] - In the session log button badge for unread output highlight whether these include warnings or errors
* [ITB-1269] - Optionally include the Schematron assertion test information in the SchematronValidator's report
* [ITB-1270] - Optionally sort XSDValidator and SchematronValidator findings based on severity
* [ITB-1271] - Optionally include validation artefacts in XSDValidator and SchematronValidator reports
* [ITB-1279] - Support containerised build via Docker Compose
* [ITB-1285] - Allow on-the-fly replacement of existing map entries as the result of assign steps
* [ITB-1286] - Show test suite validation warning for a process step without an operation referring to a handler that supports multiple operations
* [ITB-1288] - Reorganise and relabel test execution screen buttons
* [ITB-1292] - Include the build timestamp in the release information displayed for nightly builds

Release 1.17.0 - 20/07/2022
---------------------------

This release focuses primarily on the GITB Test Description Language (TDL) and the capabilities of the test bed's
test execution engine. The GITB TDL is extended with several new processing and messaging capabilities that simplify
common operations and working with data transformations and templates. In addition, scriptlets, the GITB TDL 
construct for reusing test steps across test cases and test suites, are now made more flexible by allowing texts
and actors to be dynamically set according to their usage context. Finally, the expression language used by GITB TDL
steps for simple processing is now upgraded to the latest XPath version leading to expression simplifications and multiple
new use cases becoming available.

Apart from the new GITB TDL features, changes in the test bed software include performance improvements, more
extensive test suite validation, and most importantly new REST API operations to deploy and undeploy test suites.
The new test suite management operations complement the previously available test session operations to further
facilitate using the test bed in continuous integration processes for test development.

**Bug**

* [ITB-1200] - Assign step set to append for a map variable should create (and append) to a list
* [ITB-1241] - Map variables cannot be directly assigned to other maps or steps' map inputs

**New Feature**

* [ITB-91] - Switch TDL expression language from XPath 1.0 to XPath 3.0
* [ITB-484] - Embedded processing handler to display to the user provided inputs
* [ITB-970] - Embedded processing handler for XSLT-based XML transformations
* [ITB-1028] - Embedded processing handler to process a template with specific placeholder inputs
* [ITB-1053] - Embedded processing handler to use FreeMarker templates for template processing
* [ITB-1060] - Allow messaging steps' actors to be set dynamically within scriptlets
* [ITB-1194] - Allow test suites to be uploaded and removed via the Test Bed's REST API (to support CI/CD processes)
* [ITB-1198] - Embedded messaging handler for simulated exchanges between actors
* [ITB-1202] - Allow test step descriptions to be set dynamically within scriptlets
* [ITB-1205] - Allow the titles of test steps that have child steps to be set dynamically within scriptlets
* [ITB-1206] - Allow the title of the popup of user interaction steps to be set dynamically
* [ITB-1207] - Allow interaction step actors to be set dynamically within scriptlets

**Improvement**

* [ITB-885] - Make messaging transactions optional
* [ITB-1186] - Provide Open API documentation for the Test Bed's REST API
* [ITB-1201] - Support collapsing and expanding of data presented in test step reports
* [ITB-1203] - Handle all messaging for embedded messaging handlers with non-blocking IO
* [ITB-1208] - Prevent during test suite validation scriptlets that call themselves (directly or indirectly)
* [ITB-1209] - During test suite validation check that scriptlets called by test cases have correct actor references
* [ITB-1213] - Allow connection properties to be defined for non-transactional process steps
* [ITB-1232] - Support POST requests for querying test session status via the REST API

Release 1.16.1 - 06/04/2022
---------------------------

This is a minor maintenance release to upgrade third party libraries, and to correct minor bugs related to the display
of tooltips and the test bed's test execution REST API.

**Bug**

* [ITB-1178] - Long help tooltips are not correctly wrapped after activating conformance dashboard status tooltips
* [ITB-1184] - REST API inputs cannot replace user input map variables

**Improvement**

* [ITB-1182] - Upgrade to Java 11.0.14
* [ITB-1183] - Upgrade 3rd party libraries to address reported CVEs

Release 1.16.0 - 18/03/2022
---------------------------

This release introduces numerous changes for the test bed's user interface as well as the internal test engine. The key feature of this
release is the test bed's new machine-to-machine API that allows test sessions to be launched and managed via REST calls. The execution approach 
of test sessions is also extended to allow parallel or sequential test execution, as well as a redesigned test execution display that offers 
execution options and simplified monitoring when running large numbers of tests. Monitoring of active test sessions is also extended to allow easier 
following of updates and an enhanced session log experience by automatically updating log entries, allowing log tailing, filtering of log levels, highlighting
of entries based on severity, as well as indications for received log updates. Viewing the details of conformance statements is also improved by allowing
users to search for specific tests and filter based on status, while improving the display of statements and their status overview.

Several new features and improvements have also been made to the test engine and the GITB Test Description Language. Key extensions include the support for
custom test services to contribute to test session logs, and the ability to declare how test cases support parallel execution. These features are complemented
by numerous minor extensions such as the support for namespace declarations to simplify XML processing, new means of checking test steps' status, and the
improvement of step progress logging. Finally, this release introduces bug fixes for reported issues and internal performance enhancements to increase test session
throughput.

**Bug**

* [ITB-1110] - Remote messaging handlers signalled twice to finalize session
* [ITB-1111] - A scriptlet should inherit the caller's stopOnError approach if it does not define it itself
* [ITB-1115] - Container steps where internal arrows between actors go from right to left may not be correctly contained
* [ITB-1116] - Test execution page limits unnecessarily compacts the display of test case names
* [ITB-1119] - Using links in test suite and test case documentation may be blocked
* [ITB-1122] - Test cases with multiple SUT actors pass test suite validation
* [ITB-1140] - Session history page clips test case filter dropdown
* [ITB-1153] - Test cases with actors having a set display order but that are not used break the test diagram display
* [ITB-1162] - A test step with an explicit stopOnError approach should override the approach defined by its caller
* [ITB-1166] - Long, non-breakable texts break table displays

**New Feature**

* [ITB-387] - Allow execution of test cases via machine-to-machine API
* [ITB-883] - Allow a test case definition to define whether it must run sequentially or can be parallelised
* [ITB-884] - Extend the test engine to support batch test sessions executed in parallel or sequentially
* [ITB-1068] - Allow custom GITB services to contribute session log output
* [ITB-1069] - Allow the user to filter the test session log output based on severity levels
* [ITB-1081] - Allow sorting of a community's organisations based on their registration sequence
* [ITB-1094] - Filtering options for test cases in conformance statement details page
* [ITB-1112] - Record the specific result (pending, success, failure, undefined, skipped) for each test step
* [ITB-1120] - Allow users to choose whether test sessions launched in background batches should run in parallel or sequentially
* [ITB-1121] - Allow users to refresh the status display of an active test session to monitor its progress
* [ITB-1148] - Display badge for new log messages on test execution's log display button
* [ITB-1158] - Allow the definition of namespaces for use in XPath expressions in test cases

**Improvement**

* [ITB-50] - Display message to user for an interactive session that is externally terminated
* [ITB-1040] - Add tooltips to all buttons that are displayed as icons
* [ITB-1061] - Limit proposed multi-select search filter options if too many in number
* [ITB-1078] - Visually highlight log entries of different levels when viewing a test session log
* [ITB-1083] - Remove blocking call within the Test Bed engine when initiating a test session
* [ITB-1089] - Include step description (if defined in the test case) in the log output of a test session
* [ITB-1092] - Automatically display self-registration settings when enabling self-registration for a community
* [ITB-1093] - In the conformance statement details page display test cases and configuration parameters as tabs
* [ITB-1096] - Allow justification of images in rich text content (e.g. landing pages and documentation)
* [ITB-1097] - Move dashboard navigation shortcuts to the top of the display
* [ITB-1126] - Provide more meaningful information when a test session fails because a test service could not be reached
* [ITB-1128] - Allow administrators to view session logs for active test sessions
* [ITB-1132] - Simplify the presentation of the conformance statement detail page
* [ITB-1133] - Test sessions moved to the background after having started interactively should be ran sequentially
* [ITB-1134] - Text search filters should be automatically applied when unfocused
* [ITB-1135] - Make the conformance statement details panel collapsible
* [ITB-1136] - Group together previous and upcoming test cases when executing several test cases in interactive mode
* [ITB-1137] - Support display of missing information for actors with multiple configuration endpoints
* [ITB-1138] - When executing multiple tests allow the user to hide/show completed and pending tests
* [ITB-1139] - When executing multiple tests allow the user to choose whether they should continue automatically or manually
* [ITB-1141] - Display loading indicator when filtering a community's organisations
* [ITB-1144] - Pass test session ID to validation service calls
* [ITB-1145] - Pass test session ID to processing service calls as the default session identifier
* [ITB-1146] - Consider actor entries in test cases as simulated by default
* [ITB-1147] - Automatically refresh the contents of the test session log display (if open) for newly received log messages
* [ITB-1149] - Display and record a report of the inputs provided through user interaction steps
* [ITB-1150] - Display interaction steps as being between the tester and the test engine, not the SUT actor itself
* [ITB-1151] - Display the interaction step tester actor after SUT and SIMULATED actors
* [ITB-1152] - Hide individual requests and instructions when displaying interaction steps
* [ITB-1160] - Merge table columns containing buttons and hide the column title
* [ITB-1161] - Allow sections of test case definitions to be defined in any order
* [ITB-1163] - While search results are being refreshed prevent interactions with the displayed results
* [ITB-1164] - In test session dashboard displays allow collapsing the active and completed sections
* [ITB-1165] - Display condensed test results for conformance statements using icons and counts

Release 1.15.1 - 24/01/2022
---------------------------

This is a minor maintenance release that corrects user-reported bugs, notably issues in the test engine due to test
session concurrency, and handling of XML data. In addition, minor problems linked to the test bed's user interface
were also addressed.

**Bug**

* [ITB-1085] - STEP_SUCCESS map may not be updated before consulted from next step
* [ITB-1086] - Lookup of XML (object) variables from test session context may fail
* [ITB-1087] - Test execution diagram displays titles of messages sent to the same lifeline with inconsistent justification
* [ITB-1090] - Contact form submission during login process sends notification but returns to home page

**Task**

[ITB-1101] - Automate GitHub release process

Release 1.15.0 - 29/11/2021
---------------------------

This release introduces multiple changes both to the test bed's user interface as well as the internal test engine. In the user
interface several screens have been streamlined to better present information and provide shortcuts to consult test sessions,
involved parties, conformance statements and detailed test log outputs. These updates are complemented by improvements allowing test 
information to be extracted more easily, and further filtering options for conformance statements and organisations. In addition,
important improvements have been made to test execution, enabling more efficient handling of multiple concurrent sessions and large 
test data. With respect to the GITB Test Description Language, several new features have been added to make it simpler to define 
frequently used steps and to further automated type conversions. In addition, new features such as test session logging and stylised
messaging presentations allow for further customisation and management of test session output.

**Bug**

* [ITB-1009] - Date-based search filtering should ignore specific times
* [ITB-1011] - Unable to bulk import a test suite where the test suite name does not match its identifier
* [ITB-1013] - Changing an organisation, system or statement parameter type should remove existing values
* [ITB-1026] - Test step PDF report generation fails when context is not defined
* [ITB-1032] - Test diagram for TDL flow element may not correctly wrap child steps
* [ITB-1033] - Use of embedded processing handlers may fail test suite validation
* [ITB-1043] - Output message for test sessions completed with warnings displays as an error
* [ITB-1044] - Test case imports using a variable defined during test execution fail validation
* [ITB-1048] - Verify step fails for remote validators that don't define their expected inputs
* [ITB-1051] - Call step input parameters should be passed by value, not by reference
* [ITB-1052] - Log step fails when printing list or map variables
* [ITB-1057] - TDL test suite validation does not report the offending steps for invalid expressions
* [ITB-1059] - Past test session execution diagrams display actor names using their IDs

**New Feature**

* [ITB-756] - Support paging and filtering in the listing of a community's organisations
* [ITB-760] - Allow search filtering for organisations in community details page
* [ITB-761] - Provide shortcuts to detail pages from conformance dashboard entries
* [ITB-776] - Display test session log output in session dashboard and test history screens
* [ITB-785] - Allow filtering on the conformance dashboard based on the overall conformance result
* [ITB-822] - Preview a test case's steps from test suite management screens
* [ITB-918] - Simplified usage of process and call steps by optional use of attributes versus elements
* [ITB-948] - Provide shortcuts to detail pages from session dashboard and test history entries
* [ITB-951] - Allow test bed, community and organisation administrators to terminate all active sessions
* [ITB-979] - Allow return values from test services to be forDisplay, forContext or both (default)
* [ITB-1004] - Provide shortcut to view the latest session details for the test cases shown in the conformance dashboard
* [ITB-1005] - Provide shortcut to view the latest session details for the test cases shown in the conformance details page
* [ITB-1006] - Show the last conformance status update time per test case in the conformance dashboard
* [ITB-1007] - Support sorting results on the conformance dashboard
* [ITB-1008] - Allow filtering on the conformance dashboard based on the last updated time
* [ITB-1029] - Allow a processing or call step to return its (single) output as a specific variable
* [ITB-1034] - Support "copy to clipboard" functionality for displayed texts in test session step reports
* [ITB-1036] - Support "copy to clipboard" functionality for test session information
* [ITB-1045] - Allow a test case to define the level of its log output
* [ITB-1047] - Support severity levels for the TDL log step
* [ITB-1050] - Support different messaging arrow display styles in test execution diagram

**Improvement**

* [ITB-450] - Make binary configuration property handling more lightweight
* [ITB-755] - Support paging in the presentation of the conformance dashboard
* [ITB-757] - Simplify presentation of a community's details
* [ITB-870] - For non-SSO Test Bed instances replace user email with username
* [ITB-907] - Define all file uploads as multipart form submissions
* [ITB-949] - Remove session log output from gitb-srv server log
* [ITB-957] - In conformance overview screens show the date linked to the last overall conformance update
* [ITB-974] - Reduce test suite validation warnings for missing domain parameters
* [ITB-999] - Allow "select all" and "clear all" options for multiple selection search filters (per filter)
* [ITB-1003] - Aggregate test cases in test suites for the conformance dashboard screen
* [ITB-1012] - Use temporary test session storage to record large binary and text data
* [ITB-1021] - Download data from test step reports only if requested
* [ITB-1022] - Remove context data from test step PDF reports
* [ITB-1023] - Make all button toolbars' alignment consistent
* [ITB-1024] - Use tabs to display all child lists in detail pages
* [ITB-1027] - Show table pagination controls only when multiple result pages exist
* [ITB-1031] - Use test session ID for state management in messaging and processing services if no session ID is returned by the service
* [ITB-1035] - Test diagram grouping display should not extend to unrelated actors
* [ITB-1037] - In test execution diagram display test step description over actor lifeline
* [ITB-1038] - Cache landing page upon login
* [ITB-1039] - Mention relevant handler name in error messages produced by test suite validation
* [ITB-1041] - Allow advanced styling for rich content (documentation, landing pages, error templates, legal notices)
* [ITB-1042] - Allow the verify step's severity level to be dynamically defined
* [ITB-1049] - Allow conversion from all variable types to single element lists
* [ITB-1058] - Allow embedded XSD and Schematron validators to work with string and binary schema and Schematron inputs
* [ITB-1064] - Queue updates in gitb-ui to test session status to favour scalability
* [ITB-1066] - Do not produce warnings for missing variables referenced in a test case's output section
* [ITB-1070] - Make the session identifier optional when processing services respond to beginTransaction calls
* [ITB-1072] - Allow conversion from list and map variable types to strings

Release 1.14.1 - 06/09/2021
---------------------------

This is a minor maintenance release that corrects bugs, most notable of which is a problem that prevented the reuse of imported
template files in GITB TDL test cases. In addition, minor improvements are made to the display of validation step
reporting output.

**Bug**

* [ITB-1000] - Provide error feedback when attempting to open binary content in an editor
* [ITB-1001] - Imported template files cannot be reused with different placeholder values

**Improvement**

* [ITB-890] - Allow a verify step's details to be minimised upon display
* [ITB-891] - Allow a test suite validation report's details, displayed upon upload, to be minimised
* [ITB-1002] - Use buttons instead of links when viewing a step report's items

Release 1.14.0 - 17/08/2021
---------------------------

This is a limited release that adds better support for handling user interactions as part of test sessions. Inputs can
now be provided using various controls, whereas data displayed to users can also be downloaded or displayed in
syntax-sensitive editors. In addition, this release resolves several user-reported bugs.

**Bug**

* [ITB-986] - Test case presentation may not present separator line between a flow step's threads
* [ITB-987] - Custom select-based organisation property does not trigger checks for dependencies when updated
* [ITB-988] - When EU Login is in use community administrators cannot add new organisation users
* [ITB-989] - User interaction test session steps with dropdown inputs may not record selected values
* [ITB-991] - Organisation admins in communities with organisation update restrictions should always be able to manage their organisation's users
* [ITB-992] - Popup to remove a user's role (when EU Login is used) does not display tooltips
* [ITB-993] - Unable to access the profile options on very low resolutions

**New Feature**

* [ITB-614] - Allow content editors presented to report on test execution to display content-specific highlighting

**Improvement**

* [ITB-645] - Support different types of text input fields in user interaction steps
* [ITB-985] - Interact step instructions that are too large should be opened in an editor or downloaded
* [ITB-990] - Enforce TLS 1.2 when connecting to a remote SMTP service over SSL


Release 1.13.0 - 01/07/2021
---------------------------

This release brings important internal updates to the test bed by upgrading its components to use the latest middleware
and framework versions. In addition, it resolves several reported bugs and makes improvements both with respect to test
execution but also the operation of on-premise test bed instances. Regarding the GITB Test Description Language, this
release brings several new features and improvements that facilitate the development of multi-step test cases. Apart from
simplifying their execution, the test cases' presentation is also enriched, allowing test developers to define test step
grouping, display style and visibility, for a better structured and simplified presentation to users.

**Bug**

* [ITB-482] - Test case group tests executed but not displayed
* [ITB-671] - Styling of WYSIWYG editors does not match exactly the final display
* [ITB-900] - Tables displaying test sessions cannot be sorted
* [ITB-901] - Unable to download test session report for archived sessions
* [ITB-902] - Selected specifications not cleared when disabling search filters
* [ITB-926] - When editing a trigger the already selected organisation and system do not appear as such
* [ITB-929] - Importing a domain archive may not correctly match existing test suites
* [ITB-938] - Test sessions fail to start when configuration is missing and actors have no configuration endpoints
* [ITB-942] - Test session history filters for organisation users may contain duplicate test suites
* [ITB-943] - Test history displays end time as default sort column for completed tests
* [ITB-946] - Downloading a conformance statement parameter file fails if attempted immediately after uploading it
* [ITB-947] - Conformance statement parameter editing allows empty values
* [ITB-950] - Flow step description and documentation not displayed
* [ITB-952] - Pending loop iteration steps do not appear as skipped when session stops
* [ITB-956] - Test sessions may complete before notifying of final updates
* [ITB-959] - Data import does not correctly update matching domain parameters of type "secret"
* [ITB-965] - Prevent large custom titles for steps with sub-steps from breaking the display

**New Feature**

* [ITB-704] - Extend all group step types to define if they are presented as collapsed by default
* [ITB-805] - Allow a test bed master encryption password to be replaced
* [ITB-814] - Allow test steps to be set as hidden
* [ITB-966] - Allow test step groups to be collapsed and expanded by the user
* [ITB-969] - Include a "Find out more" link in the footer links

**Improvement**

* [ITB-64] - Optionally make a processing service a visible test step
* [ITB-155] - Concatenate and minify web assets
* [ITB-300] - Minify web libraries
* [ITB-619] - Update Angular dependency
* [ITB-777] - Make test session log output more user friendly
* [ITB-806] - Add restrictions to passwords set using the password replace feature
* [ITB-871] - For non-SSO Test Bed instances enforce password restrictions
* [ITB-898] - Migrate SSO security configuration to latest version
* [ITB-899] - Correct namespace mapping log message when triggering new test sessions
* [ITB-906] - Display loop step iterations' overall status in iteration selection dropdown of test diagram
* [ITB-908] - Add pending indicators for all button actions
* [ITB-915] - Upgrade MySQL to version 8
* [ITB-927] - Allow community administrators to delete all organisation administrators
* [ITB-960] - Ensure custom parameter values (domain, organisation, system, statement) of type "secret" are encrypted at rest
* [ITB-961] - Make test step descriptions optional
* [ITB-964] - For a non-SSO Test Bed instance request and represent the user email addresses as usernames
* [ITB-967] - Remove email formatting requirements from usernames for non-SSO Test Bed instances
* [ITB-968] - Make version number a link to the release notes

Release 1.12.0 - 03/03/2021
---------------------------

This releases focuses on the test bed's test execution engine and the GITB Test Description Language to facilitate the development
of complex test suites. The test case scriptlet concept has been significantly extended, allowing reusable blocks of test steps
to be shared across test cases but also across test suites. Moreover, reusing common resources is now also possible for any kind
of artefact, template or documentation content that may be imported by test cases, and is further facilitated by allowing
a test suite to not include test cases itself but rather act as a resource holder for other test suites. Aside from such
features focusing on sharing and reuse, this release also simplifies test suite validation and extends the test engine's
embedded processing capabilities with new options of working with timestamps, regular expressions and collection structures.

**Bug**

* [ITB-172] - Scriptlet parameter errors lead to inconsistent results
* [ITB-173] - Scriptlet requires parameters and variables
* [ITB-174] - Scriptlet outputs must match variables
* [ITB-788] - Test suite upload with invalid ZIP archive may not report validation error
* [ITB-820] - Unexpected error when validating a test suite with multiple test suite XML files
* [ITB-837] - Unable to update a system's version number
* [ITB-842] - Iteration steps cannot be reviewed in completed session display
* [ITB-843] - Prevent user from attaching to contact form more files than allowed maximum
* [ITB-861] - Error when user exports own conformance certificate
* [ITB-867] - Call step passing wrong number of inputs to scriptlet is not blocked at test suite validation time
* [ITB-872] - Legal notice headings styled differently when viewed from the welcome page or internally
* [ITB-873] - Standalone XML file defining scriptlet cannot be validated against the GITB TDL XSD
* [ITB-875] - Test diagram display may overlap output message for minimal test cases
* [ITB-876] - Imports defined in scriptlets are not processed
* [ITB-882] - The display of nested loop steps is not correctly updated during test execution

**New Feature**

* [ITB-780] - Archive test sessions after a specific time period has elapsed
* [ITB-782] - Allow scriptlets to be shared across multiple test cases
* [ITB-818] - Allow resources to be shared between test suite archives
* [ITB-840] - Support utility functions for maps and lists
* [ITB-869] - Support the import of test suites without test cases (i.e. shared resource packages)
* [ITB-894] - Allow test cases to make custom regular expression manipulations

**Improvement**

* [ITB-175] - Allow scriptlets to not have outputs
* [ITB-463] - Allow timestamp generation based on received dates and times
* [ITB-668] - Updated embedded SchematronHandler to use latest validation libraries
* [ITB-711] - Make the session identifier optional for GITB services
* [ITB-781] - Upgrade core component dependencies
* [ITB-800] - Return output from call step even upon failure
* [ITB-807] - Mark default users following new installation as requiring a password change
* [ITB-823] - When validating a test suite display information messages for the use of custom configuration properties (not warnings)
* [ITB-825] - Reduce the number of warnings from TDL test suite validations
* [ITB-836] - Allow editing a test suite's version number through the UI
* [ITB-866] - Disable browser autocomplete for input fields
* [ITB-887] - Order uploaded test suite validation reports based on severity
* [ITB-888] - Allow imports with the same name from different scriptlets
* [ITB-889] - Check for unique variable, parameter, import, input and output declarations in test cases
* [ITB-893] - Allow the embedded SchematronValidator to be informed of the Schematron type to consider (pure or XSLT)

Release 1.11.1 - 11/12/2020
---------------------------

This is a minor maintenance release that corrects issues with test session error handling and the display of active test sessions, and adds support in the
GITB Test Description Language for managing undefined variables.

**Bug**

* [ITB-829] - A completed test session's diagram does not display steps as skipped when the session was stopped by the user
* [ITB-830] - Internal flow steps are not displayed as skipped when stopping a test session
* [ITB-831] - Boundary of flow step box in test execution diagram is too narrow
* [ITB-832] - Test sessions using embedded messaging handlers leave open connection ports on unexpected connection closures
* [ITB-833] - Test session diagram may fail to display step updates
* [ITB-834] - Pending messaging steps from a flow step's threads that are skipped result in a test session failure

**Improvement**

* [ITB-819] - Expressions with references to non-existent variables should return an empty value rather than fail

Release 1.11.0 - 13/11/2020
---------------------------

This release brings a range of improvements for all test bed users. Community administrators benefit from further customisation options 
through additional trigger events to react to test results, as well as fine-grained permissions to prevent modifications once testing has
started. In addition, all users benefit from extended search capabilities on test sessions and conformance statements based on custom
properties, session IDs and specification actors; and a redesigned test session display that clarifies output and extends presented information.
These updates are further complemented by interface improvements such as progress indicators and status messages. Finally, this release also
extends the GITB Test Description Language with new features such as customised output messages, termination of tests on errors and persistent
validator outputs.

**Bug**

* [ITB-508] - Test sessions that are pending but not started are not automatically terminated after the idle period
* [ITB-735] - Community export with triggers and no linked data may cause imports to fail validation
* [ITB-765] - Embedded XSDValidator fails to resolve XSDs with complex import hierarchies
* [ITB-772] - User interaction steps should allow scrolling for long non-breaking text
* [ITB-783] - Call step initialises prematurely and fails for missing input variables

**New Feature**

* [ITB-428] - Test session variable recording the current overall test result status
* [ITB-693] - Add loading indication on UI when waiting to load data
* [ITB-698] - Extend GITB TDL to support a custom output message for the test session
* [ITB-699] - Display test session output message in test session history display
* [ITB-700] - Display test session output message in conformance statement detail page (per test case)
* [ITB-701] - Display test session output message in conformance dashboard (per test case)
* [ITB-702] - Display test session output message in conformance statement report (per test case)
* [ITB-703] - Display test session output message in conformance certificate (per test case)
* [ITB-712] - Add a user permission to prevent organisation data changes once tests are recorded
* [ITB-713] - Add a user permission to prevent system data changes once tests are recorded
* [ITB-714] - Add a user permission to prevent conformance statement changes once tests are recorded
* [ITB-715] - Create trigger event for a completed test session
* [ITB-716] - Create trigger event for a completed conformance statement
* [ITB-736] - Allow community administrators to selectively delete test sessions
* [ITB-737] - Create trigger event for a failed test session
* [ITB-745] - Allow search of test sessions by session ID for administrators and users
* [ITB-746] - Display test session ID to organisation users to facilitate support requests
* [ITB-747] - Add "no data" row to all tables when they have finished loading and have no data to show
* [ITB-749] - Allow the output returned from a validation service to be recorded in the test session context
* [ITB-751] - Support search by specification actor in test session history screens
* [ITB-767] - Configure a specific step failure to be fatal (i.e. immediately stop the test session)
* [ITB-768] - Configure a test case to immediately fail upon any error
* [ITB-769] - Configure a sequence of steps to immediately fail upon any error
* [ITB-770] - Display test session output message in test case report

**Improvement**

* [ITB-534] - Replace completed test session display with sequence diagram presentation
* [ITB-604] - Allow custom member properties to be optionally used for filtering
* [ITB-738] - Display test session ID to organisation users in test history screen
* [ITB-739] - Allow community administrators to download a test session report from the session dashboard
* [ITB-740] - Show pending status for actions triggered via table row controls (e.g. test session export)
* [ITB-741] - Improve display of test session status in session and conformance listings
* [ITB-742] - Display test sessions' test suite to organisation users in test history screen
* [ITB-744] - Display a conformance statement's overall status
* [ITB-759] - Allow search filters to be minimised while still being enabled
* [ITB-766] - Disable export buttons when no results are available
* [ITB-771] - Include color coding for status displays in PDF reports
* [ITB-773] - Support custom title for server interaction popups during test case execution
* [ITB-775] - Always display test engine lifeline last in test session diagram
* [ITB-778] - When a test session terminates at an intermediate step display remaining steps as skipped

Release 1.10.2 - 12/10/2020
---------------------------

This is a minor maintenance release that extends the usage of domain parameters and corrects issues reported by users,
notably on the handling of custom properties in self-registration.

**Bug**

* [ITB-694] - Updating landing pages, error templates and legal notices should remain on the detail page
* [ITB-732] - Self-registration organisation properties may not get recorded in an SSO-enabled environment
* [ITB-733] - Required organisation properties in self-registration with unfulfilled prerequisites should not be required

**Improvement**

* [ITB-696] - Allow domain parameters to be provided as input to community triggers
* [ITB-697] - Support domain parameters that are not included in tests
* [ITB-727] - During self-registration and given a single and required configuration template, pre-select it as mandatory
* [ITB-729] - Display which organisations are templates in the community details screen
* [ITB-734] - Hide parameters as trigger data items if none are defined

Release 1.10.1 - 02/10/2020
---------------------------

This is a minor maintenance release to address issues reported by users, notably on the handling of documentation content
in test suites.

**Bug**

* [ITB-721] - Large test step documentation content prevents test sessions from starting
* [ITB-722] - Documentation links ignore link target attribute

**Improvement**

* [ITB-708] - Hide empty "Test" entry from PDF validation report
* [ITB-723] - Ensure all documentation links open in a separate window
* [ITB-724] - Ensure the test case and test suite documentation preview matches exactly the actual display

Release 1.10.0 - 07/09/2020
---------------------------

This release provides community administrators with further flexibility on community customisation and its
tailoring for their conformance testing strategy. This is achieved by means of new features on custom property management,
advanced automation options through triggers, and the fine-tuning of self-registration requirements and user
permissions. The management of test suites is also enhanced by enabling enhanced and bulk test suite uploads, and allowing
administrators to edit online the documentation and metadata of test suites and test cases. These changes are 
complemented by the latest improvements in the GITB Test Description Language, allowing flexibility in the loading of
documentation and artefact resources, customisation of display labels, and a new logging step to add details to 
test sessions' output.

**Bug**

* [ITB-519] - Multiple session invalid messages when session is invalidated
* [ITB-599] - Sessions have a maximum global timeout of 1 hour regardless of activity
* [ITB-655] - Interaction step requests fail if defined as empty (but not self-closed) elements
* [ITB-656] - Test case descriptions in test execution page spanning multiple lines display with extra spacing.
* [ITB-677] - Invalid test suite resource imports may succeed test suite validation
* [ITB-681] - Warning message when copying a system's test configuration is not correct

**New Feature**

* [ITB-474] - Add logging element to GITB TDL
* [ITB-591] - Replicate a test suite to other specifications
* [ITB-592] - Allow online editing of a test suite's metadata
* [ITB-593] - Choose whether a test suite upload should replace existing domain information
* [ITB-594] - Allow documentation content in TDL steps to be imported from another resource in the test suite archive
* [ITB-606] - Add support for the Expect-CT header
* [ITB-648] - Support triggers for events within a community
* [ITB-652] - Allow a community administrator to customise organisation administrator privileges
* [ITB-653] - Allow organisation, system and conformance statement parameters to be set as hidden
* [ITB-654] - Allow download of conformance certificate by organisation managers
* [ITB-672] - Allow online editing of a test case's metadata
* [ITB-675] - Upload test suite to multiple specifications
* [ITB-679] - Support the definition of organisation and system properties to be passed to triggers
* [ITB-685] - Preview custom property completion forms
* [ITB-686] - Support variable references when importing artifacts in test cases
* [ITB-687] - Support custom display titles for TDL steps
* [ITB-691] - Support dependencies between conformance statements parameters
* [ITB-692] - Support predefined values for conformance statement properties

**Improvement**

* [ITB-400] - Use an uploaded test suite's ID instead of its name to match existing test suites
* [ITB-451] - Allow administrators to specify ordering for custom community properties
* [ITB-596] - Allow a community administrator to set custom organisation properties used in self-registration as being mandatory and blocking
* [ITB-598] - Allow a community administrator to require template selection during self-registration as a mandatory
* [ITB-601] - Support predefined values for custom member properties
* [ITB-602] - Support dependencies between custom member properties
* [ITB-644] - Remove fields from the display of the test suite upload confirmation popup when empty
* [ITB-647] - Make parameter definition through getModuleDefinition optional
* [ITB-657] - Upgrade dependencies
* [ITB-660] - Make default input sanitisation case insensitive
* [ITB-663] - Allow customised configuration for the internal GITB DB user
* [ITB-676] - Restrict data archive import file selection to ZIP archives
* [ITB-678] - Complete security configuration of session cookies
* [ITB-689] - Hide endpoint display in conformance statement details if there is only one endpoint
* [ITB-690] - Hide endpoint description if empty

Release 1.9.1 - 18/05/2020
--------------------------

This is a patch release to address issues linked to errors in data imports and failure handling in interactive test sessions.
In terms of new features this release extends the customisation options linked to community self-registration by extending the
help text linked to community tokens.

**Bug**

* [ITB-608] - Interactive test session may on unexpected error display message for continuing execution
* [ITB-610] - Unable to import community when no domain data are included in the data archive
* [ITB-612] - Empty file input through user interaction during a test session stops the test session

**New Feature**

* [ITB-595] - Automatic migration of older version data archives to target Test Bed version
* [ITB-609] - Allow customised message for self-registration help text

**Improvement**

* [ITB-600] - Hide the description of endpoint parameter inputs when there is no description
* [ITB-603] - Add progress indicator for CSV export buttons
* [ITB-611] - Remove option to retry after unexpected failure during test execution

Release 1.9.0 - 30/04/2020
--------------------------

This release introduces numerous new features and improvements, the most important ones being the support for parallel and 
background test session execution, and the ability to transfer via export a community's complete configuration across different
test bed instances. Apart from these key features, numerous improvements are made also to the self-registration process enabling 
configuration options such as user restrictions and notifications, and the use of test cases that now support extended documentation
and improved result display. FInally, a wide range of enhancements have been made to the test bed's user centricity, including 
ubiquitous help tooltips, visual feedback for all actions, a context-specific user guide and the possibility to fully manage a user's 
own information.

**Bug**

* [ITB-457] - Invalid map variable references not detected by TDL validator
* [ITB-475] - Unable to pass a BASE64 encoded string to a binary input variable
* [ITB-483] - TDL If steps with no visible internal steps appear in test session history display
* [ITB-527] - Previously executed test diagrams don't display correctly with nested decision blocks
* [ITB-531] - Test step report items appear clickable even when it is not possible to view them in-context
* [ITB-532] - Active test session display in session dashboard has mis-aligned buttons
* [ITB-538] - Changing a community's domain should invalidate all test sessions made under the previous domain
* [ITB-542] - Problem in confirmation message to delete a system
* [ITB-543] - Delete button appears for unset conformance statement parameter
* [ITB-544] - Feedback submission does not include organisation and community of logged in user
* [ITB-548] - Custom labels fail to display during self-registration when only one public community is defined
* [ITB-554] - Test Bed administrator unable to provide custom system properties when managing tests for an organisation and creating a new system
* [ITB-558] - Community administrators should not be allowed to delete their domain
* [ITB-561] - Binary and secret domain parameters should have a disabled save button when name is missing

**New Feature**

* [ITB-189] - Allow test suite test cases to be executed in parallel
* [ITB-288] - Allow an administrator to export and then import a community or domain setup
* [ITB-481] - Allow test sessions to continue running in the background
* [ITB-486] - Allow custom organisation properties to display in self-registration page
* [ITB-501] - Email community support mailbox upon self-registration of new organisation
* [ITB-515] - Allow community administrators to restrict self-registration based on the user
* [ITB-528] - Allow specifications to be defined as hidden
* [ITB-529] - Support extended documentation for test cases and test suites
* [ITB-533] - Provide button to refresh the display of active and completed test sessions
* [ITB-537] - Provide visual feedback after every successful action
* [ITB-539] - Headless (background) test session execution
* [ITB-541] - Allow organisation users to monitor and manage their active sessions
* [ITB-549] - Allow user to fully delete a role assignment
* [ITB-550] - Allow user to fully remove all role assignments (clear all personal data)
* [ITB-555] - New processing handler to handle base64 encoding and decoding
* [ITB-562] - Support sandbox instance creation by automating the import of data from a provided data archive

**Improvement**

* [ITB-223] - Set a community's domain upon creation
* [ITB-388] - Show report item counts resulting from a verify step (validation)
* [ITB-389] - Have the user guide link in the UI's footer navigate you to the corresponding section in the user guide
* [ITB-402] - Allow variable expressions to be defined in placeholders used in test case template files
* [ITB-410] - Display location description in verify step's report items if not possible to show in editor
* [ITB-431] - Make skipped test steps more obvious
* [ITB-456] - Allow assign steps to create variables
* [ITB-466] - Automatically focus first element in displayed forms
* [ITB-467] - Allow all forms to be submitted with enter
* [ITB-471] - Skip the single domain selection for community administrators when managing the domain
* [ITB-472] - Add help tooltips to all form fields
* [ITB-477] - Improve display of loop iteration in test session output
* [ITB-487] - Apply HTTP secure headers
* [ITB-488] - Enable forward secrecy for Test Bed reverse proxy
* [ITB-490] - When starting a test session and configuration is missing display only the missing properties
* [ITB-492] - Restrict the values that can be provided in user inputs
* [ITB-493] - Clarify the use of the create account link from the welcome page
* [ITB-526] - Allow Test Bed instances to use SSL and STARTTLS connections for SMTP server access
* [ITB-536] - Confirm test suite replacement that drops test history
* [ITB-546] - Animate panels that expand and collapse to better highlight UI changes
* [ITB-547] - Improve display of toggle button
* [ITB-551] - Allow a community administrator to remove other community administrators from her community
* [ITB-552] - Better highlighting for information items in test step reports
* [ITB-553] - Disable support for TLS 1.0 and TLS 1.1 in Test Bed reverse proxy
* [ITB-557] - Show community description for communities available for self-registration
* [ITB-559] - Hide domain management link for admins of communities with no domain
* [ITB-560] - Hide unused information on specifications

Release 1.8.0 - 20/01/2020
--------------------------

This release focuses on providing additional community customisation possibilities through features such as the definition of 
specific labels for test bed concepts and the optional display of actors. GITB TDL is also enhanced with support for warning-level 
validation steps and the possibility to display for test steps additional documentation or instructions as rich text.

**Bug**

* [ITB-512] - Deleting conformance statement text parameter values does not immediately refresh the display
* [ITB-513] - Test suite upload can fail if endpoint names vary in case
* [ITB-516] - Unable to delete domain that contains specification with actors
* [ITB-518] - Binary actor parameters interpreted as strings in test sessions
* [ITB-520] - Test execution diagrams with multiple actors can break diagram display

**New Feature**

* [ITB-432] - Support warning-level failures for verify steps
* [ITB-433] - Support more extensive descriptions as metadata for test steps
* [ITB-434] - Display additional documentation for test steps as instructions to users
* [ITB-489] - Allow a community administrator to customise the labels used for Test Bed concepts
* [ITB-511] - Allow actors to be set as hidden (deprecated)

**Improvement**

* [ITB-461] - Remove noise from gitb-ui logs

Release 1.7.2 - 11/12/2019
--------------------------

This is a patch release to address issues with the core test engine and specifically on type conversions between
test session variables. This patch also extended the templating possibilities in test cases by allowing any expressions
to be treated as templates.

**Bug**

* [ITB-422] - Conversions between GITB types using pure variable expressions should also work through the source attribute
* [ITB-464] - Cannot convert string to nodelist in assign step
* [ITB-473] - TDL Inputs with both source and value set ignore the value
* [ITB-476] - A string variable used as a source of an XPath expression always returns itself
* [ITB-503] - If a test bed instance has a demo account configured prevent this from being linked to a user
* [ITB-509] - Cannot directly assign non-binary variables to binary ones

**Improvement**

* [ITB-505] - Allow any variable to be used as a template (not only imports)

Release 1.7.1 - 21/11/2019
--------------------------

This is a patch release to address issues linked primarily with the handling of test session variables and improved error
reporting during test sessions.

**Bug**

* [ITB-424] - All list types returned by external services are considered to be list[string]
* [ITB-458] - Processing steps with no transaction cannot use variable references to determine handler
* [ITB-459] - Inputs defined by remote services with type list cannot be provided
* [ITB-460] - Dockerised gitb-ui may fail to startup due to running process being detected
* [ITB-465] - Error if encoding not provided for imports that are not binary
* [ITB-495] - System and organisation names not added to test session if no custom properties are defined
* [ITB-496] - Invalid input names for messaging and processing handlers may not report problem details
* [ITB-497] - Remote messaging services not returning a session ID result in blank error

Release 1.7.0 - 07/10/2019
--------------------------

This release allows integration with EU Login, the European Commission's central authentication service. In addition, the
release introduces several important new features such as the ability to open communities for user self-registration 
and the introduction of custom properties for organisations and systems. Such custom properties enable enhanced 
data collection options and the scripting of automation processes, introducing at the same time new means of providing 
input values and configuration to test sessions.

**Bug**

* [ITB-421] - Resolving the index of a GITB list when in double format fails
* [ITB-423] - Dropdown menus not visible for loop and flow test step reports
* [ITB-427] - Progress spinners can continue after test session is stopped
* [ITB-430] - Test step progress indicators can remain in processing state
* [ITB-443] - Can't delete a community that contains organisations with executed test sessions
* [ITB-444] - Can't delete obsolete test results that are linked to conformance results
* [ITB-448] - Test case definition doesn't reload if user refreshes browser
* [ITB-449] - Specification details not included in conformance dashboard CSV export

**New Feature**

* [ITB-73] - ECAS integration
* [ITB-196] - One account - multiple communities
* [ITB-394] - Configuration parameters that are not editable by organisation users or that are not included in test sessions
* [ITB-395] - Self-registration for specific communities
* [ITB-396] - Configurable organisation properties
* [ITB-397] - Optionally include organisation properties in organisation-related exports
* [ITB-418] - Allow organisation admins to remove users
* [ITB-420] - Allow organisation administrators to delete their organisation's members
* [ITB-435] - Define an organisation as a template for self-registered organisations
* [ITB-440] - Configurable system properties
* [ITB-441] - Make available custom and standard organisation properties in test sessions
* [ITB-442] - Make available custom and standard system properties in test sessions

**Improvement**

* [ITB-100] - Allow organisation to request addition to a community
* [ITB-398] - Optionally copy configuration parameters when copying the testing setup to another system
* [ITB-414] - Use Commission favicon
* [ITB-419] - Align the look and feel for the settings' management
* [ITB-437] - Support endpoint parameters with secret values (e.g. passwords)
* [ITB-438] - Make more intuitive the display of endpoint parameters for administrators
* [ITB-439] - Support files as domain configuration parameters
* [ITB-445] - Increase size limit for uploaded files
* [ITB-446] - Allow community and test bed admins to edit their own organisation's information
* [ITB-447] - When test case configuration is missing allow user to directly navigate to provide it

Release 1.6.1 - 14/06/2019
--------------------------

This is a patch release to address bugs that were blocking for new test bed users, specifically linked to the processing
of template files in test cases. In addition, given the opportunity of the patch, additional minor bugs are corrected
and important improvements are introduced to facilitate reporting and increase the built-in possibilities to generate
timestamps within test cases.

**Bug**

* [ITB-401] - Invalid test case imports may pass test suite validation
* [ITB-407] - Unable to reference map or list variables from within template
* [ITB-409] - Clearing search filters does not clear the "result" criterion

**Improvement**

* [ITB-390] - Remember search filters when returning from a detail page to a search page
* [ITB-404] - Support diffs for TokenGenerator timestamps
* [ITB-405] - Support any timezone for the TokenGenerator's timestamps
* [ITB-406] - Allow the epoch milliseconds to be returned from the TokenGenerator

Release 1.6.0 - 29/05/2019
--------------------------

From an end-user perspective the main highlights of this release are the validation of uploaded test suites and various improvements to
streamline the user interface (e.g. simplified conformance statement creation). Internally this release brings critical
updates to library versions, the execution environment and core security features. In addition, the GITB Test Description Language (TDL),
and its support through the test bed, has been extended to simplify test case definition and bring new features such as new built-in
processing and validation capabilities as well as extended user input options.

**Bug**

* [ITB-170] - Variables allow defining superfluous "source" and "lang" attributes
* [ITB-217] - Systems link not presented to organisation basic users
* [ITB-282] - New test cases for an existing test suite may not appear correctly ordered
* [ITB-287] - Embedded XML validators (XSD, Schematron) may not show errors on the correct content line
* [ITB-290] - Sorting by actor on session dashboard not working
* [ITB-291] - Test cases included in conformance statement where actor is not the SUT
* [ITB-297] - Failure to match existing session token results in empty screen
* [ITB-304] - Ensure CSV exports can be made regardless of the exported text
* [ITB-307] - Table editing control not displayed on WYSIWYG editors
* [ITB-308] - Correct regular expressions for variable references
* [ITB-310] - Actor name should be optional to allow external references
* [ITB-315] - Correct configuration to allow test cases based on UDP
* [ITB-322] - Automatic test suite execution continues to ping test bed after completion
* [ITB-324] - In certain cases the previous test session view displays unexecuted steps as overlapping
* [ITB-337] - Test step report requests can get broken by reverse proxies
* [ITB-338] - If step without else with internal step reports causes overall report generation to fail
* [ITB-372] - User logout may leave session state still on the server-side
* [ITB-374] - Updating an already set keystore for the conformance certificate does not allow directly changing its passwords
* [ITB-377] - Prevent errors during test session initiation from being re-triggered continuously
* [ITB-378] - Unable to assign a list or map variable to another list or map
* [ITB-380] - Allow signed numbers and floats for expressions defined as "NumberOrVariable"
* [ITB-381] - Allow spaces for expressions defined as "StringOrVariable"
* [ITB-384] - Processing step errors may not get logged

**New Feature**

* [ITB-311] - Embedded processing handler to create random text tokens
* [ITB-382] - New embedded validator for matching XML content based on XMLUnit

**Improvement**

* [ITB-51] - Validate uploaded test suite
* [ITB-241] - Ensure content is filtered based on a whitelist for HTML rendering
* [ITB-269] - Automate creation of conformance statement
* [ITB-279] - Support type conversions from list[TYPE] to and from list
* [ITB-280] - Record test step overall result in context variable
* [ITB-295] - Hide implementation details from test session log output
* [ITB-298] - Don't use test suite name for folder naming 
* [ITB-299] - Correct theme issues with header and footer
* [ITB-309] - Relax metadata definition constraints
* [ITB-316] - Relax non-important XSD constraints
* [ITB-320] - Allow user interaction requests to display a drop down list based on provided values.
* [ITB-321] - Upgrade to OpenJDK 11 as base platform
* [ITB-345] - Improve security posture of core components
* [ITB-376] - Consider variables defined as generic list to be list[string] by default
* [ITB-379] - Allow user to clear form when processing a user interaction step
* [ITB-383] - Make processing transactions optional

Release 1.5.0 - 06/11/2018
--------------------------

This release focuses on improving error handling and adding support for a customisable conformance certificate per user community.
Numerous additional improvements are also made to facilitate the management of test suites and conformance testing configuration, as
well as to improve support for the GITB Test Description Language (TDL).

**Bug**

* [ITB-171] - Referring to missing map key in interaction step swallows error
* [ITB-181] - Stop step results in the interface not being signalled to show the test as finished
* [ITB-216] - Endpoint description not displayed in first test execution wizard step
* [ITB-265] - Messaging service call-backs produce errors when client not created using WSDL
* [ITB-270] - Creating a duplicate conformance statement is possible and leads to an internal error
* [ITB-272] - Opening the contact support form clears other rich text editors
* [ITB-273] - Forms to create elements do not take advantage of full screen width

**New Feature**

* [ITB-79] - Create conformance certificate
* [ITB-106] - Error message template per community
* [ITB-225] - Allow community admin to copy an organisation's test setup to another
* [ITB-226] - Allow organisation admins to copy the conformance test setup between systems
* [ITB-247] - Create an embedded regular expression validator
* [ITB-260] - Allow administrators to purge obsolete test results

**Task**

* [ITB-275] - Remove obsolete resources

**Improvement**

* [ITB-78] - Download test suites
* [ITB-92] - Allow If steps without Else
* [ITB-97] - Display errors produced through test execution
* [ITB-110] - Improve overall handling of errors
* [ITB-115] - Improve display of endpoint parameters for organisation users
* [ITB-116] - Allow administrator to set (and update) a user's temporary password
* [ITB-118] - Consider admin-set passwords as one-time passwords
* [ITB-183] - Allow an exit step to signal a success or failure
* [ITB-185] - Allow instruct element to show a file download when passed an object or binary type
* [ITB-211] - Improve display of test cases within a test suite in the conformance statement details page
* [ITB-212] - Consider renaming "Conformance Statement Report" to "Conformance Statement Test Report"
* [ITB-213] - Support attachments in contact form
* [ITB-218] - Sort display of domains, specifications and actors
* [ITB-220] - Use English (UK) spelling consistently
* [ITB-227] - Improve display of test case results in conformance statement report
* [ITB-246] - Replace default report font to support Unicode characters
* [ITB-248] - Switch XPathValidator to use the latest version of XPath internally
* [ITB-249] - Allow XPathValidator to handle any type of input
* [ITB-250] - Allow binary variable use in expressions
* [ITB-257] - Allow StringValidator to support any input type
* [ITB-259] - Remove duplicate login form and home button for unauthenticated users
* [ITB-262] - Allow default actor for interaction
* [ITB-263] - Set defaults for content type and type of interaction elements
* [ITB-264] - Make it possible to download binary content from a test step's report
* [ITB-266] - Consider the test suite ID as the default root path for test case imports
* [ITB-267] - Allow the display order of test case actors to be configured in the test execution diagram
* [ITB-268] - Set an actor as a specification's default
* [ITB-271] - Improve visual consistency of buttons
* [ITB-274] - Add filtering by actor on the conformance dashboard

Release 1.4.1 - 28/09/2018
--------------------------

This is a bug fix release to address critical production bugs. Minor additional internal features are also added.

**Bug**

* [ITB-243] - Support the use of lists in validation services
* [ITB-252] - Messaging sessions close unexpectedly
* [ITB-253] - Incoming blocked connections are not cleaned
* [ITB-254] - A mis-configured system address results in a server error
* [ITB-255] - Error during test execution repeat indefinitely

**Improvement**

* [ITB-244] - Adapt HttpMessaging messaging handler to switch to HTTPS based on configuration
* [ITB-245] - Support sending and receiving multipart form data in HttpMessaging

Release 1.4.0 - 03/07/2018
--------------------------

This is a minor release to correct bugs and also to improve the test bed's GDPR compliance.

**Bug**

* [ITB-219] - Cannot delete domain with domain parameters
* [ITB-222] - Cannot delete community for which tests have been executed
* [ITB-224] - Hide the special purpose Admin organisation from the test bed Default community
* [ITB-231] - Legal Notice link not working without user login
* [ITB-232] - Legal notice top-level headings appear grey
* [ITB-235] - Icons may not appear when using IE 11
* [ITB-242] - Active footer links are not visible

**New Feature**

* [ITB-49] - Link to online documentation
* [ITB-221] - Link to role-specific documentation

**Improvement**

* [ITB-236] - Add cookie-related statement on login screen for GDPR compliance
* [ITB-237] - Add consent message on community admin creation screen
* [ITB-238] - Add consent message on test bed admin creation screen
* [ITB-239] - Add consent message on organisation user creation screens
* [ITB-240] - Add data use notification on contact form for GDPR compliance

Release 1.3.0 - 25/05/2018
--------------------------

This release focuses on improving support for the GITB Test Description Language (TDL), improving the test execution process including automatic
test suite execution, and providing additional tools for administrators and users to monitor their conformance testing progress.

**Bug**

* [ITB-57] - User interaction to inform does nothing
* [ITB-93] - Test execution in UI can continue displaying turning spanner for completed step
* [ITB-156] - Organisation basic user can delete conformance statement
* [ITB-161] - A missing type value for a test suite or test case causes an error on test suite upload
* [ITB-164] - Uploaded test cases are mapped to actors based on their name, not ID
* [ITB-169] - Unable to use preliminary steps in test case
* [ITB-176] - User interface updates can get mixed in test session execution
* [ITB-182] - Back button displayed multiple times when the test result includes conditional branches
* [ITB-184] - Test session report does not include child steps for conditional branches
* [ITB-188] - Flow step results are always reported inversely

**New Feature**

* [ITB-72] - Conformance overview for administrators
* [ITB-199] - Implement conformance statement report
* [ITB-207] - Add feedback form
* [ITB-208] - Add survey link

**Improvement**

* [ITB-60] - Run all test cases in test suite
* [ITB-87] - Display different actor name in test cases (do not use actor ID) 
* [ITB-102] - Support authentication for remote service calls
* [ITB-105] - Allow handler URLs to be part of the configuration
* [ITB-119] - Introduce timeout for appropriate TDL elements
* [ITB-137] - Allow domain-level configuration to be used in TDL expressions
* [ITB-157] - Renamed "UNDEFINED" status to "NOT RAN"
* [ITB-158] - Hide test execution wizard steps when not applicable
* [ITB-159] - Show name and description of test case and test suite when running a test
* [ITB-160] - Add Back button on test execution page
* [ITB-162] - Make actor endpoints optional
* [ITB-163] - Display actor name, not ID when executing test
* [ITB-178] - Use variable references as foreach bounds
* [ITB-179] - Allow user instructions without content
* [ITB-180] - Consider default type for user instructions
* [ITB-191] - Increase gateway timeout
* [ITB-192] - Set STRING as default content type for interaction requests
* [ITB-200] - Improve visual consistency of UI elements
* [ITB-201] - Add cancel option for editing of domain elements
* [ITB-203] - Allow variable references for configuration values
* [ITB-204] - Allow embedded SoapMessaging handler to run over HTTPS
* [ITB-209] - Allow community administrator to update community details

Release 1.2.0 - 18/03/2018
--------------------------

This release focuses on correcting issues impacting the platform's robustness and introducing improvements both for administrators, 
to better manage their configured domains and specifications, as well as users to improve their test reporting capabilities. 
The key improvement area targeted is the management of new test suite versions.

**Bug**

* [ITB-55] - Count of passed test cases displays wrong
* [ITB-68] - Hide buttons for actions that are not permitted
* [ITB-77] - Update cache upon deletion of test suites
* [ITB-101] - CSV export does not work in IE
* [ITB-103] - Internet Explorer caches server JSON responses
* [ITB-104] - Perform server-side updates synchronously
* [ITB-109] - Test suite uniqueness
* [ITB-117] - Allow user to update his password
* [ITB-144] - Correct manual management of actors, endpoints and parameters
* [ITB-146] - Correct display of conformance testing status for a system's tests
* [ITB-147] - Domain name and description not displayed on conformance statement
* [ITB-154] - Correct transaction management

**New Feature**

* [ITB-47] - Delete system
* [ITB-94] - Display test bed version
* [ITB-136] - Create PDF report from validator report

**Improvement**

* [ITB-80] - Remove "Test Suites" menu entry
* [ITB-61] - Improve export of test sessions
* [ITB-67] - Confirmation before deleting conformance statement
* [ITB-74] - Better visual presentation for multiple systems
* [ITB-75] - Improve support for test suite versions
* [ITB-76] - Record test case and test suite descriptions
* [ITB-107] - Switch connection to HTTPS
* [ITB-108] - Delete internal actor details
* [ITB-111] - Actors must be unique within each specification
* [ITB-112] - Prevent organisation basic user from deleting conformance statement
* [ITB-113] - Prevent organisation basic user from changing endpoint values
* [ITB-139] - Replace test case report with PDF version
* [ITB-140] - Convert test session overview report to PDF
* [ITB-141] - Automate database migrations
* [ITB-142] - Improve test session repository handling
* [ITB-145] - Hide options from conformance statements
* [ITB-148] - Display specification on conformance statement detail page
* [ITB-149] - Request confirmation before deleting conformance statement
* [ITB-151] - Maximise use of space for system screens
* [ITB-153] - Prevent organisation basic user from creating conformance statements

Release 1.1.0 - 20/09/2017
--------------------------

Release that most importantly introduces user communities to the test bed. This includes also additional improvements to facilitate management
of test configuration and improved reporting capabilities.

**Bug**

* [ITB-65] - Test session history for an organisational user is incomplete
* [ITB-86] - No longer possible to create a domain
* [ITB-89] - XPath 2.0 support breaks TDL variable lookup
* [ITB-90] - Problem interacting with processing services

**New Feature**

* [ITB-66] - Add filtering of test sessions for organisation user
* [ITB-71] - Allow admin to manage an organisation's test setup

**Improvement**

* [ITB-53] - Add user communities to user management
* [ITB-56] - Group test cases by test suite
* [ITB-58] - Add filtering of test sessions for administrator
* [ITB-62] - Allow the export of results in CSV
* [ITB-69] - Paging in the "Performed Tests" screen for an organisation
* [ITB-70] - Add "Systems" link
* [ITB-88] - Upgrade embedded XPath validator to XPath 2.0

Release 1.0.3 - 14/08/2017
--------------------------

Minor release to address mainly Internet Explorer support issues and correct important bugs.

**Bug**

* [ITB-52] - Errors on UI when using Internet Explorer 11
* [ITB-82] - Streamlined test execution wizard skips steps when it should not

**Improvement**

* [ITB-81] - Decouple payload information from PEPPOL AS2 validators
* [ITB-83] - Support XPath 2.0 in expressions
* [ITB-84] - Support any casing for context in popup to display errors

Release 1.0.2 - 19/05/2017
--------------------------

Release to correct critical problems when running test cases, simplify use of the test bed for non-administrator users and provide a dashboard for
test bed administrators to monitor current and past sessions.

**Bug**

* [ITB-30] - Allow ID to be more than one character long
* [ITB-32] - Type metadata is not applicable to test modules
* [ITB-34] - GITB remote send operation does not populate context

**New Feature**

* [ITB-35] - Dashboard: Overview of running test sessions
* [ITB-36] - Dashboard: Display test session status
* [ITB-37] - Dashboard: Terminate running test
* [ITB-38] - Dashboard: Set max idle time for test cases
* [ITB-46] - Customizable legal notices

**Improvement**

* [ITB-9] - Automatically kill test sessions that are idle
* [ITB-39] - Allow GITB UI to run on any port
* [ITB-40] - Allow test cases to be defined with no end-user configuration
* [ITB-41] - Introduce Commission theme
* [ITB-43] - Shortcut test case selection
* [ITB-44] - Hide tutorial link
* [ITB-45] - Use hashed passwords

Release 1.0.1 - 06/02/2017
--------------------------

The main focus of this release is the addition of user management features and features to manage the test setup (domains, specifications, actors).

**Bug**

* [ITB-15] - When logging out the page content is not cleared

**New Feature**

* [ITB-3] - Remove "Team" link
* [ITB-11] - Allow test bed administrator to add and edit users
* [ITB-12] - Create test bed landing page
* [ITB-13] - View landing page
* [ITB-14] - Add date in log for all log messages (frontend and backend)
* [ITB-16] - Manage organisations
* [ITB-17] - Add support for remote messaging handlers
* [ITB-23] - Implement feature to save changes to domain
* [ITB-24] - Implement delete specification feature
* [ITB-25] - Implement feature to save specification changes
* [ITB-26] - Implement delete actor feature
* [ITB-27] - Implement feature to save actor changes
* [ITB-28] - Implement delete endpoint feature
* [ITB-29] - Implement feature to save endpoint changes
* [ITB-31] - Add support for processing services

**Improvement**

* [ITB-5] - Provide labels for user roles
* [ITB-6] - View test bed users
* [ITB-7] - Parameterise build
* [ITB-8] - Allow code/content editors to copy & paste
* [ITB-10] - Include licence in source distribution
* [ITB-18] - Allow receive TDL step to accept inputs
* [ITB-19] - Automatic casting of GITB types
* [ITB-20] - Allow remote messaging services to be signalled that they are expected to receive input
* [ITB-21] - Change all button colours to white
* [ITB-22] - Implement delete domain feature

Release 1.0.0 - 23/11/2016
--------------------------

Initial version of the GITB software where version history started being tracked. This version is effectively the proof of concept produced by the GITB CEN Workshop Agreement
including critical bug fixes on existing features.