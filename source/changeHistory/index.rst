Release history
===============

The current section provides an overview of the changes introduced in each test bed release (specifically each GITB software release) up to the current one. For each release
the following information is provided:

* The **release number** and **date**.
* The **release summary**, describing briefly the main focus of the release and its key highlights.
* The **release details**, listing the issues addressed in each release (bug fixes, new features and improvements).

The latest test bed release is **1.12.0**.

Release 1.12.0 - 01/03/2021
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