Release history
===============

The current section provides an overview of the changes introduced in each test bed release (specifically each GITB software release) up to the current one. For each release
the following information is provided:

* The **release number** and **date**.
* The **release summary**, describing briefly the main focus of the release and its key highlights.
* The **release details**, listing the issues addressed in each release (bug fixes, new features and improvements).

The latest test bed release is **1.4.1**.

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

This releases focuses on improving support for the GITB Test Description Language (TDL), improving the test execution process including automatic 
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