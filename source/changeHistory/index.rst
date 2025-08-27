Release history
===============

.. role:: tdl
.. role:: ui
.. role:: other

The current section provides an overview of the changes introduced in each Test Bed release (specifically each GITB software release) up to the current one. For each release
the following information is provided:

* The **release number** and **date**.
* The **release summary**, describing briefly the main focus of the release and its key highlights.
* The **release details**, listing the issues addressed in each release (bug fixes, new features and improvements).
  Each listed issue also includes a tag highlighting what it concerns:

.. csv-table::
  :class: changelog-legend
  :delim: |

  :ui:`UI` | The GITB software's user interface, REST API or automated processes
  :tdl:`TESTS` | The test engine capabilities, including the `GITB TDL <https://www.itb.ec.europa.eu/docs/tdl/latest/>`_ and `GITB test services <https://www.itb.ec.europa.eu/docs/services/latest/>`_
  :other:`OTHER` | Other aspects, such as internal components and configurations

The latest Test Bed release is **1.27.4**.

.. note::
    
    **GitHub repository:** The Test Bed's source code is `published on GitHub <https://github.com/ISAITB/gitb>`_. Although development is not driven through
    its GitHub repository, it remains an excellent notification channel for `new releases <https://github.com/ISAITB/gitb/releases>`_ and 
    `development updates <https://github.com/ISAITB/gitb/commits/development>`_.

Release 1.27.4 - 27/08/2025
---------------------------

This is a patch release to correct an issue reported by users relating to the importing of test case documentation.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1936 | :ui:`UI` | Test case documentation not loaded from test suite archive upon deployment

Release 1.27.3 - 11/08/2025
---------------------------

This is a patch release to correct an issue reported by users relating to the ordering of a test suite's
test cases.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1908 | :ui:`UI` | Sequence of test cases in test suite not respected when displayed on the user interface

Release 1.27.2 - 07/08/2025
---------------------------

This is a patch release to correct issues reported by users related to the configuration of communities,
creation of systems, user experience issues, and an issue when validating JSON or YAML content.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1875 | :ui:`UI` | Unable to update the value of an existing domain parameter defined as a secret
  ITB-1876 | :ui:`UI` | Adding a secret parameter to a trigger's payload should add it in cleartext
  ITB-1884 | :ui:`UI` | Administrators of communities not linked to a specific domain must be able to view the list of all domains
  ITB-1896 | :ui:`UI` | Hovering over the header's profile icon may fail to show the profile popup
  ITB-1901 | :tdl:`TESTS` | Unexpected error when specifying a schemaCombinationApproach with the YamlValidator or JsonValidator
  ITB-1904 | :ui:`UI` | Organisation administrators are unable to create systems

Release 1.27.1 - 30/06/2025
---------------------------

This is a minor patch to correct an issue encountered when uploading test suites that would fail validation in certain cases.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1871 | :ui:`UI` | Hashcode error while uploading resource holder test suite

Release 1.27.0 - 24/06/2025
---------------------------

This is a minor feature release focusing on the Test Bed's test engine, and specifically on providing more control over
the information included in test step reports. The Test Bed's user interface also received minor updates in terms of
library upgrades, the highlighting of findings in validation step reports, and a minor improvement in the service health
dashboard.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1869 | :tdl:`TESTS` | Failure to pass inputs to remote processing service that defines an empty module definition (regression due to ITB-1626)

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1859 | :tdl:`TESTS` | Extend the XmlValidator and SchematronValidator with an option to include the location path of findings in the step report
  ITB-1865 | :tdl:`TESTS` | Extend the HttpMessagingV2 handler to enable fine-grained control on the data displayed in step reports
  ITB-1868 | :tdl:`TESTS` | Extend the SoapMessagingV2 handler to enable fine-grained control on the data displayed in step reports

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1790 | :other:`OTHER` | Add copyright notice to all source code
  ITB-1863 | :ui:`UI` | When opening a code editor from a test step report item, highlight the relevant finding as the selected one
  ITB-1867 | :ui:`UI` | Improve the service health dashboard reporting for the test engine callback configuration
  ITB-1870 | :other:`OTHER` | Define publiccode.yml metadata file

Release 1.26.0 - 12/06/2025
---------------------------

The main focus of this release is the Test Bed's test engine and the capabilities of the GITB Test Description Language (TDL).
New built-in validators are available for JSON, RDF, and YAML data, as well as utilities to facilitate working with collections 
and RDF models. User interactions are extended, allowing them to be set with required inputs, skipped when not applicable, but
also effectively managed when sessions are not interactively launched. In addition, numerous improvements are made to enhance
reporting, make tests more configurable, and simplify test development.

Besides the new test engine features, the Test Bed's user interface is extended to include a system health dashboard,
configurable system-wide resources, the possibility to move test suites without test history loss, and support for
communities with shared test history for all members. Furthermore, the REST API was extended to allow fine tuning of
returned results from test suite deployments, as well as automated status monitoring to greatly simplify its use in
integrations and automation processes. 

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1791 | :tdl:`TESTS` | Test cases with very large definitions may fail to start
  ITB-1797 | :tdl:`TESTS` | Iteration steps must stop immediately upon child step error if stopOnError is true
  ITB-1800 | :ui:`UI` | Session diagram crops iteration step dropdown for large number of iterations
  ITB-1801 | :ui:`UI` | Instruction labels in interaction step popups may appear with unnecessary word breaks
  ITB-1806 | :other:`OTHER` | Helm chart does not correctly set the default web context root for itb-ui
  ITB-1824 | :tdl:`TESTS` | External services returning reports with missing dates should be set by default to the current time to avoid PDF report generation errors
  ITB-1835 | :ui:`UI` | Manual import of a system setting archive should never change the currently active theme
  ITB-1841 | :tdl:`TESTS` | Sequence diagram breaks when using multiple levels of scriptlet calls or hidden container steps with visible child step
  ITB-1855 | :tdl:`TESTS` | Automatic creation of new variables in scriptlets via the assign step should never affect parent scope
  ITB-1858 | :ui:`UI` | Failure to automatically load sandbox data archive at startup when target environment does not define email settings and archive includes system settings
  ITB-1860 | :ui:`UI` | When self-registering with EU Login enabled and one community available, the community is not automatically selected

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1686 | :ui:`UI` | Health monitoring dashboard for Test Bed services
  ITB-1727 | :ui:`UI` | Support system-wide resources that can be publicly accessed by any user
  ITB-1761 | :ui:`UI` | Allow switching a test suite to and from shared and not shared status without losing the testing history
  ITB-1765 | :tdl:`TESTS` | Support multiple test session output messages
  ITB-1770 | :tdl:`TESTS` | Support custom handlers for interact steps that are optionally activated for alternate user input methods
  ITB-1775 | :tdl:`TESTS` | New JsonValidator built-in validation handler for validation of JSON content
  ITB-1776 | :tdl:`TESTS` | New ShaclValidator built-in validation handler for validation of RDF content with SHACL shapes
  ITB-1778 | :tdl:`TESTS` | New YamlValidator built-in validation handler for validation of YAML content
  ITB-1780 | :ui:`UI` | Allow system-wide resources to be used in rich text content
  ITB-1783 | :ui:`UI` | Support the synchronous execution of test sessions via the REST API for better support of CI/CD processes
  ITB-1792 | :tdl:`TESTS` | Support case-insensitive lookups in maps and lists through the CollectionUtils handler
  ITB-1803 | :tdl:`TESTS` | New built-in process step handler to execute queries (construct, select, ask) against RDF models
  ITB-1808 | :ui:`UI` | Allow an administrator to move a test suite between specifications without losing its test history
  ITB-1809 | :ui:`UI` | Foresee a community permission for organisation users to allow a readonly view over other members' test results
  ITB-1812 | :tdl:`TESTS` | New built-in process step handler to convert RDF content between RDF syntaxes
  ITB-1813 | :tdl:`TESTS` | New built-in process step handler to merge RDF models
  ITB-1819 | :tdl:`TESTS` | Allow interact steps containing only instructions to be non-blocking
  ITB-1822 | :tdl:`TESTS` | Support 'skipped' attribute for all test steps to conditionally skip their execution
  ITB-1833 | :tdl:`TESTS` | Support custom success and failure messages for built-in validation handlers
  ITB-1836 | :tdl:`TESTS` | Allow the interact step to define requested inputs as required (with forced completion by the user)
  ITB-1851 | :tdl:`TESTS` | Extend CollectionUtils processor append operation to append only missing items to a collection (case-sensitive or not)
  ITB-1853 | :tdl:`TESTS` | Extend the assign step to allow an assignment by value for container types (maps and lists)

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-523 | :tdl:`TESTS`  | Allow session variables to be used within expressions of the XPathValidator
  ITB-1530 | :tdl:`TESTS` | Support use of configuration parameters in dynamic scriptlets values and static ifs
  ITB-1626 | :tdl:`TESTS` | Apply consistent naming for all built-in step handlers and their inputs
  ITB-1733 | :ui:`UI` | Display user email or username for the demo account selection in the system settings
  ITB-1735 | :other:`OTHER` | Introduce a gitb-redis image to replace the direct use of Redis
  ITB-1764 | :ui:`UI` | Use consistent height for test case display regardless of whether it has test sessions or not
  ITB-1777 | :ui:`UI` | The default URI for the footer's User guide link should not point to "latest" but the specific release's documentation
  ITB-1781 | :ui:`UI` | Support community trigger HTTP endpoints that redirect and return empty responses
  ITB-1785 | :ui:`UI` | Prevent generating detailed conformance statement reports if over a specific test case threshold
  ITB-1786 | :ui:`UI` | Use asynchronous IO for all processing
  ITB-1787 | :ui:`UI` | Support keyboard navigation and selection for searchable selection lists
  ITB-1793 | :ui:`UI` | Allow long running requests to complete successfully if the user chooses to wait
  ITB-1794 | :other:`OTHER` | Configurable ingress paths and default configuration of related properties (with override possibilities)
  ITB-1795 | :ui:`UI` | Link to an embedded Swagger UI instead of the OpenAPI.json for the REST API's documentation
  ITB-1798 | :ui:`UI` | Increase the update frequency of the test session diagram
  ITB-1799 | :ui:`UI` | Consume pending diagram updates when stopping a test session
  ITB-1804 | :other:`OTHER` | Allow overriding the MySQL DB name considered by gitb-ui via environment variable
  ITB-1805 | :other:`OTHER` | Extend the ITB Helm chart to easily override the DB name considered by gitb-ui
  ITB-1807 | :other:`OTHER` | Extend Helm chart to allow the ingress host to be configured with a specific value
  ITB-1810 | :ui:`UI` | Use searchable selection lists in place of simple dropdown lists
  ITB-1811 | :ui:`UI` | Improve the missing configuration message when all missing properties are visible but non-editable by users
  ITB-1814 | :ui:`UI` | Display active test sessions with pagination
  ITB-1816 | :ui:`UI` | Extend paginated displays with current page index, total pages, and total results
  ITB-1820 | :tdl:`TESTS` | Consider the receive step "from" actor to be by default the SUT, and the "to" as the non-SUT actor (if only two actors are defined)
  ITB-1821 | :tdl:`TESTS` | Consider the send step "to" actor to be by default the SUT, and the "from" as the non-SUT actor (if only two actors are defined)
  ITB-1825 | :ui:`UI` | When deploying a test suite via the REST API allow caller to choose whether resulting API keys are returned
  ITB-1826 | :ui:`UI` | Improve display of missing configuration properties before test execution
  ITB-1827 | :ui:`UI` | Make the community custom property management tables collapsible
  ITB-1829 | :tdl:`TESTS` | Consider the type of test case and scriptlet imports optional, with "binary" as the default
  ITB-1834 | :ui:`UI` | Have all rich text editor links open by default in another window
  ITB-1837 | :ui:`UI` | Retain temporary user inputs when minimising and restoring a user interaction step
  ITB-1842 | :other:`OTHER` | Migrate Maven artifact publishing to Maven Central from Legacy OSSRH
  ITB-1850 | :ui:`UI` | Tolerate misconfigured trailing slash at end of Test Bed home link
  ITB-1854 | :tdl:`TESTS` | Remove the scope isolation restriction for remotely used scriptlets

Release 1.25.2 - 17/03/2025
---------------------------

This is a minor release to correct reported bug fixes, and introduce minor optimisations.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1779 | :ui:`UI` | Importing a community export archive does not delete undefined community resources
  ITB-1788 | :ui:`UI` | Input parameters ignored when launching test sessions via REST API

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1789 | :ui:`UI` | Optimize virus scanning for uploaded files

Release 1.25.1 - 12/02/2025
---------------------------

This is a minor release to correct bug fixes, and introduce report customisation and generation improvements.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1773 | :ui:`UI` | Badges not rendered correctly in conformance overview certificates when custom ordering is applied
  ITB-1774 | :ui:`UI` | Rich text editor controls are not following active theme

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1771 | :ui:`UI` | Support viewing and editing in rich text editors directly in HTML
  ITB-1772 | :ui:`UI` | Use SVG images in PDF reports to avoid aliasing issues in certain PDF rendering software

Release 1.25.0 - 31/01/2025
---------------------------

This release focuses primarily on the Test Bed's test engine and the capabilities of the GITB Test Description Language (TDL). It is now simpler
to manage the behaviour and presentation of sets of steps, as well as to apply fine-grained failure management. This is complemented by new features
to better convey feedback on test steps' progress and the overall test outcome. Furthermore, it is now possible to define test case groups, whereby
only one successful result within a group is needed, towards considering the overall group as successfully completed.

Besides extensions to the test engine, the Test Bed's user interface comes with new features to further facilitate community customisation.
Triggers, the Test Bed's equivalent to web hooks, can now be configured with firing expressions to control precisely when they should activate.
Test case groups are now presented on the interface, and the administrator's view of test suites is adapted to match precisely the end result viewed
by testers. Finally, PDF report customisation is enhanced with new values available for inclusion in custom cover pages, complemented by simpler
report previewing.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1705 | :tdl:`TESTS` | A test session with tolerated prior errors followed by an exit step with a forced success output should result in a success
  ITB-1723 | :ui:`UI` | Unable to delete custom community templates for error popups
  ITB-1736 | :ui:`UI` | XSS protection filter blocks valid inputs for uncommon character combinations
  ITB-1737 | :ui:`UI` | Conformance statement configuration tab disregards custom community labels
  ITB-1738 | :ui:`UI` | Uploading an empty file for a required binary configuration property should not pass validation
  ITB-1745 | :tdl:`TESTS` | SoapMessagingV2 handler may fail to deserialise response envelopes

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1355 | :tdl:`TESTS` | Allow group steps to display their child steps without a boundary
  ITB-1356 | :tdl:`TESTS` | Allow group (and other container) steps to apply stopOnError semantics only for their child steps
  ITB-1677 | :tdl:`TESTS` | Support an UNDEFINED exit status for the exit step in TDL test cases
  ITB-1694 | :tdl:`TESTS` | Add to the test session context the name of a file uploaded via a user interaction step
  ITB-1702 | :ui:`UI` | Conditional execution of test session triggers based on related test case and test suite identifiers
  ITB-1706 | :tdl:`TESTS` | Extend the test case output section to support messages for an undefined or skipped state 
  ITB-1707 | :ui:`UI` | Conditional execution of triggers based on related data
  ITB-1709 | :tdl:`TESTS` | Support test case groups in which only one of the included test cases needs to pass for a successful conformance result
  ITB-1722 | :tdl:`TESTS` | Allow a verify step's overall result to be the opposite of the validation outcome
  ITB-1725 | :tdl:`TESTS` | Allow a messaging and processing step's result to be the opposite of the step's validation outcome
  ITB-1726 | :tdl:`TESTS` | Allow errors from messaging and processing steps to be considered as warnings
  ITB-1759 | :tdl:`TESTS` | New XPathProcessor handler to extract content from XML using XPath

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1701 | :ui:`UI` | Improve the responsive behaviour of the conformance statement detail page
  ITB-1710 | :ui:`UI` | Allow previewing a trigger's payload before completing all information
  ITB-1713 | :tdl:`TESTS` | Allow the DisplayProcessor handler to not have parameters for its displayed report
  ITB-1718 | :ui:`UI` | Display simple message on welcome page when no other prompts are present
  ITB-1724 | :tdl:`TESTS` | Display detailed validation reports from external messaging and processing handlers when counters not defined
  ITB-1728 | :ui:`UI` | Allow Test Bed administrator to view and use community-specific resources (e.g. images)
  ITB-1730 | :other:`OTHER` | Remove cluster issuer ingress annotations and document their use through Helm
  ITB-1734 | :ui:`UI` | Display test cases in the test suite detail screen in the same way as in the conformance statement
  ITB-1739 | :ui:`UI` | Automatically close open test session summary messages presented in the conformance statement page
  ITB-1740 | :ui:`UI` | If enabled add a REST API footer link to the Test Bed's OpenAPI documentation
  ITB-1742 | :ui:`UI` | Allow the conformance status to be refreshed from the conformance statement page
  ITB-1744 | :tdl:`TESTS` | Add session log output when SoapMessagingV2 handler fails to process a response for the send operation
  ITB-1747 | :ui:`UI` | Support last update time as placeholder for PDF conformance certificates
  ITB-1749 | :ui:`UI` | Support public snapshot label as placeholder for PDF conformance certificates
  ITB-1750 | :ui:`UI` | Support report creation date as placeholder for PDF conformance certificates
  ITB-1751 | :ui:`UI` | Allow maximising report preview modals for easier custom message editing
  ITB-1763 | :ui:`UI` | When a test suite fails validation due to an invalid expression include the cause in the reported message

Release 1.24.4 - 25/11/2024
---------------------------

This is a minor release to correct bug fixes and introduce improvements to better support Kubernetes deployment.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1712 | :ui:`UI` | Setting TESTBED_HOME_LINK with a trailing slash and no sub path breaks web socket connections

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1711 | :ui:`UI` | Immediately abort initialisation steps at startup if DB is not available
  ITB-1716 | :ui:`UI` | Support a configurable web application context for the gitb-ui application

Release 1.24.3 - 14/11/2024
---------------------------

This is a minor bug fix release to correct issues reported by users.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1708 | :tdl:`TESTS` | When stopOnError semantics apply, an error in a flow step's thread should immediately complete pending steps in other threads

Release 1.24.2 - 29/10/2024
---------------------------

This is a minor bug fix release to correct issues reported by users.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1703 | :ui:`UI` | Launching parallel background sessions through the user interface in very rapid succession may skip certain test cases
  ITB-1704 | :ui:`UI` | Using file-based secrets and setting property HMAC_KEY_FILE to a file with a value including leading and/or trailing whitespace results in test sessions failing to start

Release 1.24.1 - 18/10/2024
---------------------------

This is a minor bug fix release to correct issues reported by users.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1699 | :ui:`UI` | When launching parallel test sessions through the REST API certain sessions may not start

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1700 | :ui:`UI` | Display specific logout pending indicator when logout is pending

Release 1.24.0 - 15/10/2024
---------------------------

This release significantly extends the Test Bed's REST API, allowing the management of all test-related data, and providing additional reporting 
options. Regarding reports in particular, PDF reports can now be produced using external services and support signatures for all report types,
whereas XML reports can be further customised with additional project-specific metadata. On the execution of tests, users can now benefit from
a consolidated display of all configuration related to a given conformance statement. Finally, concerning the setup of on-premise Test Bed instances,
this release brings support for Kubernetes, use of deployment secrets, optional multi-factor authentication when integrating with EU Login, and more
control over an instance's initial data loading.

Regarding test case features, scriptlet inputs become more flexible with optional parameters and better management of default values. In addition, 
new options are available for HTTP exchanges, management of collections, and verification of test session variables.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1640 | :ui:`UI` | Prevent duplicate registrations of users for an SSO-enabled instance
  ITB-1641 | :ui:`UI` | Setting the master password for a fresh production installation should not require force-updating
  ITB-1643 | :ui:`UI` | Valid arithmetic expressions in test cases are rejected during test suite validation
  ITB-1645 | :ui:`UI` | User interaction steps requesting file inputs cannot reselect the same file upon reset
  ITB-1650 | :ui:`UI` | The user guide link from the welcome page's footer should open in a separate window
  ITB-1651 | :ui:`UI` | The footer's legal notice link should be hidden of no legal notice is defined
  ITB-1657 | :ui:`UI` | Unable to remove an actor's display order through the user interface
  ITB-1660 | :ui:`UI` | Unable to update existing organisation, system and statement display order during archive import
  ITB-1665 | :ui:`UI` | Controls within tables that result in errors keep showing as pending
  ITB-1666 | :ui:`UI` | Test sessions started via the REST API start operation and pending execution, can't be stopped in advance through the stop operation
  ITB-1667 | :ui:`UI` | Hide one-time password log notification for default administrator after first EU Login authentication
  ITB-1669 | :ui:`UI` | Test case reports do not include test step detailed report items
  ITB-1672 | :tdl:`TESTS` | Warning when creating nested map types using assign step when first level key is already defined
  ITB-1680 | :ui:`UI` | Allow only valid usernames to be defined for new users
  ITB-1681 | :ui:`UI` | Prevent registering a user with an invalid email address when EU Login is enabled
  ITB-1682 | :ui:`UI` | Prevent updating the role of the configured demo user
  ITB-1695 | :ui:`UI` | Images defined as base64 strings can't be rendered in interaction popups even when setting an image mime type
  ITB-1696 | :ui:`UI` | Interaction steps with large content may fail to be persisted for later viewing
  ITB-1698 | :ui:`UI` | Dash character (-) not counted towards non-character password symbols

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-684 | :ui:`UI` | Enable two-factor authentication for all users
  ITB-1507 | :ui:`UI` | Extend the Test Bed's REST API to support the management of organisations and systems
  ITB-1554 | :other:`OTHER` | Support deployment using Docker secrets
  ITB-1597 | :ui:`UI` | Include custom report metadata for specifications, specification groups, domains and actors
  ITB-1629 | :ui:`UI` | Allow basic CRUD operations on organisations via the REST API
  ITB-1630 | :ui:`UI` | Allow basic CRUD operations on systems via the REST API
  ITB-1633 | :ui:`UI` | Allow PDF report customisation by means of an external converter service
  ITB-1646 | :ui:`UI` | Allow basic CRUD operations on specifications (and specification groups) via the REST API
  ITB-1647 | :ui:`UI` | Allow basic CRUD operations on domains via the REST API
  ITB-1649 | :ui:`UI` | Allow basic CRUD operations on communities via the REST API
  ITB-1652 | :tdl:`TESTS` | Support connection timeout input for HttpMessagingV2
  ITB-1653 | :tdl:`TESTS` | Support request timeout input for HttpMessagingV2
  ITB-1656 | :ui:`UI` | Allow basic CRUD operations on actors via the REST API
  ITB-1658 | :ui:`UI` | Allow the initial administrator API key to be set via environment variable
  ITB-1659 | :ui:`UI` | Allow CRUD operations for the definitions of domain, organisation, system and statement properties via the REST API
  ITB-1662 | :ui:`UI` | Add a shortcut for system administrators to go to a community's domain from its detail page
  ITB-1663 | :ui:`UI` | Support electronic signatures and timestamps for conformance, test case and test step reports
  ITB-1664 | :ui:`UI` | Support generating previews of all PDF report types
  ITB-1668 | :ui:`UI` | Support all EU Login authentication levels (BASIC, MEDIUM, HIGH)
  ITB-1670 | :ui:`UI` | Allow generating PDF test case reports via the REST API
  ITB-1673 | :ui:`UI` | Allow generating PDF conformance statement reports via the REST API
  ITB-1683 | :ui:`UI` | Allow user to create persistent links to any page
  ITB-1684 | :ui:`UI` | Allow user to create persistent links for test session details
  ITB-1691 | :tdl:`TESTS` | New VariableUtils built-in processor to report on variable type and existence
  ITB-1692 | :tdl:`TESTS` | New CollectionUtils operation to append one collection to another

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1190 | :ui:`UI` | When importing a domain/community data archive allow importing as new domain/community
  ITB-1545 | :other:`OTHER` | Upgrade to Java 21
  ITB-1625 | :tdl:`TESTS` | Allow all scriptlet parameters to have default empty values
  ITB-1628 | :ui:`UI` | Allow top-level domains and communities to be deleted via archive imports
  ITB-1636 | :ui:`UI` | Allow selection of multi-dropdown values via keyboard
  ITB-1638 | :tdl:`TESTS` | Remove response timeouts for external test service calls
  ITB-1642 | :ui:`UI` | Include organisation and system properties in conformance statement configuration tab
  ITB-1644 | :ui:`UI` | Allow different internal and publishing URLs for Test Bed callbacks to support Kubernetes deployment
  ITB-1648 | :ui:`UI` | Extend the REST API start operation to treat the actor ID as optional if a single statement can be determined from other inputs
  ITB-1654 | :ui:`UI` | Extend the REST API start operation to treat the system ID as optional if the target organisation defines only one system
  ITB-1661 | :ui:`UI` | Hide the actor endpoint concept and make statement properties directly accessible under the actor
  ITB-1671 | :ui:`UI` | Use configured stylesheet for XML reports returned from the REST API
  ITB-1675 | :ui:`UI` | When authentication completes after a session expiry redirect the user back to the requested page
  ITB-1676 | :ui:`UI` | Highlight form fields that relate to validation errors
  ITB-1678 | :ui:`UI` | Have password input fields retain their toggle display/hide after clicking
  ITB-1688 | :tdl:`TESTS` | Errors due to unexpected inputs for scriptlets of other test suites should include more context information
  ITB-1689 | :ui:`UI` | Show busy indicators for all forms that have not finished loading
  ITB-1690 | :ui:`UI` | Use searchable multiple selection filter for specifications when uploading a test suite
  ITB-1693 | :tdl:`TESTS` | Allow scriptlet parameters to be marked as optional
  ITB-1697 | :ui:`UI` | Allow administrators of communities not linked to a specific domain to manage any domain

Release 1.23.1 - 28/06/2024
---------------------------

This is a minor bug fix release to correct issues reported by users.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1632 | :ui:`UI` | Prevent wrapping of buttons in the listing of test cases
  ITB-1634 | :other:`OTHER` | Correctly determine gitb-srv messaging callback address when using the CALLBACK_ROOT_URL variable

Release 1.23.0 - 20/06/2024
---------------------------

This release focuses mostly on test engine extensions by introducing new and improved built-in messaging capabilities for REST and SOAP web services.
In addition, several bug fixes and improvements to existing capabilities were introduced, including the possibility to use unique API keys for test
exchanges with systems, improved logging, and better error messages for external service communication failures.

Besides engine updates, the Test Bed's REST API was extended with new operations allowing the management of conformance statements, and enriched
metadata reporting for existing ones. Finally, new custom theming and rich-text editing options were introduced, as well as improvements to the 
bulk data import process to allow more fine grained control when updating matching data.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1592 | :ui:`UI` | Selection of a conformance snapshot for a community or Test Bed administrator's organisation should not be visible
  ITB-1594 | :tdl:`TESTS` | HttpMessaging handler blocks when receiving response with a 204 (no content) status
  ITB-1602 | :ui:`UI` | Legal notice link not working when on the welcome page
  ITB-1605 | :tdl:`TESTS` | Using HttpMessaging handler to send request with no payload may result in 400 response
  ITB-1609 | :ui:`UI` | Test execution diagram fails to update due to websocket notification buffer overflow
  ITB-1610 | :ui:`UI` | Warnings from domain parameter updates via REST API not getting reported
  ITB-1615 | :ui:`UI` | Links blocked when defining a custom welcome page message
  ITB-1622 | :ui:`UI` | When no theme has been explicitly set as active the THEME environment variable should be used
  ITB-1623 | :ui:`UI` | Unable to cancel the activation of a built-in theme once selected

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-790 | :tdl:`TESTS` | Redesign messaging handlers based on HTTP to allow simpler configuration
  ITB-886 | :tdl:`TESTS` | Support HTTP-based embedded messaging handlers that don't rely on port assignments
  ITB-1588 | :ui:`UI` | Return test suite metadata following a test suite deployment via REST API
  ITB-1590 | :ui:`UI` | Allow management of conformance statements via the Test Bed's REST API
  ITB-1593 | :tdl:`TESTS` | Add a new HttpMessagingV2 handler to make/receive HTTP(s) calls to/from external systems
  ITB-1611 | :tdl:`TESTS` | Always include in test sessions the system API key as a default value of the SYSTEM map
  ITB-1613 | :tdl:`TESTS` | Add a new SoapMessagingV2 handler to make/receive SOAP calls to/from external systems

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1585 | :ui:`UI` | The organisation management screen should only bring basic information for rich content (e.g. landing pages)
  ITB-1591 | :ui:`UI` | When the REST API is enabled display a conformance snapshot's REST API key
  ITB-1595 | :tdl:`TESTS` | Include status code in receive output of HttpMessaging handler
  ITB-1603 | :ui:`UI` | Support SVG files in PDF reports
  ITB-1606 | :tdl:`TESTS` | Improve error reporting when an invalid external step handler URL is provided
  ITB-1607 | :ui:`UI` | Display interact message instructions for simple texts as normal text (not bold)
  ITB-1608 | :ui:`UI` | Allow configuration of domain parameters via REST API for communities linked to no specific domain
  ITB-1612 | :ui:`UI` | Report deprecated step handlers as warnings when validating a test suite
  ITB-1614 | :tdl:`TESTS` | Consider by default INFO as the test session log level
  ITB-1616 | :ui:`UI` | Add button colouring as part of Test Bed theming options
  ITB-1617 | :ui:`UI` | Support table cell padding and spacing in rich text content such as landing pages and documentation
  ITB-1618 | :other:`OTHER` | Remove the obsolete X-XSS-Protection header
  ITB-1619 | :other:`OTHER` | Replace the obsolete Feature-Policy header with the new Permissions-Policy
  ITB-1620 | :ui:`UI` | Use API keys during automated data archive import at bootstrap to match existing domains and communities
  ITB-1621 | :ui:`UI` | Ensure the processing order of data archives during bootstrap matches the alphabetical ordering of their filenames

Release 1.22.0 - 08/04/2024
---------------------------

This release significantly extends the Test Bed's reporting capabilities by introducing new report types at various aggregation
levels, as well as customisable certificates and XML reports at all levels for machine-based post-processing. In addition, conformance status monitoring
was enhanced by allowing users to view their status in earlier conformance snapshots, and by introducing a new hierarchical view per organisation as the
default presentation of the administrator's conformance dashboard. For users operating their own Test Bed instances, the new release brings 
significant new features such as advanced theming possibilities, new configuration options covering email and automated account clean-up, and the inclusion
of system settings in exports for configuration portability and sandbox definitions. Finally, the Test Bed's automation API was also extended to include
a lightweight health-check mechanism for availability monitoring, and an operation enabling the management of configuration properties.

With respect to test capabilities, this release brings first-class support for the management of images in test steps, and extends test suite and 
test case metadata to include normative specification references. Furthermore, user interactions were significantly overhauled to allow them to be
minimised and asynchronously completed, manage the inputs included in reports, and support configurable timeouts. Finally, it is now possible to
define administrator verifications of test sessions directly within the Test Bed, supporting scenarios where manual verification of test results
is required.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1521 | :ui:`UI` | When creating a new community the option to use the domain's description cannot be enabled
  ITB-1523 | :ui:`UI` | The search field of multi-select filters is hidden when no results are found
  ITB-1526 | :ui:`UI` | Always display statement actor when creating new statements if specification foresees multiple non-hidden SUT actors
  ITB-1527 | :ui:`UI` | Organisation users are unable to filter by specification group
  ITB-1531 | :ui:`UI` | Valid TDL expressions referring to multiple nested containers do not get validated correctly
  ITB-1532 | :ui:`UI` | Unexpected test suite deployment errors via the REST API don't get logged
  ITB-1536 | :tdl:`TESTS` | Test session creation error when using a SimulatedMessaging handler with an actor that has statement configuration properties
  ITB-1541 | :ui:`UI` | Prevent editor style caching that fails to display editor
  ITB-1552 | :ui:`UI` | Don't show target domain on import screen for administrator of community with no domain
  ITB-1556 | :other:`OTHER` | Containerised build fails for gitb-ui
  ITB-1565 | :ui:`UI` | When deploying a test suite via REST API test case update instructions are ignored if test suite instructions are missing
  ITB-1580 | :tdl:`TESTS` | Error while closing a processing transaction involving a remote processing service
  ITB-1583 | :ui:`UI` | Importing a domain archive skips the update of existing specification groups

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-42 | :ui:`UI` | Allow user-defined themes
  ITB-1322 | :ui:`UI` | Create conformance certificates and reports at the level of specification groups
  ITB-1448 | :tdl:`TESTS` | Support the display of images in test step reports
  ITB-1449 | :tdl:`TESTS` | Support the display of images in user interaction steps
  ITB-1487 | :ui:`UI` | Optionally allow organisation users to view their conformance status in earlier conformance snapshots
  ITB-1503 | :ui:`UI` | Make the page counters optional in conformance certificates
  ITB-1509 | :tdl:`TESTS` | Support administrator input in TDL test cases
  ITB-1511 | :ui:`UI` | Allow the configurable inclusion of badges in conformance certificates
  ITB-1512 | :ui:`UI` | Support separate conformance badges for on-screen display and in PDF reports
  ITB-1535 | :ui:`UI` | Allow Test Bed administrators to configure automatic account deletion following inactivity
  ITB-1540 | :ui:`UI` | Include system settings in exports, imports and sandbox setups
  ITB-1542 | :ui:`UI` | Add a dedicated Test Bed health-check endpoint to facilitate automation processes and availability monitoring
  ITB-1543 | :ui:`UI` | Extend test suite and test case metadata to record specification references
  ITB-1549 | :ui:`UI` | Include default landing pages, legal notices and error templates in exports, imports and sandbox setups
  ITB-1550 | :ui:`UI` | Include system administrators in exports, imports and sandbox setups
  ITB-1557 | :tdl:`TESTS` | Support asynchronous user input for test case interaction steps
  ITB-1558 | :tdl:`TESTS` | Allow minimising user interaction prompts in test sessions
  ITB-1561 | :tdl:`TESTS` | Support timeouts for user interactions in test sessions
  ITB-1562 | :tdl:`TESTS` | Support user interaction inputs that are not displayed on the step's report
  ITB-1563 | :ui:`UI` | Allow configuration of a Test Bed instance's email settings through the UI
  ITB-1570 | :ui:`UI` | Support setting test configuration via the REST API
  ITB-1572 | :ui:`UI` | Support XML conformance statement reports
  ITB-1573 | :ui:`UI` | Allow community administrators to configure XSLTs for customised XML reports
  ITB-1574 | :ui:`UI` | Create conformance certificates and reports for an organisation spanning all conformance statements
  ITB-1577 | :ui:`UI` | Support use of custom organisation and system properties in conformance certificate custom messages
  ITB-1582 | :ui:`UI` | Replace the default presentation of the conformance dashboard with a hierarchical display of conformance statements per organisation

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-597 | :ui:`UI` | Make all password or secret value input fields consistent
  ITB-789 | :ui:`UI` | Disable the search buttons for custom properties when the relevant community does not define any
  ITB-1378 | :ui:`UI` | Replace default administrator password for new installations with auto-generated unique value
  ITB-1418 | :ui:`UI` | Support drag and drop for the reordering of parameters, properties and specifications
  ITB-1505 | :tdl:`TESTS` | Allow TDL interaction steps to have their mime type provided as a variable expression
  ITB-1515 | :ui:`UI` | Add a "development mode" indication for sandbox Test Bed instances that lack a full security configuration
  ITB-1524 | :other:`OTHER` | Migrate to latest Bootstrap version
  ITB-1525 | :ui:`UI` | Display an actor's name instead of its identifier in screens and reports
  ITB-1528 | :ui:`UI` | Don't display a statement's actor when all other specification actors are hidden
  ITB-1533 | :tdl:`TESTS` | Ensure images provided in test cases can always be previewed
  ITB-1534 | :tdl:`TESTS` | Extend the TDL DisplayProcessor to set its severity level
  ITB-1539 | :ui:`UI` | Display expandable icon for system settings panel
  ITB-1544 | :ui:`UI` | Adapt a sandbox instance's pre-configuration process to not remove processed data archives
  ITB-1546 | :ui:`UI` | Scan image uploads (badges, theme logos) to ensure they are of accepted image types
  ITB-1548 | :other:`OTHER` | Upgrade Play and replace Akka by Pekko
  ITB-1551 | :ui:`UI` | Don't show system administrator options to community administrator during import preview
  ITB-1553 | :ui:`UI` | Support drag and drop for file uploads
  ITB-1555 | :ui:`UI` | Make all file upload controls consistent
  ITB-1559 | :ui:`UI` | Show badge indication for refreshed active sessions' logs in session listings
  ITB-1564 | :ui:`UI` | Allow disabling the Test Bed's contact form and copying the default mailbox
  ITB-1575 | :ui:`UI` | Hide actor information from PDF reports if actors are not displayed on the UI
  ITB-1576 | :ui:`UI` | Separate in PDF reports the display of specification groups and options
  ITB-1578 | :other:`OTHER` | Define baseline DB scripts for faster setup time on new installations
  ITB-1579 | :tdl:`TESTS` | Improve test engine error message when dynamically imported resource cannot be found

Release 1.21.1 - 07/11/2023
---------------------------

.. warning::
  This patch contains important security updates and upgrading from earlier versions is advised.

This is a limited maintenance release to address reported bugs, and most importantly to patch third-party libraries to resolve
published vulnerabilities. Of these the most important is the HTTP/2 Rapid Reset vulnerability that could render a Test Bed
instance vulnerable to a DDoS attack if used directly (i.e. without a reverse proxy) from end users.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1502 | :ui:`UI` | The system administration screen shows the custom welcome page message as disabled even when it is set
  ITB-1519 | :ui:`UI` | Test Bed REST API documentation may become unavailable

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1516 | :other:`OTHER` | Library updates to address CVE-2023-44487 (HTTP/2 Rapid Reset)
  ITB-1517 | :other:`OTHER` | Library updates to address (as a precaution) CVE-2023-22102 (MySQL connector exploit)
  ITB-1518 | :other:`OTHER` | Library updates to address (as a precaution) CVE-2023-45819 (TinyMCE notifications exploit)

Release 1.21.0 - 06/10/2023
---------------------------

This release restructures the Test Bed's user interface to simplify navigation and make the organisation of all screens more intuitive.
In addition, complex specification setups are now presented in a more intuitive manner, hiding concepts that depending on a 
community's configuration may be superfluous. Test case management is extended by introducing optional and disabled
test cases, as well as new tags that provide visual cues for test case traits. With respect to monitoring a community's conformance, 
administrators can now take and review snapshots of their organisations' testing progress, and also define public badges for their
specifications that can be externally referred to to illustrate an organisation's conformance status. Finally, the management
of on-premise Test Bed instances is better supported, by exposing a new administration interface allowing administrators to
review and adapt the instance's configuration, as well as define global defaults for all hosted communities.

Alongside these changes to the Test Bed software, several new features were introduced in the GITB Test Description Language. New 
metadata was introduced to streamline test suite updates, and to define aspects such as test case custom tags, optional and disabled 
flags, from within test suite archives. Furthermore new embedded processing capabilities were introduced to facilitate JSON processing,
test session delays, and generation of random content.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1431 | :ui:`UI` | Background test sessions failing to initialise appear as active
  ITB-1442 | :ui:`UI` | If the Test Bed is behind a proxy it may fail to redirect the user post-login to the public (internal) home page
  ITB-1443 | :ui:`UI` | Unable to deploy non-shared test suite via REST API
  ITB-1447 | :ui:`UI` | Test cases and scriptlets that fail syntax validation should not be attempted to be validated in depth during test suite upload
  ITB-1451 | :ui:`UI` | Shared test suites are skipped in bulk data imports
  ITB-1461 | :ui:`UI` | Unable to deploy via REST API a non-shared test suite that matches a shared test suite from another specification in the domain
  ITB-1468 | :ui:`UI` | Ignore leading and trailing whitespace in user emails when linking EU Login accounts
  ITB-1470 | :tdl:`TESTS` | Unable to load scriptlets from other test suite in the domain
  ITB-1471 | :ui:`UI` | Unable to update shared test suite that is not linked to a specification
  ITB-1472 | :tdl:`TESTS` | Unable to lookup built-in session variables (e.g. DOMAIN) from remote scriptlets
  ITB-1473 | :tdl:`TESTS` | Scriptlets having a single parameter with a default value and no call inputs produce an error
  ITB-1478 | :ui:`UI` | Cannot delete specification group that contains specification options
  ITB-1484 | :ui:`UI` | Unable to import export archives with custom labels set for specification groups

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-673 | :ui:`UI` | Navigation breadcrumb
  ITB-1223 | :ui:`UI` | Allow Test Bed administrators to view and edit system-wide configuration properties
  ITB-1313 | :ui:`UI` | Support the definition of badges for different specifications
  ITB-1315 | :ui:`UI` | Allow badges to be queried publicly for organisations (like GitHub badges)
  ITB-1342 | :ui:`UI` | Allow the Test Bed administrator to define the welcome text displayed on the Test Bed's welcome page
  ITB-1351 | :tdl:`TESTS` | JSON Pointer embedded processing handler for data extraction from JSON content
  ITB-1422 | :ui:`UI` | Allow exporting a test case report from the test execution page
  ITB-1429 | :ui:`UI` | Allow administrators to preview pending changes to community landing pages
  ITB-1430 | :ui:`UI` | Allow administrators to preview pending changes to community legal notices
  ITB-1438 | :tdl:`TESTS` | Support for optional test cases that do not count towards conformance
  ITB-1452 | :tdl:`TESTS` | New embedded processing handler to apply a delay during a test session's execution
  ITB-1453 | :ui:`UI` | Support quick lookup of community resources when editing rich text content such as landing pages and test case documentation
  ITB-1454 | :tdl:`TESTS` | Support disabled test cases
  ITB-1458 | :tdl:`TESTS` | Allow test suite and test case definitions to define their update approach regarding metadata updates and test history reset
  ITB-1462 | :tdl:`TESTS` | Extend TokenGenerator embedded processing handler to generate random numbers
  ITB-1463 | :ui:`UI` | Support the definition of labels with custom text and colour for test cases to display in the UI and reports
  ITB-1466 | :ui:`UI` | Allow administrators to take named snapshots of the conformance overview of their community
  ITB-1467 | :ui:`UI` | Allow domain parameters to be used as placeholders in conformance certificates
  ITB-1482 | :ui:`UI` | Allow the Test Bed administrator to adapt the home page message displayed on the login page
  ITB-1483 | :ui:`UI` | Edit a Test Bed instance's basic configuration values through the user interface

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-743 | :ui:`UI` | Restructure organisation user interface
  ITB-919 | :ui:`UI` | Make the left-side menu collapsible
  ITB-920 | :ui:`UI` | Move all navigation controls to the left-side menu
  ITB-1014 | :other:`OTHER` | Migrate to latest Java LTS release (17)
  ITB-1197 | :other:`OTHER` | Remove support for Internet Explorer 11
  ITB-1238 | :ui:`UI` | Use icons to illustrate the different menu options and tabs
  ITB-1391 | :ui:`UI` | Improve the efficiency of the conformance dashboard
  ITB-1444 | :tdl:`TESTS` | Allow test services to define an empty getModuleDefinition implementation
  ITB-1450 | :tdl:`TESTS` | If a test session is terminating do not attempt to create scriptlet outputs
  ITB-1465 | :ui:`UI` | Allow organisation administrators to edit their users without needing to delete and recreate
  ITB-1469 | :ui:`UI` | If multiple error messages are raised in a page prevent them from being displayed altogether
  ITB-1474 | :tdl:`TESTS` | Allow instructions in interact steps to be forcefully displayed without using an editor
  ITB-1476 | :ui:`UI` | Make the title of a community's conformance certificate optional
  ITB-1477 | :ui:`UI` | Display test case and test suite descriptions in the conformance dashboard
  ITB-1479 | :ui:`UI` | Improve display of domain specifications and specification groups
  ITB-1480 | :ui:`UI` | Make the management of Test Bed default community settings (e.g. landing page) more intuitive
  ITB-1481 | :ui:`UI` | Make search filters immediately usable without needing to enable them
  ITB-1485 | :ui:`UI` | Return a 404 "Not found" response for any request to a non-existent path
  ITB-1486 | :ui:`UI` | Better distinguish non-reversible delete operations on the UI
  ITB-1489 | :ui:`UI` | Allow navigation to community and domain from conformance dashboard entries
  ITB-1490 | :ui:`UI` | Allow navigation to community, domain, specification and actor from session dashboard entries
  ITB-1492 | :ui:`UI` | Allow navigation to community and domain information from conformance statement detail page
  ITB-1493 | :ui:`UI` | Display system information in conformance statement details page
  ITB-1495 | :ui:`UI` | Allow a specific landing page to be set for the community or Test Bed administrator
  ITB-1496 | :ui:`UI` | Present the default conformance certificate options if these have never been set

Release 1.20.1 - 23/06/2023
---------------------------

This release corrects an issue reported by users concerning the Test Bed's user interface. It also adds a variant of the gitb-types
library to extend its support for older Java platforms.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1440 | :ui:`UI` | Error while retrieving a system's conformance statements

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1432 | :other:`OTHER` | Extend support of gitb-types library to include Java 8 as a minimum

Release 1.20.0 - 05/05/2023
---------------------------

This release focuses fully on the Test Bed's user interface and specifically enhancing its reporting capabilities. The PDF reports produced by the 
Test Bed have been fully redesigned making them more intuitive, and enriching them with supporting information such as extended documentation,
test session log output, test coverage ratios and step result overviews. In addition, new options were introduced for community administrators to 
customise reports, and to facilitate the management and maintenance of test suite documentation. Finally, this release provided an opportunity to 
resolve reported bugs and to apply precautionary security patches to the Test Bed's underlying third party software libraries.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-522 | :ui:`UI` | Test case report pages may have misplaced headings for complex test cases
  ITB-1399 | :ui:`UI` | Test suite validation does not catch duplicate test case references
  ITB-1400 | :ui:`UI` | When a test suite upload fails due to an unexpected reason there is an additional error about a missing parameter
  ITB-1408 | :ui:`UI` | Error previewing conformance certificate PDF report
  ITB-1412 | :ui:`UI` | Error importing export archive in community without assigned domain
  ITB-1416 | :ui:`UI` | When selecting to check all available conformance statements it is possible to create invalid statements

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1394 | :ui:`UI` | Include the test session log in test case reports
  ITB-1395 | :ui:`UI` | Include extended test case documentation in test session reports
  ITB-1396 | :ui:`UI` | Support custom ordering for specifications and conformance statements
  ITB-1411 | :ui:`UI` | Display test result percentage ratios when viewing conformance statements
  ITB-1413 | :ui:`UI` | Allow copying to the clipboard the HTML source for test suite and test case documentation
  ITB-1414 | :ui:`UI` | Allow previewing a test case's documentation in PDF reports

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1397 | :ui:`UI` | Show only unique options in search filters
  ITB-1398 | :ui:`UI` | Expand the height of the selection box for specifications in the test suite upload dialogs
  ITB-1403 | :ui:`UI` | Include overview of step results in test case PDF report
  ITB-1405 | :ui:`UI` | Extend the rich text support in custom messages for conformance PDF reports
  ITB-1406 | :ui:`UI` | Improve PDF report styling and organisation
  ITB-1407 | :ui:`UI` | Normalize whitespace included in test suite and test case descriptions for PDF reports
  ITB-1409 | :ui:`UI` | Simplify the usage of placeholders in rich text editors
  ITB-1410 | :ui:`UI` | Include test result percentages in conformance statement reports and certificates

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

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1302 | :ui:`UI` | Self messaging steps (same to and from actors) are displayed with a squashed arrow
  ITB-1333 | :ui:`UI` | When selecting to delete test sessions, expanded test sessions are not displayed at full width
  ITB-1341 | :ui:`UI` | The self-registration page when not using SSO breaks the heading text's alignment
  ITB-1348 | :ui:`UI` | Tooltips displayed for table headers and wrongly aligned
  ITB-1349 | :ui:`UI` | Authorisation errors in REST API calls don't get reported correctly
  ITB-1350 | :ui:`UI` | Test suite management REST API calls are blocked if test session API calls are not allowed for organisations
  ITB-1354 | :ui:`UI` | A step's status report should allow collapsing only for non-root values
  ITB-1362 | :tdl:`TESTS` | Test session step status maps allow overriding entries when scriptlet child steps have the same IDs
  ITB-1363 | :ui:`UI` | Test case and test suite documentation preview produces an error for empty content
  ITB-1364 | :ui:`UI` | Contact form attachments not named correctly
  ITB-1366 | :ui:`UI` | Steps within groups and loops not included in test session reports
  ITB-1367 | :ui:`UI` | Assign steps directly assigning values to maps within maps is reported as a test suite validation error
  ITB-1368 | :ui:`UI` | Skipped loop steps within other loop steps are not displayed correctly
  ITB-1374 | :tdl:`TESTS` | Tests including flow steps and set to stopOnError may result in a wrong overall result

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1010 | :ui:`UI` | Allow multiple conformance statements to be defined at the same time
  ITB-1233 | :ui:`UI` | Introduce optional specification groups to allow additional organisation over specifications
  ITB-1297 | :ui:`UI` | When uploading a test suite to reset its conformance testing status allow selecting the test cases for which this should happen
  ITB-1303 | :ui:`UI` | Allow community administrators to upload static resources for use in rich text content such as documentation and landing pages
  ITB-1318 | :ui:`UI` | Allow test suites to be defined at domain level and be shared across specifications
  ITB-1352 | :tdl:`TESTS` | Extend CollectionUtils embedded processor to select a random entry from a list
  ITB-1357 | :tdl:`TESTS` | Extend CollectionUtils processor with operation to see if a collection contains a value
  ITB-1376 | :other:`OTHER` | Adapt GITB types library to support usage in both Java EE and Jakarta EE contexts
  ITB-1380 | :ui:`UI` | Allow filtering of available conformance statements when creating a new one
  ITB-1383 | :tdl:`TESTS` | Extend CollectionUtils processor with operation to remove an item from a list or map

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1309 | :ui:`UI` | In the conformance statement list for organisations don't display the domain if one is linked to the relevant community
  ITB-1323 | :ui:`UI` | Record completed test session information as a snapshot of the metadata applicable when the session was executed
  ITB-1334 | :other:`OTHER` | Improve Content Security Policy
  ITB-1337 | :other:`OTHER` | Simplify reverse proxy setup via environment variables configured directly in the Test Bed
  ITB-1360 | :tdl:`TESTS` | Improve the error message when using a non-string variable as a template placeholder value
  ITB-1361 | :tdl:`TESTS` | Record steps' scriptlet identifiers in the STEP_STATUS and STEP_SUCCESS status maps
  ITB-1365 | :ui:`UI` | Remove warnings from DB migration scripts when initialising a new Test Bed instance
  ITB-1375 | :ui:`UI` | Allow test suite and test case identifiers to be copied to the clipboard
  ITB-1379 | :ui:`UI` | Only propose available conformance statements when creating a new one
  ITB-1381 | :ui:`UI` | Treat a system's version information as optional
  ITB-1382 | :ui:`UI` | Display tooltips for status icons
  ITB-1385 | :ui:`UI` | Display icons for all UI constructs that are expandable or collapsible

Release 1.18.1 - 24/11/2022
---------------------------

This is a minor maintenance release to upgrade third party libraries and the Test Bed's database, as well as correct an
issue reported by Test Bed users when viewing the test session history.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1331 | :ui:`UI` | Viewing the test session history may produce an "Out of sort memory" error

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1329 | :other:`OTHER` | Upgrade MySQL to version 8.0.31
  ITB-1330 | :other:`OTHER` | Upgrade Commons Text to resolve CVE-2022-42889 (Text4Shell)
  ITB-1332 | :ui:`UI` | Colour-code result text displayed in test step report modals

Release 1.18.0 - 17/10/2022
---------------------------

This release focuses primarily on test engine and GITB TDL extensions to increase the Test Bed's testing capabilities.
It extends significantly the customisation of scriptlets, allowing steps, information and behaviours to be
adapted dynamically depending on the needs of the calling test cases. The most important of these changes are the new
possibilities to manage the visibility of all scriptlet elements, the conditional inclusion of blocks of steps, and the
support for default input values. Apart from scriptlet extensions, the Test Bed's built-in service handlers received 
several updates, focused primarily on adding further XML validation features, and the customisation of generated identifiers
and simulated message exchanges.

Aside GITB TDL extensions, several updates were made to the Test Bed's software. New automation options were made available
through triggers, including new trigger events, input data, support for REST services and JSON, as well as the possibility to
fully test triggers directly from the user interface. Reporting options were also extended, by supporting XML reports of test
sessions and individual test steps for machine processing, as well as a new operation on the Test Bed's REST API to 
retrieve complete test session reports. These new features were complemented by further minor improvements, such as support for default
custom property values, and various bug fixes. Finally, the Test Bed software's build tooling was extended to allow
containerised builds, allowing rapid prototyping and experimentation directly from the Test Bed's source.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1245 | :tdl:`TESTS` | The TokenGenerator's string operation may crash for badly formatted regular expressions
  ITB-1254 | :ui:`UI` | Updating an organisation user on a Test Bed instance not connected to EU Login produces an error
  ITB-1268 | :ui:`UI` | Test suite validation blocks scriptlets from using variables from parent contexts (test case or other scriptlets)
  ITB-1272 | :tdl:`TESTS` | SchematronValidator reports Schematron warnings as information messages
  ITB-1278 | :ui:`UI` | Test execution diagram includes blank actor column when the Test Engine actor is not displayed
  ITB-1287 | :ui:`UI` | Messaging steps without transactions pass test suite validation for invalid step inputs of handlers
  ITB-1308 | :ui:`UI` | Imports used to clone domains and communities within the same Test Bed instance fail to complete

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-791 | :ui:`UI` | Allow the complete test of a trigger from its detail page
  ITB-812 | :ui:`UI` | New trigger event on test session start
  ITB-1025 | :ui:`UI` | Allow triggers to be defined as REST HTTP POST calls with JSON payload
  ITB-1168 | :tdl:`TESTS` | Define an XmlValidator embedded validation handler to allow validation of XML against XSD and/or Schematron
  ITB-1228 | :ui:`UI` | Allow the exporting of test session reports in XML format via the user interface
  ITB-1229 | :ui:`UI` | Allow the exporting of test step reports in XML via the user interface
  ITB-1230 | :ui:`UI` | Allow the exporting of test session reports via REST API
  ITB-1231 | :ui:`UI` | Optionally include the XML test session report in the data of the trigger for test session completion
  ITB-1246 | :ui:`UI` | Include session identifier, test suite ID and test case ID, as optional data in all trigger calls that refer to specific test sessions
  ITB-1249 | :ui:`UI` | Include conformance statement properties as optional data in all trigger calls relevant to conformance statements
  ITB-1261 | :tdl:`TESTS` | Allow scriptlet steps' hidden attribute to be set dynamically as long as it can be calculated at test case load
  ITB-1262 | :tdl:`TESTS` | Allow messaging steps' reply attribute to be set dynamically within scriptlets as long as it can be calculated at test case load
  ITB-1263 | :tdl:`TESTS` | Allow a call step to be set as hidden, hiding by default all child steps
  ITB-1265 | :tdl:`TESTS` | New ExpressionValidator embedded validation handler for validation based on custom expressions
  ITB-1266 | :tdl:`TESTS` | Allow a flow step's thread blocks to be individually hidden
  ITB-1267 | :tdl:`TESTS` | Allow the hiding of if step containers but with visible child steps (if only a then block is defined)
  ITB-1273 | :tdl:`TESTS` | Support default values for scriptlet parameters
  ITB-1274 | :tdl:`TESTS` | Support static if step evaluation for conditional inclusion of steps in scriptlets (without if container boundaries)
  ITB-1276 | :tdl:`TESTS` | Include the test session ID in all external messaging, processing and validation service calls
  ITB-1277 | :tdl:`TESTS` | Include the test case ID in all external messaging, processing and validation service calls
  ITB-1283 | :tdl:`TESTS` | Include the test step ID in all external messaging, processing and validation service calls
  ITB-1296 | :ui:`UI` | Support default values for organisation, system and statement properties
  ITB-1299 | :tdl:`TESTS` | Include the test engine version information in all external messaging, processing and validation service calls
  ITB-1300 | :tdl:`TESTS` | New predefined SESSION map in the test session context including test session metadata for use in test cases

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1243 | :ui:`UI` | Fail test suite validation when multi-operation embedded processing handlers are used without specifying the operation to use
  ITB-1244 | :tdl:`TESTS` | Extend the TokenGenerator's uuid operation to support optional prefix and postfix inputs
  ITB-1247 | :ui:`UI` | Use icons for trigger status display
  ITB-1248 | :ui:`UI` | Add visual grouping for trigger event types
  ITB-1251 | :ui:`UI` | Check formatting restrictions on domain parameter and statement parameter names
  ITB-1252 | :ui:`UI` | Add a user friendly name for conformance statement (endpoint) parameters
  ITB-1253 | :tdl:`TESTS` | Consider a TAR report's context as a "map" by default
  ITB-1257 | :tdl:`TESTS` | If using simplified process steps consider the input's type when resolving its corresponding parameter
  ITB-1258 | :tdl:`TESTS` | Allow the assign step to create multiple levels of maps if they don't already exist
  ITB-1259 | :tdl:`TESTS` | When using simulated embedded handlers (DisplayProcessor, SimulatedMessaging) allow mime types to be set for the display of provided parameters
  ITB-1260 | :ui:`UI` | In the session log button badge for unread output highlight whether these include warnings or errors
  ITB-1269 | :tdl:`TESTS` | Optionally include the Schematron assertion test information in the SchematronValidator's report
  ITB-1270 | :tdl:`TESTS` | Optionally sort XSDValidator and SchematronValidator findings based on severity
  ITB-1271 | :tdl:`TESTS` | Optionally include validation artefacts in XSDValidator and SchematronValidator reports
  ITB-1279 | :other:`OTHER` | Support containerised build via Docker Compose
  ITB-1285 | :tdl:`TESTS` | Allow on-the-fly replacement of existing map entries as the result of assign steps
  ITB-1286 | :ui:`UI` | Show test suite validation warning for a process step without an operation referring to a handler that supports multiple operations
  ITB-1288 | :ui:`UI` | Reorganise and relabel test execution screen buttons
  ITB-1292 | :other:`OTHER` | Include the build timestamp in the release information displayed for nightly builds

Release 1.17.0 - 20/07/2022
---------------------------

This release focuses primarily on the GITB Test Description Language (TDL) and the capabilities of the Test Bed's
test execution engine. The GITB TDL is extended with several new processing and messaging capabilities that simplify
common operations and working with data transformations and templates. In addition, scriptlets, the GITB TDL 
construct for reusing test steps across test cases and test suites, are now made more flexible by allowing texts
and actors to be dynamically set according to their usage context. Finally, the expression language used by GITB TDL
steps for simple processing is now upgraded to the latest XPath version leading to expression simplifications and multiple
new use cases becoming available.

Apart from the new GITB TDL features, changes in the Test Bed software include performance improvements, more
extensive test suite validation, and most importantly new REST API operations to deploy and undeploy test suites.
The new test suite management operations complement the previously available test session operations to further
facilitate using the Test Bed in continuous integration processes for test development.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1200 | :tdl:`TESTS` | Assign step set to append for a map variable should create (and append) to a list
  ITB-1241 | :tdl:`TESTS` | Map variables cannot be directly assigned to other maps or steps' map inputs

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-91 | :tdl:`TESTS` | Switch TDL expression language from XPath 1.0 to XPath 3.0
  ITB-484 | :tdl:`TESTS` | Embedded processing handler to display to the user provided inputs
  ITB-970 | :tdl:`TESTS` | Embedded processing handler for XSLT-based XML transformations
  ITB-1028 | :tdl:`TESTS` | Embedded processing handler to process a template with specific placeholder inputs
  ITB-1053 | :tdl:`TESTS` | Embedded processing handler to use FreeMarker templates for template processing
  ITB-1060 | :tdl:`TESTS` | Allow messaging steps' actors to be set dynamically within scriptlets
  ITB-1194 | :ui:`UI` | Allow test suites to be uploaded and removed via the Test Bed's REST API (to support CI/CD processes)
  ITB-1198 | :tdl:`TESTS` | Embedded messaging handler for simulated exchanges between actors
  ITB-1202 | :tdl:`TESTS` | Allow test step descriptions to be set dynamically within scriptlets
  ITB-1205 | :tdl:`TESTS` | Allow the titles of test steps that have child steps to be set dynamically within scriptlets
  ITB-1206 | :tdl:`TESTS` | Allow the title of the popup of user interaction steps to be set dynamically
  ITB-1207 | :tdl:`TESTS` | Allow interaction step actors to be set dynamically within scriptlets

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-885 | :tdl:`TESTS` | Make messaging transactions optional
  ITB-1186 | :other:`OTHER` | Provide Open API documentation for the Test Bed's REST API
  ITB-1201 | :ui:`UI` | Support collapsing and expanding of data presented in test step reports
  ITB-1203 | :ui:`UI` | Handle all messaging for embedded messaging handlers with non-blocking IO
  ITB-1208 | :ui:`UI` | Prevent during test suite validation scriptlets that call themselves (directly or indirectly)
  ITB-1209 | :ui:`UI` | During test suite validation check that scriptlets called by test cases have correct actor references
  ITB-1213 | :tdl:`TESTS` | Allow connection properties to be defined for non-transactional process steps
  ITB-1232 | :ui:`UI` | Support POST requests for querying test session status via the REST API

Release 1.16.1 - 06/04/2022
---------------------------

This is a minor maintenance release to upgrade third party libraries, and to correct minor bugs related to the display
of tooltips and the Test Bed's test execution REST API.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1178 | :ui:`UI` | Long help tooltips are not correctly wrapped after activating conformance dashboard status tooltips
  ITB-1184 | :ui:`UI` | REST API inputs cannot replace user input map variables

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1182 | :other:`OTHER` | Upgrade to Java 11.0.14
  ITB-1183 | :other:`OTHER` | Upgrade 3rd party libraries to address reported CVEs

Release 1.16.0 - 18/03/2022
---------------------------

This release introduces numerous changes for the Test Bed's user interface as well as the internal test engine. The key feature of this
release is the Test Bed's new machine-to-machine API that allows test sessions to be launched and managed via REST calls. The execution approach 
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

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1110 | :tdl:`TESTS` | Remote messaging handlers signalled twice to finalize session
  ITB-1111 | :tdl:`TESTS` | A scriptlet should inherit the caller's stopOnError approach if it does not define it itself
  ITB-1115 | :ui:`UI` | Container steps where internal arrows between actors go from right to left may not be correctly contained
  ITB-1116 | :ui:`UI` | Test execution page limits unnecessarily compacts the display of test case names
  ITB-1119 | :ui:`UI` | Using links in test suite and test case documentation may be blocked
  ITB-1122 | :ui:`UI` | Test cases with multiple SUT actors pass test suite validation
  ITB-1140 | :ui:`UI` | Session history page clips test case filter dropdown
  ITB-1153 | :ui:`UI` | Test cases with actors having a set display order but that are not used break the test diagram display
  ITB-1162 | :tdl:`TESTS` | A test step with an explicit stopOnError approach should override the approach defined by its caller
  ITB-1166 | :ui:`UI` | Long, non-breakable texts break table displays

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-387 | :ui:`UI` | Allow execution of test cases via machine-to-machine API
  ITB-883 | :tdl:`TESTS` | Allow a test case definition to define whether it must run sequentially or can be parallelised
  ITB-884 | :tdl:`TESTS` | Extend the test engine to support batch test sessions executed in parallel or sequentially
  ITB-1068 | :tdl:`TESTS` | Allow custom GITB services to contribute session log output
  ITB-1069 | :ui:`UI` | Allow the user to filter the test session log output based on severity levels
  ITB-1081 | :ui:`UI` | Allow sorting of a community's organisations based on their registration sequence
  ITB-1094 | :ui:`UI` | Filtering options for test cases in conformance statement details page
  ITB-1112 | :tdl:`TESTS` | Record the specific result (pending, success, failure, undefined, skipped) for each test step
  ITB-1120 | :ui:`UI` | Allow users to choose whether test sessions launched in background batches should run in parallel or sequentially
  ITB-1121 | :ui:`UI` | Allow users to refresh the status display of an active test session to monitor its progress
  ITB-1148 | :ui:`UI` | Display badge for new log messages on test execution's log display button
  ITB-1158 | :tdl:`TESTS` | Allow the definition of namespaces for use in XPath expressions in test cases

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-50 | :ui:`UI` | Display message to user for an interactive session that is externally terminated
  ITB-1040 | :ui:`UI` | Add tooltips to all buttons that are displayed as icons
  ITB-1061 | :ui:`UI` | Limit proposed multi-select search filter options if too many in number
  ITB-1078 | :ui:`UI` | Visually highlight log entries of different levels when viewing a test session log
  ITB-1083 | :ui:`UI` | Remove blocking call within the Test Bed engine when initiating a test session
  ITB-1089 | :tdl:`TESTS` | Include step description (if defined in the test case) in the log output of a test session
  ITB-1092 | :ui:`UI` | Automatically display self-registration settings when enabling self-registration for a community
  ITB-1093 | :ui:`UI` | In the conformance statement details page display test cases and configuration parameters as tabs
  ITB-1096 | :ui:`UI` | Allow justification of images in rich text content (e.g. landing pages and documentation)
  ITB-1097 | :ui:`UI` | Move dashboard navigation shortcuts to the top of the display
  ITB-1126 | :tdl:`TESTS` | Provide more meaningful information when a test session fails because a test service could not be reached
  ITB-1128 | :ui:`UI` | Allow administrators to view session logs for active test sessions
  ITB-1132 | :ui:`UI` | Simplify the presentation of the conformance statement detail page
  ITB-1133 | :ui:`UI` | Test sessions moved to the background after having started interactively should be ran sequentially
  ITB-1134 | :ui:`UI` | Text search filters should be automatically applied when unfocused
  ITB-1135 | :ui:`UI` | Make the conformance statement details panel collapsible
  ITB-1136 | :ui:`UI` | Group together previous and upcoming test cases when executing several test cases in interactive mode
  ITB-1137 | :ui:`UI` | Support display of missing information for actors with multiple configuration endpoints
  ITB-1138 | :ui:`UI` | When executing multiple tests allow the user to hide/show completed and pending tests
  ITB-1139 | :ui:`UI` | When executing multiple tests allow the user to choose whether they should continue automatically or manually
  ITB-1141 | :ui:`UI` | Display loading indicator when filtering a community's organisations
  ITB-1144 | :tdl:`TESTS` | Pass test session ID to validation service calls
  ITB-1145 | :tdl:`TESTS` | Pass test session ID to processing service calls as the default session identifier
  ITB-1146 | :tdl:`TESTS` | Consider actor entries in test cases as simulated by default
  ITB-1147 | :ui:`UI` | Automatically refresh the contents of the test session log display (if open) for newly received log messages
  ITB-1149 | :ui:`UI` | Display and record a report of the inputs provided through user interaction steps
  ITB-1150 | :ui:`UI` | Display interaction steps as being between the tester and the test engine, not the SUT actor itself
  ITB-1151 | :ui:`UI` | Display the interaction step tester actor after SUT and SIMULATED actors
  ITB-1152 | :tdl:`TESTS` | Hide individual requests and instructions when displaying interaction steps
  ITB-1160 | :ui:`UI` | Merge table columns containing buttons and hide the column title
  ITB-1161 | :tdl:`TESTS` | Allow sections of test case definitions to be defined in any order
  ITB-1163 | :ui:`UI` | While search results are being refreshed prevent interactions with the displayed results
  ITB-1164 | :ui:`UI` | In test session dashboard displays allow collapsing the active and completed sections
  ITB-1165 | :ui:`UI` | Display condensed test results for conformance statements using icons and counts

Release 1.15.1 - 24/01/2022
---------------------------

This is a minor maintenance release that corrects user-reported bugs, notably issues in the test engine due to test
session concurrency, and handling of XML data. In addition, minor problems linked to the Test Bed's user interface
were also addressed.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1085 | :tdl:`TESTS` | STEP_SUCCESS map may not be updated before consulted from next step
  ITB-1086 | :tdl:`TESTS` | Lookup of XML (object) variables from test session context may fail
  ITB-1087 | :ui:`UI` | Test execution diagram displays titles of messages sent to the same lifeline with inconsistent justification
  ITB-1090 | :ui:`UI` | Contact form submission during login process sends notification but returns to home page

**Tasks**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1101 | Automate GitHub release process

Release 1.15.0 - 29/11/2021
---------------------------

This release introduces multiple changes both to the Test Bed's user interface as well as the internal test engine. In the user
interface several screens have been streamlined to better present information and provide shortcuts to consult test sessions,
involved parties, conformance statements and detailed test log outputs. These updates are complemented by improvements allowing test 
information to be extracted more easily, and further filtering options for conformance statements and organisations. In addition,
important improvements have been made to test execution, enabling more efficient handling of multiple concurrent sessions and large 
test data. With respect to the GITB Test Description Language, several new features have been added to make it simpler to define 
frequently used steps and to further automated type conversions. In addition, new features such as test session logging and stylised
messaging presentations allow for further customisation and management of test session output.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1009 | :ui:`UI` | Date-based search filtering should ignore specific times
  ITB-1011 | :ui:`UI` | Unable to bulk import a test suite where the test suite name does not match its identifier
  ITB-1013 | :ui:`UI` | Changing an organisation, system or statement parameter type should remove existing values
  ITB-1026 | :ui:`UI` | Test step PDF report generation fails when context is not defined
  ITB-1032 | :ui:`UI` | Test diagram for TDL flow element may not correctly wrap child steps
  ITB-1033 | :ui:`UI` | Use of embedded processing handlers may fail test suite validation
  ITB-1043 | :tdl:`TESTS` | Output message for test sessions completed with warnings displays as an error
  ITB-1044 | :ui:`UI` | Test case imports using a variable defined during test execution fail validation
  ITB-1048 | :tdl:`TESTS` | Verify step fails for remote validators that don't define their expected inputs
  ITB-1051 | :tdl:`TESTS` | Call step input parameters should be passed by value, not by reference
  ITB-1052 | :tdl:`TESTS` | Log step fails when printing list or map variables
  ITB-1057 | :ui:`UI` | TDL test suite validation does not report the offending steps for invalid expressions
  ITB-1059 | :ui:`UI` | Past test session execution diagrams display actor names using their IDs

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-756 | :ui:`UI` | Support paging and filtering in the listing of a community's organisations
  ITB-760 | :ui:`UI` | Allow search filtering for organisations in community details page
  ITB-761 | :ui:`UI` | Provide shortcuts to detail pages from conformance dashboard entries
  ITB-776 | :ui:`UI` | Display test session log output in session dashboard and test history screens
  ITB-785 | :ui:`UI` | Allow filtering on the conformance dashboard based on the overall conformance result
  ITB-822 | :ui:`UI` | Preview a test case's steps from test suite management screens
  ITB-918 | :tdl:`TESTS` | Simplified usage of process and call steps by optional use of attributes versus elements
  ITB-948 | :ui:`UI` | Provide shortcuts to detail pages from session dashboard and test history entries
  ITB-951 | :ui:`UI` | Allow Test Bed, community and organisation administrators to terminate all active sessions
  ITB-979 | :tdl:`TESTS` | Allow return values from test services to be forDisplay, forContext or both (default)
  ITB-1004 | :ui:`UI` | Provide shortcut to view the latest session details for the test cases shown in the conformance dashboard
  ITB-1005 | :ui:`UI` | Provide shortcut to view the latest session details for the test cases shown in the conformance details page
  ITB-1006 | :ui:`UI` | Show the last conformance status update time per test case in the conformance dashboard
  ITB-1007 | :ui:`UI` | Support sorting results on the conformance dashboard
  ITB-1008 | :ui:`UI` | Allow filtering on the conformance dashboard based on the last updated time
  ITB-1029 | :tdl:`TESTS` | Allow a processing or call step to return its (single) output as a specific variable
  ITB-1034 | :ui:`UI` | Support "copy to clipboard" functionality for displayed texts in test session step reports
  ITB-1036 | :ui:`UI` | Support "copy to clipboard" functionality for test session information
  ITB-1045 | :tdl:`TESTS` | Allow a test case to define the level of its log output
  ITB-1047 | :tdl:`TESTS` | Support severity levels for the TDL log step
  ITB-1050 | :tdl:`TESTS` | Support different messaging arrow display styles in test execution diagram

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-450 | :ui:`UI` | Make binary configuration property handling more lightweight
  ITB-755 | :ui:`UI` | Support paging in the presentation of the conformance dashboard
  ITB-757 | :ui:`UI` | Simplify presentation of a community's details
  ITB-870 | :ui:`UI` | For non-SSO Test Bed instances replace user email with username
  ITB-907 | :ui:`UI` | Define all file uploads as multipart form submissions
  ITB-949 | :other:`OTHER` | Remove session log output from gitb-srv server log
  ITB-957 | :ui:`UI` | In conformance overview screens show the date linked to the last overall conformance update
  ITB-974 | :ui:`UI` | Reduce test suite validation warnings for missing domain parameters
  ITB-999 | :ui:`UI` | Allow "select all" and "clear all" options for multiple selection search filters (per filter)
  ITB-1003 | :ui:`UI` | Aggregate test cases in test suites for the conformance dashboard screen
  ITB-1012 | :ui:`UI` | Use temporary test session storage to record large binary and text data
  ITB-1021 | :ui:`UI` | Download data from test step reports only if requested
  ITB-1022 | :ui:`UI` | Remove context data from test step PDF reports
  ITB-1023 | :ui:`UI` | Make all button toolbars' alignment consistent
  ITB-1024 | :ui:`UI` | Use tabs to display all child lists in detail pages
  ITB-1027 | :ui:`UI` | Show table pagination controls only when multiple result pages exist
  ITB-1031 | :tdl:`TESTS` | Use test session ID for state management in messaging and processing services if no session ID is returned by the service
  ITB-1035 | :ui:`UI` | Test diagram grouping display should not extend to unrelated actors
  ITB-1037 | :ui:`UI` | In test execution diagram display test step description over actor lifeline
  ITB-1038 | :ui:`UI` | Cache landing page upon login
  ITB-1039 | :ui:`UI` | Mention relevant handler name in error messages produced by test suite validation
  ITB-1041 | :ui:`UI` | Allow advanced styling for rich content (documentation, landing pages, error templates, legal notices)
  ITB-1042 | :tdl:`TESTS` | Allow the verify step's severity level to be dynamically defined
  ITB-1049 | :tdl:`TESTS` | Allow conversion from all variable types to single element lists
  ITB-1058 | :tdl:`TESTS` | Allow embedded XSD and Schematron validators to work with string and binary schema and Schematron inputs
  ITB-1064 | :ui:`UI` | Queue updates in gitb-ui to test session status to favour scalability
  ITB-1066 | :tdl:`TESTS` | Do not produce warnings for missing variables referenced in a test case's output section
  ITB-1070 | :tdl:`TESTS` | Make the session identifier optional when processing services respond to beginTransaction calls
  ITB-1072 | :tdl:`TESTS` | Allow conversion from list and map variable types to strings

Release 1.14.1 - 06/09/2021
---------------------------

This is a minor maintenance release that corrects bugs, most notable of which is a problem that prevented the reuse of imported
template files in GITB TDL test cases. In addition, minor improvements are made to the display of validation step
reporting output.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-1000 | :ui:`UI` | Provide error feedback when attempting to open binary content in an editor
  ITB-1001 | :tdl:`TESTS` | Imported template files cannot be reused with different placeholder values

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-890 | :ui:`UI` | Allow a verify step's details to be minimised upon display
  ITB-891 | :ui:`UI` | Allow a test suite validation report's details, displayed upon upload, to be minimised
  ITB-1002 | :ui:`UI` | Use buttons instead of links when viewing a step report's items

Release 1.14.0 - 17/08/2021
---------------------------

This is a limited release that adds better support for handling user interactions as part of test sessions. Inputs can
now be provided using various controls, whereas data displayed to users can also be downloaded or displayed in
syntax-sensitive editors. In addition, this release resolves several user-reported bugs.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-986 | :ui:`UI` | Test case presentation may not present separator line between a flow step's threads
  ITB-987 | :ui:`UI` | Custom select-based organisation property does not trigger checks for dependencies when updated
  ITB-988 | :ui:`UI` | When EU Login is in use community administrators cannot add new organisation users
  ITB-989 | :tdl:`TESTS` | User interaction test session steps with dropdown inputs may not record selected values
  ITB-991 | :ui:`UI` | Organisation admins in communities with organisation update restrictions should always be able to manage their organisation's users
  ITB-992 | :ui:`UI` | Popup to remove a user's role (when EU Login is used) does not display tooltips
  ITB-993 | :ui:`UI` | Unable to access the profile options on very low resolutions

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-614 | :tdl:`TESTS` | Allow content editors presented to report on test execution to display content-specific highlighting

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-645 | :tdl:`TESTS` | Support different types of text input fields in user interaction steps
  ITB-985 | :tdl:`TESTS` | Interact step instructions that are too large should be opened in an editor or downloaded
  ITB-990 | :other:`OTHER` | Enforce TLS 1.2 when connecting to a remote SMTP service over SSL


Release 1.13.0 - 01/07/2021
---------------------------

This release brings important internal updates to the Test Bed by upgrading its components to use the latest middleware
and framework versions. In addition, it resolves several reported bugs and makes improvements both with respect to test
execution but also the operation of on-premise Test Bed instances. Regarding the GITB Test Description Language, this
release brings several new features and improvements that facilitate the development of multi-step test cases. Apart from
simplifying their execution, the test cases' presentation is also enriched, allowing test developers to define test step
grouping, display style and visibility, for a better structured and simplified presentation to users.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-482 | :ui:`UI` | Test case group tests executed but not displayed
  ITB-671 | :ui:`UI` | Styling of WYSIWYG editors does not match exactly the final display
  ITB-900 | :ui:`UI` | Tables displaying test sessions cannot be sorted
  ITB-901 | :ui:`UI` | Unable to download test session report for archived sessions
  ITB-902 | :ui:`UI` | Selected specifications not cleared when disabling search filters
  ITB-926 | :ui:`UI` | When editing a trigger the already selected organisation and system do not appear as such
  ITB-929 | :ui:`UI` | Importing a domain archive may not correctly match existing test suites
  ITB-938 | :tdl:`TESTS` | Test sessions fail to start when configuration is missing and actors have no configuration endpoints
  ITB-942 | :ui:`UI` | Test session history filters for organisation users may contain duplicate test suites
  ITB-943 | :ui:`UI` | Test history displays end time as default sort column for completed tests
  ITB-946 | :ui:`UI` | Downloading a conformance statement parameter file fails if attempted immediately after uploading it
  ITB-947 | :ui:`UI` | Conformance statement parameter editing allows empty values
  ITB-950 | :ui:`UI` | Flow step description and documentation not displayed
  ITB-952 | :ui:`UI` | Pending loop iteration steps do not appear as skipped when session stops
  ITB-956 | :tdl:`TESTS` | Test sessions may complete before notifying of final updates
  ITB-959 | :ui:`UI` | Data import does not correctly update matching domain parameters of type "secret"
  ITB-965 | :ui:`UI` | Prevent large custom titles for steps with sub-steps from breaking the display

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-704 | :tdl:`TESTS` | Extend all group step types to define if they are presented as collapsed by default
  ITB-805 | :ui:`UI` | Allow a Test Bed master encryption password to be replaced
  ITB-814 | :tdl:`TESTS` | Allow test steps to be set as hidden
  ITB-966 | :ui:`UI` | Allow test step groups to be collapsed and expanded by the user
  ITB-969 | :ui:`UI` | Include a "Find out more" link in the footer links

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-64 | :tdl:`TESTS` | Optionally make a processing service a visible test step
  ITB-155 | :other:`OTHER` | Concatenate and minify web assets
  ITB-300 | :other:`OTHER` | Minify web libraries
  ITB-619 | :other:`OTHER` | Update Angular dependency
  ITB-777 | :tdl:`TESTS` | Make test session log output more user friendly
  ITB-806 | :ui:`UI` | Add restrictions to passwords set using the password replace feature
  ITB-871 | :ui:`UI` | For non-SSO Test Bed instances enforce password restrictions
  ITB-898 | :other:`OTHER` | Migrate SSO security configuration to latest version
  ITB-899 | :ui:`UI` | Correct namespace mapping log message when triggering new test sessions
  ITB-906 | :ui:`UI` | Display loop step iterations' overall status in iteration selection dropdown of test diagram
  ITB-908 | :ui:`UI` | Add pending indicators for all button actions
  ITB-915 | :other:`OTHER` | Upgrade MySQL to version 8
  ITB-927 | :ui:`UI` | Allow community administrators to delete all organisation administrators
  ITB-960 | :ui:`UI` | Ensure custom parameter values (domain, organisation, system, statement) of type "secret" are encrypted at rest
  ITB-961 | :tdl:`TESTS` | Make test step descriptions optional
  ITB-964 | :ui:`UI` | For a non-SSO Test Bed instance request and represent the user email addresses as usernames
  ITB-967 | :ui:`UI` | Remove email formatting requirements from usernames for non-SSO Test Bed instances
  ITB-968 | :ui:`UI` | Make version number a link to the release notes

Release 1.12.0 - 03/03/2021
---------------------------

This releases focuses on the Test Bed's test execution engine and the GITB Test Description Language to facilitate the development
of complex test suites. The test case scriptlet concept has been significantly extended, allowing reusable blocks of test steps
to be shared across test cases but also across test suites. Moreover, reusing common resources is now also possible for any kind
of artefact, template or documentation content that may be imported by test cases, and is further facilitated by allowing
a test suite to not include test cases itself but rather act as a resource holder for other test suites. Aside from such
features focusing on sharing and reuse, this release also simplifies test suite validation and extends the test engine's
embedded processing capabilities with new options of working with timestamps, regular expressions and collection structures.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-172 | :tdl:`TESTS` | Scriptlet parameter errors lead to inconsistent results
  ITB-173 | :tdl:`TESTS` | Scriptlet requires parameters and variables
  ITB-174 | :tdl:`TESTS` | Scriptlet outputs must match variables
  ITB-788 | :ui:`UI` | Test suite upload with invalid ZIP archive may not report validation error
  ITB-820 | :ui:`UI` | Unexpected error when validating a test suite with multiple test suite XML files
  ITB-837 | :ui:`UI` | Unable to update a system's version number
  ITB-842 | :ui:`UI` | Iteration steps cannot be reviewed in completed session display
  ITB-843 | :ui:`UI` | Prevent user from attaching to contact form more files than allowed maximum
  ITB-861 | :ui:`UI` | Error when user exports own conformance certificate
  ITB-867 | :ui:`UI` | Call step passing wrong number of inputs to scriptlet is not blocked at test suite validation time
  ITB-872 | :ui:`UI` | Legal notice headings styled differently when viewed from the welcome page or internally
  ITB-873 | :tdl:`TESTS` | Standalone XML file defining scriptlet cannot be validated against the GITB TDL XSD
  ITB-875 | :ui:`UI` | Test diagram display may overlap output message for minimal test cases
  ITB-876 | :tdl:`TESTS` | Imports defined in scriptlets are not processed
  ITB-882 | :ui:`UI` | The display of nested loop steps is not correctly updated during test execution

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-780 | :ui:`UI` | Archive test sessions after a specific time period has elapsed
  ITB-782 | :tdl:`TESTS` | Allow scriptlets to be shared across multiple test cases
  ITB-818 | :tdl:`TESTS` | Allow resources to be shared between test suite archives
  ITB-840 | :tdl:`TESTS` | Support utility functions for maps and lists
  ITB-869 | :tdl:`TESTS` | Support the import of test suites without test cases (i.e. shared resource packages)
  ITB-894 | :tdl:`TESTS` | Allow test cases to make custom regular expression manipulations

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-175 | :tdl:`TESTS` | Allow scriptlets to not have outputs
  ITB-463 | :tdl:`TESTS` | Allow timestamp generation based on received dates and times
  ITB-668 | :tdl:`TESTS` | Updated embedded SchematronHandler to use latest validation libraries
  ITB-711 | :tdl:`TESTS` | Make the session identifier optional for GITB services
  ITB-781 | :other:`OTHER` | Upgrade core component dependencies
  ITB-800 | :tdl:`TESTS` | Return output from call step even upon failure
  ITB-807 | :ui:`UI` | Mark default users following new installation as requiring a password change
  ITB-823 | :ui:`UI` | When validating a test suite display information messages for the use of custom configuration properties (not warnings)
  ITB-825 | :ui:`UI` | Reduce the number of warnings from TDL test suite validations
  ITB-836 | :ui:`UI` | Allow editing a test suite's version number through the UI
  ITB-866 | :ui:`UI` | Disable browser autocomplete for input fields
  ITB-887 | :tdl:`TESTS` | Order uploaded test suite validation reports based on severity
  ITB-888 | :tdl:`TESTS` | Allow imports with the same name from different scriptlets
  ITB-889 | :ui:`UI` | Check for unique variable, parameter, import, input and output declarations in test cases
  ITB-893 | :tdl:`TESTS` | Allow the embedded SchematronValidator to be informed of the Schematron type to consider (pure or XSLT)

Release 1.11.1 - 11/12/2020
---------------------------

This is a minor maintenance release that corrects issues with test session error handling and the display of active test sessions, and adds support in the
GITB Test Description Language for managing undefined variables.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-829 | :ui:`UI` | A completed test session's diagram does not display steps as skipped when the session was stopped by the user
  ITB-830 | :ui:`UI` | Internal flow steps are not displayed as skipped when stopping a test session
  ITB-831 | :ui:`UI` | Boundary of flow step box in test execution diagram is too narrow
  ITB-832 | :tdl:`TESTS` | Test sessions using embedded messaging handlers leave open connection ports on unexpected connection closures
  ITB-833 | :ui:`UI` | Test session diagram may fail to display step updates
  ITB-834 | :tdl:`TESTS` | Pending messaging steps from a flow step's threads that are skipped result in a test session failure

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-819 | :tdl:`TESTS` | Expressions with references to non-existent variables should return an empty value rather than fail

Release 1.11.0 - 13/11/2020
---------------------------

This release brings a range of improvements for all Test Bed users. Community administrators benefit from further customisation options 
through additional trigger events to react to test results, as well as fine-grained permissions to prevent modifications once testing has
started. In addition, all users benefit from extended search capabilities on test sessions and conformance statements based on custom
properties, session IDs and specification actors; and a redesigned test session display that clarifies output and extends presented information.
These updates are further complemented by interface improvements such as progress indicators and status messages. Finally, this release also
extends the GITB Test Description Language with new features such as customised output messages, termination of tests on errors and persistent
validator outputs.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-508 | :ui:`UI` | Test sessions that are pending but not started are not automatically terminated after the idle period
  ITB-735 | :ui:`UI` | Community export with triggers and no linked data may cause imports to fail validation
  ITB-765 | :tdl:`TESTS` | Embedded XSDValidator fails to resolve XSDs with complex import hierarchies
  ITB-772 | :ui:`UI` | User interaction steps should allow scrolling for long non-breaking text
  ITB-783 | :tdl:`TESTS` | Call step initialises prematurely and fails for missing input variables

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-428 | :tdl:`TESTS` | Test session variable recording the current overall test result status
  ITB-693 | :ui:`UI` | Add loading indication on UI when waiting to load data
  ITB-698 | :tdl:`TESTS` | Extend GITB TDL to support a custom output message for the test session
  ITB-699 | :ui:`UI` | Display test session output message in test session history display
  ITB-700 | :ui:`UI` | Display test session output message in conformance statement detail page (per test case)
  ITB-701 | :ui:`UI` | Display test session output message in conformance dashboard (per test case)
  ITB-702 | :ui:`UI` | Display test session output message in conformance statement report (per test case)
  ITB-703 | :ui:`UI` | Display test session output message in conformance certificate (per test case)
  ITB-712 | :ui:`UI` | Add a user permission to prevent organisation data changes once tests are recorded
  ITB-713 | :ui:`UI` | Add a user permission to prevent system data changes once tests are recorded
  ITB-714 | :ui:`UI` | Add a user permission to prevent conformance statement changes once tests are recorded
  ITB-715 | :ui:`UI` | Create trigger event for a completed test session
  ITB-716 | :ui:`UI` | Create trigger event for a completed conformance statement
  ITB-736 | :ui:`UI` | Allow community administrators to selectively delete test sessions
  ITB-737 | :ui:`UI` | Create trigger event for a failed test session
  ITB-745 | :ui:`UI` | Allow search of test sessions by session ID for administrators and users
  ITB-746 | :ui:`UI` | Display test session ID to organisation users to facilitate support requests
  ITB-747 | :ui:`UI` | Add "no data" row to all tables when they have finished loading and have no data to show
  ITB-749 | :tdl:`TESTS` | Allow the output returned from a validation service to be recorded in the test session context
  ITB-751 | :ui:`UI` | Support search by specification actor in test session history screens
  ITB-767 | :tdl:`TESTS` | Configure a specific step failure to be fatal (i.e. immediately stop the test session)
  ITB-768 | :tdl:`TESTS` | Configure a test case to immediately fail upon any error
  ITB-769 | :tdl:`TESTS` | Configure a sequence of steps to immediately fail upon any error
  ITB-770 | :ui:`UI` | Display test session output message in test case report

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-534 | :ui:`UI` | Replace completed test session display with sequence diagram presentation
  ITB-604 | :ui:`UI` | Allow custom member properties to be optionally used for filtering
  ITB-738 | :ui:`UI` | Display test session ID to organisation users in test history screen
  ITB-739 | :ui:`UI` | Allow community administrators to download a test session report from the session dashboard
  ITB-740 | :ui:`UI` | Show pending status for actions triggered via table row controls (e.g. test session export)
  ITB-741 | :ui:`UI` | Improve display of test session status in session and conformance listings
  ITB-742 | :ui:`UI` | Display test sessions' test suite to organisation users in test history screen
  ITB-744 | :ui:`UI` | Display a conformance statement's overall status
  ITB-759 | :ui:`UI` | Allow search filters to be minimised while still being enabled
  ITB-766 | :ui:`UI` | Disable export buttons when no results are available
  ITB-771 | :ui:`UI` | Include color coding for status displays in PDF reports
  ITB-773 | :tdl:`TESTS` | Support custom title for server interaction popups during test case execution
  ITB-775 | :ui:`UI` | Always display test engine lifeline last in test session diagram
  ITB-778 | :ui:`UI` | When a test session terminates at an intermediate step display remaining steps as skipped

Release 1.10.2 - 12/10/2020
---------------------------

This is a minor maintenance release that extends the usage of domain parameters and corrects issues reported by users,
notably on the handling of custom properties in self-registration.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-694 | :ui:`UI` | Updating landing pages, error templates and legal notices should remain on the detail page
  ITB-732 | :ui:`UI` | Self-registration organisation properties may not get recorded in an SSO-enabled environment
  ITB-733 | :ui:`UI` | Required organisation properties in self-registration with unfulfilled prerequisites should not be required

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-696 | :ui:`UI` | Allow domain parameters to be provided as input to community triggers
  ITB-697 | :ui:`UI` | Support domain parameters that are not included in tests
  ITB-727 | :ui:`UI` | During self-registration and given a single and required configuration template, pre-select it as mandatory
  ITB-729 | :ui:`UI` | Display which organisations are templates in the community details screen
  ITB-734 | :ui:`UI` | Hide parameters as trigger data items if none are defined

Release 1.10.1 - 02/10/2020
---------------------------

This is a minor maintenance release to address issues reported by users, notably on the handling of documentation content
in test suites.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-721 | :tdl:`TESTS` | Large test step documentation content prevents test sessions from starting
  ITB-722 | :ui:`UI` | Documentation links ignore link target attribute

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-708 | :ui:`UI` | Hide empty "Test" entry from PDF validation report
  ITB-723 | :ui:`UI` | Ensure all documentation links open in a separate window
  ITB-724 | :ui:`UI` | Ensure the test case and test suite documentation preview matches exactly the actual display

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

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-519 | :tdl:`TESTS` | Multiple session invalid messages when session is invalidated
  ITB-599 | :tdl:`TESTS` | Sessions have a maximum global timeout of 1 hour regardless of activity
  ITB-655 | :tdl:`TESTS` | Interaction step requests fail if defined as empty (but not self-closed) elements
  ITB-656 | :ui:`UI` | Test case descriptions in test execution page spanning multiple lines display with extra spacing.
  ITB-677 | :ui:`UI` | Invalid test suite resource imports may succeed test suite validation
  ITB-681 | :ui:`UI` | Warning message when copying a system's test configuration is not correct

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-474 | :tdl:`TESTS` | Add logging element to GITB TDL
  ITB-591 | :ui:`UI` | Replicate a test suite to other specifications
  ITB-592 | :ui:`UI` | Allow online editing of a test suite's metadata
  ITB-593 | :ui:`UI` | Choose whether a test suite upload should replace existing domain information
  ITB-594 | :tdl:`TESTS` | Allow documentation content in TDL steps to be imported from another resource in the test suite archive
  ITB-606 | :other:`OTHER` | Add support for the Expect-CT header
  ITB-648 | :ui:`UI` | Support triggers for events within a community
  ITB-652 | :ui:`UI` | Allow a community administrator to customise organisation administrator privileges
  ITB-653 | :ui:`UI` | Allow organisation, system and conformance statement parameters to be set as hidden
  ITB-654 | :ui:`UI` | Allow download of conformance certificate by organisation managers
  ITB-672 | :ui:`UI` | Allow online editing of a test case's metadata
  ITB-675 | :ui:`UI` | Upload test suite to multiple specifications
  ITB-679 | :ui:`UI` | Support the definition of organisation and system properties to be passed to triggers
  ITB-685 | :ui:`UI` | Preview custom property completion forms
  ITB-686 | :tdl:`TESTS` | Support variable references when importing artifacts in test cases
  ITB-687 | :tdl:`TESTS` | Support custom display titles for TDL steps
  ITB-691 | :ui:`UI` | Support dependencies between conformance statements parameters
  ITB-692 | :ui:`UI` | Support predefined values for conformance statement properties

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-400 | :tdl:`TESTS` | Use an uploaded test suite's ID instead of its name to match existing test suites
  ITB-451 | :ui:`UI` | Allow administrators to specify ordering for custom community properties
  ITB-596 | :ui:`UI` | Allow a community administrator to set custom organisation properties used in self-registration as being mandatory and blocking
  ITB-598 | :ui:`UI` | Allow a community administrator to require template selection during self-registration as a mandatory
  ITB-601 | :ui:`UI` | Support predefined values for custom member properties
  ITB-602 | :ui:`UI` | Support dependencies between custom member properties
  ITB-644 | :ui:`UI` | Remove fields from the display of the test suite upload confirmation popup when empty
  ITB-647 | :tdl:`TESTS` | Make parameter definition through getModuleDefinition optional
  ITB-657 | :other:`OTHER` | Upgrade dependencies
  ITB-660 | :ui:`UI` | Make default input sanitisation case insensitive
  ITB-663 | :ui:`UI` | Allow customised configuration for the internal GITB DB user
  ITB-676 | :ui:`UI` | Restrict data archive import file selection to ZIP archives
  ITB-678 | :other:`OTHER` | Complete security configuration of session cookies
  ITB-689 | :ui:`UI` | Hide endpoint display in conformance statement details if there is only one endpoint
  ITB-690 | :ui:`UI` | Hide endpoint description if empty

Release 1.9.1 - 18/05/2020
--------------------------

This is a patch release to address issues linked to errors in data imports and failure handling in interactive test sessions.
In terms of new features this release extends the customisation options linked to community self-registration by extending the
help text linked to community tokens.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-608 | :tdl:`TESTS` | Interactive test session may on unexpected error display message for continuing execution
  ITB-610 | :ui:`UI` | Unable to import community when no domain data are included in the data archive
  ITB-612 | :tdl:`TESTS` | Empty file input through user interaction during a test session stops the test session

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-595 | :other:`OTHER` | Automatic migration of older version data archives to target Test Bed version
  ITB-609 | :ui:`UI` | Allow customised message for self-registration help text

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-600 | :ui:`UI` | Hide the description of endpoint parameter inputs when there is no description
  ITB-603 | :ui:`UI` | Add progress indicator for CSV export buttons
  ITB-611 | :ui:`UI` | Remove option to retry after unexpected failure during test execution

Release 1.9.0 - 30/04/2020
--------------------------

This release introduces numerous new features and improvements, the most important ones being the support for parallel and 
background test session execution, and the ability to transfer via export a community's complete configuration across different
Test Bed instances. Apart from these key features, numerous improvements are made also to the self-registration process enabling 
configuration options such as user restrictions and notifications, and the use of test cases that now support extended documentation
and improved result display. FInally, a wide range of enhancements have been made to the Test Bed's user centricity, including 
ubiquitous help tooltips, visual feedback for all actions, a context-specific user guide and the possibility to fully manage a user's 
own information.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-457 | :ui:`UI` | Invalid map variable references not detected by TDL validator
  ITB-475 | :tdl:`TESTS` | Unable to pass a BASE64 encoded string to a binary input variable
  ITB-483 | :ui:`UI` | TDL If steps with no visible internal steps appear in test session history display
  ITB-527 | :ui:`UI` | Previously executed test diagrams don't display correctly with nested decision blocks
  ITB-531 | :ui:`UI` | Test step report items appear clickable even when it is not possible to view them in-context
  ITB-532 | :ui:`UI` | Active test session display in session dashboard has mis-aligned buttons
  ITB-538 | :ui:`UI` | Changing a community's domain should invalidate all test sessions made under the previous domain
  ITB-542 | :ui:`UI` | Problem in confirmation message to delete a system
  ITB-543 | :ui:`UI` | Delete button appears for unset conformance statement parameter
  ITB-544 | :ui:`UI` | Feedback submission does not include organisation and community of logged in user
  ITB-548 | :ui:`UI` | Custom labels fail to display during self-registration when only one public community is defined
  ITB-554 | :ui:`UI` | Test Bed administrator unable to provide custom system properties when managing tests for an organisation and creating a new system
  ITB-558 | :ui:`UI` | Community administrators should not be allowed to delete their domain
  ITB-561 | :ui:`UI` | Binary and secret domain parameters should have a disabled save button when name is missing

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-189 | :tdl:`TESTS` | Allow test suite test cases to be executed in parallel
  ITB-288 | :ui:`UI` | Allow an administrator to export and then import a community or domain setup
  ITB-481 | :tdl:`TESTS` | Allow test sessions to continue running in the background
  ITB-486 | :ui:`UI` | Allow custom organisation properties to display in self-registration page
  ITB-501 | :ui:`UI` | Email community support mailbox upon self-registration of new organisation
  ITB-515 | :ui:`UI` | Allow community administrators to restrict self-registration based on the user
  ITB-528 | :ui:`UI` | Allow specifications to be defined as hidden
  ITB-529 | :tdl:`TESTS` | Support extended documentation for test cases and test suites
  ITB-533 | :ui:`UI` | Provide button to refresh the display of active and completed test sessions
  ITB-537 | :ui:`UI` | Provide visual feedback after every successful action
  ITB-539 | :tdl:`TESTS` | Headless (background) test session execution
  ITB-541 | :ui:`UI` | Allow organisation users to monitor and manage their active sessions
  ITB-549 | :ui:`UI` | Allow user to fully delete a role assignment
  ITB-550 | :ui:`UI` | Allow user to fully remove all role assignments (clear all personal data)
  ITB-555 | :tdl:`TESTS` | New processing handler to handle base64 encoding and decoding
  ITB-562 | :other:`OTHER` | Support sandbox instance creation by automating the import of data from a provided data archive

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-223 | :ui:`UI` | Set a community's domain upon creation
  ITB-388 | :ui:`UI` | Show report item counts resulting from a verify step (validation)
  ITB-389 | :ui:`UI` | Have the user guide link in the UI's footer navigate you to the corresponding section in the user guide
  ITB-402 | :tdl:`TESTS` | Allow variable expressions to be defined in placeholders used in test case template files
  ITB-410 | :tdl:`TESTS` | Display location description in verify step's report items if not possible to show in editor
  ITB-431 | :ui:`UI` | Make skipped test steps more obvious
  ITB-456 | :tdl:`TESTS` | Allow assign steps to create variables
  ITB-466 | :ui:`UI` | Automatically focus first element in displayed forms
  ITB-467 | :ui:`UI` | Allow all forms to be submitted with enter
  ITB-471 | :ui:`UI` | Skip the single domain selection for community administrators when managing the domain
  ITB-472 | :ui:`UI` | Add help tooltips to all form fields
  ITB-477 | :ui:`UI` | Improve display of loop iteration in test session output
  ITB-487 | :other:`OTHER` | Apply HTTP secure headers
  ITB-488 | :other:`OTHER` | Enable forward secrecy for Test Bed reverse proxy
  ITB-490 | :ui:`UI` | When starting a test session and configuration is missing display only the missing properties
  ITB-492 | :ui:`UI` | Restrict the values that can be provided in user inputs
  ITB-493 | :ui:`UI` | Clarify the use of the create account link from the welcome page
  ITB-526 | :other:`OTHER` | Allow Test Bed instances to use SSL and STARTTLS connections for SMTP server access
  ITB-536 | :ui:`UI` | Confirm test suite replacement that drops test history
  ITB-546 | :ui:`UI` | Animate panels that expand and collapse to better highlight UI changes
  ITB-547 | :ui:`UI` | Improve display of toggle button
  ITB-551 | :ui:`UI` | Allow a community administrator to remove other community administrators from her community
  ITB-552 | :ui:`UI` | Better highlighting for information items in test step reports
  ITB-553 | :other:`OTHER` | Disable support for TLS 1.0 and TLS 1.1 in Test Bed reverse proxy
  ITB-557 | :ui:`UI` | Show community description for communities available for self-registration
  ITB-559 | :ui:`UI` | Hide domain management link for admins of communities with no domain
  ITB-560 | :ui:`UI` | Hide unused information on specifications

Release 1.8.0 - 20/01/2020
--------------------------

This release focuses on providing additional community customisation possibilities through features such as the definition of 
specific labels for Test Bed concepts and the optional display of actors. GITB TDL is also enhanced with support for warning-level 
validation steps and the possibility to display for test steps additional documentation or instructions as rich text.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-512 | :ui:`UI` | Deleting conformance statement text parameter values does not immediately refresh the display
  ITB-513 | :ui:`UI` | Test suite upload can fail if endpoint names vary in case
  ITB-516 | :ui:`UI` | Unable to delete domain that contains specification with actors
  ITB-518 | :tdl:`TESTS` | Binary actor parameters interpreted as strings in test sessions
  ITB-520 | :ui:`UI` | Test execution diagrams with multiple actors can break diagram display

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-432 | :tdl:`TESTS` | Support warning-level failures for verify steps
  ITB-433 | :tdl:`TESTS` | Support more extensive descriptions as metadata for test steps
  ITB-434 | :tdl:`TESTS` | Display additional documentation for test steps as instructions to users
  ITB-489 | :ui:`UI` | Allow a community administrator to customise the labels used for Test Bed concepts
  ITB-511 | :ui:`UI` | Allow actors to be set as hidden (deprecated)

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-461 | :ui:`UI` | Remove noise from gitb-ui logs

Release 1.7.2 - 11/12/2019
--------------------------

This is a patch release to address issues with the core test engine and specifically on type conversions between
test session variables. This patch also extended the templating possibilities in test cases by allowing any expressions
to be treated as templates.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-422 | :tdl:`TESTS` | Conversions between GITB types using pure variable expressions should also work through the source attribute
  ITB-464 | :tdl:`TESTS` | Cannot convert string to nodelist in assign step
  ITB-473 | :tdl:`TESTS` | TDL Inputs with both source and value set ignore the value
  ITB-476 | :tdl:`TESTS` | A string variable used as a source of an XPath expression always returns itself
  ITB-503 | :ui:`UI` | If a Test Bed instance has a demo account configured prevent this from being linked to a user
  ITB-509 | :tdl:`TESTS` | Cannot directly assign non-binary variables to binary ones

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-505 | :tdl:`TESTS` | Allow any variable to be used as a template (not only imports)

Release 1.7.1 - 21/11/2019
--------------------------

This is a patch release to address issues linked primarily with the handling of test session variables and improved error
reporting during test sessions.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-424 | :tdl:`TESTS` | All list types returned by external services are considered to be list[string]
  ITB-458 | :tdl:`TESTS` | Processing steps with no transaction cannot use variable references to determine handler
  ITB-459 | :tdl:`TESTS` | Inputs defined by remote services with type list cannot be provided
  ITB-460 | :other:`OTHER` | Dockerised gitb-ui may fail to startup due to running process being detected
  ITB-465 | :tdl:`TESTS` | Error if encoding not provided for imports that are not binary
  ITB-495 | :tdl:`TESTS` | System and organisation names not added to test session if no custom properties are defined
  ITB-496 | :tdl:`TESTS` | Invalid input names for messaging and processing handlers may not report problem details
  ITB-497 | :tdl:`TESTS` | Remote messaging services not returning a session ID result in blank error

Release 1.7.0 - 07/10/2019
--------------------------

This release allows integration with EU Login, the European Commission's central authentication service. In addition, the
release introduces several important new features such as the ability to open communities for user self-registration 
and the introduction of custom properties for organisations and systems. Such custom properties enable enhanced 
data collection options and the scripting of automation processes, introducing at the same time new means of providing 
input values and configuration to test sessions.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-421 | :tdl:`TESTS` | Resolving the index of a GITB list when in double format fails
  ITB-423 | :ui:`UI` | Dropdown menus not visible for loop and flow test step reports
  ITB-427 | :ui:`UI` | Progress spinners can continue after test session is stopped
  ITB-430 | :ui:`UI` | Test step progress indicators can remain in processing state
  ITB-443 | :ui:`UI` | Can't delete a community that contains organisations with executed test sessions
  ITB-444 | :ui:`UI` | Can't delete obsolete test results that are linked to conformance results
  ITB-448 | :ui:`UI` | Test case definition doesn't reload if user refreshes browser
  ITB-449 | :ui:`UI` | Specification details not included in conformance dashboard CSV export

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-73 | :ui:`UI` | ECAS integration
  ITB-196 | :ui:`UI` | One account - multiple communities
  ITB-394 | :ui:`UI` | Configuration parameters that are not editable by organisation users or that are not included in test sessions
  ITB-395 | :ui:`UI` | Self-registration for specific communities
  ITB-396 | :ui:`UI` | Configurable organisation properties
  ITB-397 | :ui:`UI` | Optionally include organisation properties in organisation-related exports
  ITB-418 | :ui:`UI` | Allow organisation admins to remove users
  ITB-420 | :ui:`UI` | Allow organisation administrators to delete their organisation's members
  ITB-435 | :ui:`UI` | Define an organisation as a template for self-registered organisations
  ITB-440 | :ui:`UI` | Configurable system properties
  ITB-441 | :tdl:`TESTS` | Make available custom and standard organisation properties in test sessions
  ITB-442 | :tdl:`TESTS` | Make available custom and standard system properties in test sessions

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-100 | :ui:`UI` | Allow organisation to request addition to a community
  ITB-398 | :ui:`UI` | Optionally copy configuration parameters when copying the testing setup to another system
  ITB-414 | :ui:`UI` | Use Commission favicon
  ITB-419 | :ui:`UI` | Align the look and feel for the settings' management
  ITB-437 | :ui:`UI` | Support endpoint parameters with secret values (e.g. passwords)
  ITB-438 | :ui:`UI` | Make more intuitive the display of endpoint parameters for administrators
  ITB-439 | :ui:`UI` | Support files as domain configuration parameters
  ITB-445 | :ui:`UI` | Increase size limit for uploaded files
  ITB-446 | :ui:`UI` | Allow community and Test Bed admins to edit their own organisation's information
  ITB-447 | :ui:`UI` | When test case configuration is missing allow user to directly navigate to provide it

Release 1.6.1 - 14/06/2019
--------------------------

This is a patch release to address bugs that were blocking for new Test Bed users, specifically linked to the processing
of template files in test cases. In addition, given the opportunity of the patch, additional minor bugs are corrected
and important improvements are introduced to facilitate reporting and increase the built-in possibilities to generate
timestamps within test cases.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-401 | :ui:`UI` | Invalid test case imports may pass test suite validation
  ITB-407 | :tdl:`TESTS` | Unable to reference map or list variables from within template
  ITB-409 | :ui:`UI` | Clearing search filters does not clear the "result" criterion

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-390 | :ui:`UI` | Remember search filters when returning from a detail page to a search page
  ITB-404 | :tdl:`TESTS` | Support diffs for TokenGenerator timestamps
  ITB-405 | :tdl:`TESTS` | Support any timezone for the TokenGenerator's timestamps
  ITB-406 | :tdl:`TESTS` | Allow the epoch milliseconds to be returned from the TokenGenerator

Release 1.6.0 - 29/05/2019
--------------------------

From an end-user perspective the main highlights of this release are the validation of uploaded test suites and various improvements to
streamline the user interface (e.g. simplified conformance statement creation). Internally this release brings critical
updates to library versions, the execution environment and core security features. In addition, the GITB Test Description Language (TDL),
and its support through the Test Bed, has been extended to simplify test case definition and bring new features such as new built-in
processing and validation capabilities as well as extended user input options.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-170 | :tdl:`TESTS` | Variables allow defining superfluous "source" and "lang" attributes
  ITB-217 | :ui:`UI` | Systems link not presented to organisation basic users
  ITB-282 | :tdl:`TESTS` | New test cases for an existing test suite may not appear correctly ordered
  ITB-287 | :tdl:`TESTS` | Embedded XML validators (XSD, Schematron) may not show errors on the correct content line
  ITB-290 | :ui:`UI` | Sorting by actor on session dashboard not working
  ITB-291 | :ui:`UI` | Test cases included in conformance statement where actor is not the SUT
  ITB-297 | :ui:`UI` | Failure to match existing session token results in empty screen
  ITB-304 | :ui:`UI` | Ensure CSV exports can be made regardless of the exported text
  ITB-307 | :ui:`UI` | Table editing control not displayed on WYSIWYG editors
  ITB-308 | :tdl:`TESTS` | Correct regular expressions for variable references
  ITB-310 | :tdl:`TESTS` | Actor name should be optional to allow external references
  ITB-315 | :tdl:`TESTS` | Correct configuration to allow test cases based on UDP
  ITB-322 | :tdl:`TESTS` | Automatic test suite execution continues to ping Test Bed after completion
  ITB-324 | :ui:`UI` | In certain cases the previous test session view displays unexecuted steps as overlapping
  ITB-337 | :ui:`UI` | Test step report requests can get broken by reverse proxies
  ITB-338 | :tdl:`TESTS` | If step without else with internal step reports causes overall report generation to fail
  ITB-372 | :ui:`UI` | User logout may leave session state still on the server-side
  ITB-374 | :ui:`UI` | Updating an already set keystore for the conformance certificate does not allow directly changing its passwords
  ITB-377 | :tdl:`TESTS` | Prevent errors during test session initiation from being re-triggered continuously
  ITB-378 | :tdl:`TESTS` | Unable to assign a list or map variable to another list or map
  ITB-380 | :tdl:`TESTS` | Allow signed numbers and floats for expressions defined as "NumberOrVariable"
  ITB-381 | :tdl:`TESTS` | Allow spaces for expressions defined as "StringOrVariable"
  ITB-384 | :tdl:`TESTS` | Processing step errors may not get logged

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-311 | :tdl:`TESTS` | Embedded processing handler to create random text tokens
  ITB-382 | :tdl:`TESTS` | New embedded validator for matching XML content based on XMLUnit

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-51 | :ui:`UI` | Validate uploaded test suite
  ITB-241 | :ui:`UI` | Ensure content is filtered based on a whitelist for HTML rendering
  ITB-269 | :ui:`UI` | Automate creation of conformance statement
  ITB-279 | :tdl:`TESTS` | Support type conversions from list[TYPE] to and from list
  ITB-280 | :tdl:`TESTS` | Record test step overall result in context variable
  ITB-295 | :tdl:`TESTS` | Hide implementation details from test session log output
  ITB-298 | :ui:`UI` | Don't use test suite name for folder naming 
  ITB-299 | :ui:`UI` | Correct theme issues with header and footer
  ITB-309 | :tdl:`TESTS` | Relax metadata definition constraints
  ITB-316 | :tdl:`TESTS` | Relax non-important XSD constraints
  ITB-320 | :tdl:`TESTS` | Allow user interaction requests to display a drop down list based on provided values.
  ITB-321 | :other:`OTHER` | Upgrade to OpenJDK 11 as base platform
  ITB-345 | :other:`OTHER` | Improve security posture of core components
  ITB-376 | :tdl:`TESTS` | Consider variables defined as generic list to be list[string] by default
  ITB-379 | :ui:`UI` | Allow user to clear form when processing a user interaction step
  ITB-383 | :tdl:`TESTS` | Make processing transactions optional

Release 1.5.0 - 06/11/2018
--------------------------

This release focuses on improving error handling and adding support for a customisable conformance certificate per user community.
Numerous additional improvements are also made to facilitate the management of test suites and conformance testing configuration, as
well as to improve support for the GITB Test Description Language (TDL).

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-171 | :tdl:`TESTS` | Referring to missing map key in interaction step swallows error
  ITB-181 | :ui:`UI` | Stop step results in the interface not being signalled to show the test as finished
  ITB-216 | :ui:`UI` | Endpoint description not displayed in first test execution wizard step
  ITB-265 | :tdl:`TESTS` | Messaging service call-backs produce errors when client not created using WSDL
  ITB-270 | :ui:`UI` | Creating a duplicate conformance statement is possible and leads to an internal error
  ITB-272 | :ui:`UI` | Opening the contact support form clears other rich text editors
  ITB-273 | :ui:`UI` | Forms to create elements do not take advantage of full screen width

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-79 | :ui:`UI` | Create conformance certificate
  ITB-106 | :ui:`UI` | Error message template per community
  ITB-225 | :ui:`UI` | Allow community admin to copy an organisation's test setup to another
  ITB-226 | :ui:`UI` | Allow organisation admins to copy the conformance test setup between systems
  ITB-247 | :tdl:`TESTS` | Create an embedded regular expression validator
  ITB-260 | :ui:`UI` | Allow administrators to purge obsolete test results

**Tasks**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-275 | :other:`OTHER` | Remove obsolete resources

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-78 | :ui:`UI` | Download test suites
  ITB-92 | :tdl:`TESTS` | Allow If steps without Else
  ITB-97 | :tdl:`TESTS` | Display errors produced through test execution
  ITB-110 | :ui:`UI` | Improve overall handling of errors
  ITB-115 | :ui:`UI` | Improve display of endpoint parameters for organisation users
  ITB-116 | :ui:`UI` | Allow administrator to set (and update) a user's temporary password
  ITB-118 | :ui:`UI` | Consider admin-set passwords as one-time passwords
  ITB-183 | :tdl:`TESTS` | Allow an exit step to signal a success or failure
  ITB-185 | :tdl:`TESTS` | Allow instruct element to show a file download when passed an object or binary type
  ITB-211 | :ui:`UI` | Improve display of test cases within a test suite in the conformance statement details page
  ITB-212 | :ui:`UI` | Consider renaming "Conformance Statement Report" to "Conformance Statement Test Report"
  ITB-213 | :ui:`UI` | Support attachments in contact form
  ITB-218 | :ui:`UI` | Sort display of domains, specifications and actors
  ITB-220 | :ui:`UI` | Use English (UK) spelling consistently
  ITB-227 | :ui:`UI` | Improve display of test case results in conformance statement report
  ITB-246 | :ui:`UI` | Replace default report font to support Unicode characters
  ITB-248 | :tdl:`TESTS` | Switch XPathValidator to use the latest version of XPath internally
  ITB-249 | :tdl:`TESTS` | Allow XPathValidator to handle any type of input
  ITB-250 | :tdl:`TESTS` | Allow binary variable use in expressions
  ITB-257 | :tdl:`TESTS` | Allow StringValidator to support any input type
  ITB-259 | :ui:`UI` | Remove duplicate login form and home button for unauthenticated users
  ITB-262 | :tdl:`TESTS` | Allow default actor for interaction
  ITB-263 | :tdl:`TESTS` | Set defaults for content type and type of interaction elements
  ITB-264 | :ui:`UI` | Make it possible to download binary content from a test step's report
  ITB-266 | :tdl:`TESTS` | Consider the test suite ID as the default root path for test case imports
  ITB-267 | :tdl:`TESTS` | Allow the display order of test case actors to be configured in the test execution diagram
  ITB-268 | :ui:`UI` | Set an actor as a specification's default
  ITB-271 | :ui:`UI` | Improve visual consistency of buttons
  ITB-274 | :ui:`UI` | Add filtering by actor on the conformance dashboard

Release 1.4.1 - 28/09/2018
--------------------------

This is a bug fix release to address critical production bugs. Minor additional internal features are also added.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-243 | :tdl:`TESTS` | Support the use of lists in validation services
  ITB-252 | :tdl:`TESTS` | Messaging sessions close unexpectedly
  ITB-253 | :ui:`UI` | Incoming blocked connections are not cleaned
  ITB-254 | :tdl:`TESTS` | A mis-configured system address results in a server error
  ITB-255 | :tdl:`TESTS` | Error during test execution repeat indefinitely

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-244 | :tdl:`TESTS` | Adapt HttpMessaging messaging handler to switch to HTTPS based on configuration
  ITB-245 | :tdl:`TESTS` | Support sending and receiving multipart form data in HttpMessaging

Release 1.4.0 - 03/07/2018
--------------------------

This is a minor release to correct bugs and also to improve the Test Bed's GDPR compliance.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-219 | :ui:`UI` | Cannot delete domain with domain parameters
  ITB-222 | :ui:`UI` | Cannot delete community for which tests have been executed
  ITB-224 | :ui:`UI` | Hide the special purpose Admin organisation from the Test Bed Default community
  ITB-231 | :ui:`UI` | Legal Notice link not working without user login
  ITB-232 | :ui:`UI` | Legal notice top-level headings appear grey
  ITB-235 | :ui:`UI` | Icons may not appear when using IE 11
  ITB-242 | :ui:`UI` | Active footer links are not visible

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-49 | :ui:`UI` | Link to online documentation
  ITB-221 | :ui:`UI` | Link to role-specific documentation

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-236 | :ui:`UI` | Add cookie-related statement on login screen for GDPR compliance
  ITB-237 | :ui:`UI` | Add consent message on community admin creation screen
  ITB-238 | :ui:`UI` | Add consent message on Test Bed admin creation screen
  ITB-239 | :ui:`UI` | Add consent message on organisation user creation screens
  ITB-240 | :ui:`UI` | Add data use notification on contact form for GDPR compliance

Release 1.3.0 - 25/05/2018
--------------------------

This release focuses on improving support for the GITB Test Description Language (TDL), improving the test execution process including automatic
test suite execution, and providing additional tools for administrators and users to monitor their conformance testing progress.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-57 | :tdl:`TESTS` | User interaction to inform does nothing
  ITB-93 | :ui:`UI` | Test execution in UI can continue displaying turning spanner for completed step
  ITB-156 | :ui:`UI` | Organisation basic user can delete conformance statement
  ITB-161 | :ui:`UI` | A missing type value for a test suite or test case causes an error on test suite upload
  ITB-164 | :ui:`UI` | Uploaded test cases are mapped to actors based on their name, not ID
  ITB-169 | :tdl:`TESTS` | Unable to use preliminary steps in test case
  ITB-176 | :ui:`UI` | User interface updates can get mixed in test session execution
  ITB-182 | :tdl:`TESTS` | Back button displayed multiple times when the test result includes conditional branches
  ITB-184 | :ui:`UI` | Test session report does not include child steps for conditional branches
  ITB-188 | :ui:`UI` | Flow step results are always reported inversely

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-72 | :ui:`UI` | Conformance overview for administrators
  ITB-199 | :ui:`UI` | Implement conformance statement report
  ITB-207 | :ui:`UI` | Add feedback form
  ITB-208 | :ui:`UI` | Add survey link

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-60 | :tdl:`TESTS` | Run all test cases in test suite
  ITB-87 | :tdl:`TESTS` | Display different actor name in test cases (do not use actor ID) 
  ITB-102 | :tdl:`TESTS` | Support authentication for remote service calls
  ITB-105 | :tdl:`TESTS` | Allow handler URLs to be part of the configuration
  ITB-119 | :tdl:`TESTS` | Introduce timeout for appropriate TDL elements
  ITB-137 | :tdl:`TESTS` | Allow domain-level configuration to be used in TDL expressions
  ITB-157 | :ui:`UI` | Renamed "UNDEFINED" status to "NOT RAN"
  ITB-158 | :ui:`UI` | Hide test execution wizard steps when not applicable
  ITB-159 | :ui:`UI` | Show name and description of test case and test suite when running a test
  ITB-160 | :ui:`UI` | Add Back button on test execution page
  ITB-162 | :tdl:`TESTS` | Make actor endpoints optional
  ITB-163 | :ui:`UI` | Display actor name, not ID when executing test
  ITB-178 | :tdl:`TESTS` | Use variable references as foreach bounds
  ITB-179 | :tdl:`TESTS` | Allow user instructions without content
  ITB-180 | :tdl:`TESTS` | Consider default type for user instructions
  ITB-191 | :other:`OTHER` | Increase gateway timeout
  ITB-192 | :tdl:`TESTS` | Set STRING as default content type for interaction requests
  ITB-200 | :ui:`UI` | Improve visual consistency of UI elements
  ITB-201 | :ui:`UI` | Add cancel option for editing of domain elements
  ITB-203 | :tdl:`TESTS` | Allow variable references for configuration values
  ITB-204 | :tdl:`TESTS` | Allow embedded SoapMessaging handler to run over HTTPS
  ITB-209 | :ui:`UI` | Allow community administrator to update community details

Release 1.2.0 - 18/03/2018
--------------------------

This release focuses on correcting issues impacting the platform's robustness and introducing improvements both for administrators, 
to better manage their configured domains and specifications, as well as users to improve their test reporting capabilities. 
The key improvement area targeted is the management of new test suite versions.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-55 | :ui:`UI` | Count of passed test cases displays wrong
  ITB-68 | :ui:`UI` | Hide buttons for actions that are not permitted
  ITB-77 | :ui:`UI` | Update cache upon deletion of test suites
  ITB-101 | :ui:`UI` | CSV export does not work in IE
  ITB-103 | :ui:`UI` | Internet Explorer caches server JSON responses
  ITB-104 | :ui:`UI` | Perform server-side updates synchronously
  ITB-109 | :ui:`UI` | Test suite uniqueness
  ITB-117 | :ui:`UI` | Allow user to update his password
  ITB-144 | :ui:`UI` | Correct manual management of actors, endpoints and parameters
  ITB-146 | :ui:`UI` | Correct display of conformance testing status for a system's tests
  ITB-147 | :ui:`UI` | Domain name and description not displayed on conformance statement
  ITB-154 | :ui:`UI` | Correct transaction management

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-47 | :ui:`UI` | Delete system
  ITB-94 | :ui:`UI` | Display Test Bed version
  ITB-136 | :ui:`UI` | Create PDF report from validator report

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-80 | :ui:`UI` | Remove "Test Suites" menu entry
  ITB-61 | :ui:`UI` | Improve export of test sessions
  ITB-67 | :ui:`UI` | Confirmation before deleting conformance statement
  ITB-74 | :ui:`UI` | Better visual presentation for multiple systems
  ITB-75 | :ui:`UI` | Improve support for test suite versions
  ITB-76 | :ui:`UI` | Record test case and test suite descriptions
  ITB-107 | :ui:`UI` | Switch connection to HTTPS
  ITB-108 | :ui:`UI` | Delete internal actor details
  ITB-111 | :ui:`UI` | Actors must be unique within each specification
  ITB-112 | :ui:`UI` | Prevent organisation basic user from deleting conformance statement
  ITB-113 | :ui:`UI` | Prevent organisation basic user from changing endpoint values
  ITB-139 | :ui:`UI` | Replace test case report with PDF version
  ITB-140 | :ui:`UI` | Convert test session overview report to PDF
  ITB-141 | :other:`OTHER` | Automate database migrations
  ITB-142 | :ui:`UI` | Improve test session repository handling
  ITB-145 | :ui:`UI` | Hide options from conformance statements
  ITB-148 | :ui:`UI` | Display specification on conformance statement detail page
  ITB-149 | :ui:`UI` | Request confirmation before deleting conformance statement
  ITB-151 | :ui:`UI` | Maximise use of space for system screens
  ITB-153 | :ui:`UI` | Prevent organisation basic user from creating conformance statements

Release 1.1.0 - 20/09/2017
--------------------------

Release that most importantly introduces user communities to the Test Bed. This includes also additional improvements to facilitate management
of test configuration and improved reporting capabilities.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-65 | :ui:`UI` | Test session history for an organisational user is incomplete
  ITB-86 | :ui:`UI` | No longer possible to create a domain
  ITB-89 | :tdl:`TESTS` | XPath 2.0 support breaks TDL variable lookup
  ITB-90 | :tdl:`TESTS` | Problem interacting with processing services

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-66 | :ui:`UI` | Add filtering of test sessions for organisation user
  ITB-71 | :ui:`UI` | Allow admin to manage an organisation's test setup

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-53 | :ui:`UI` | Add user communities to user management
  ITB-56 | :ui:`UI` | Group test cases by test suite
  ITB-58 | :ui:`UI` | Add filtering of test sessions for administrator
  ITB-62 | :ui:`UI` | Allow the export of results in CSV
  ITB-69 | :ui:`UI` | Paging in the "Performed Tests" screen for an organisation
  ITB-70 | :ui:`UI` | Add "Systems" link
  ITB-88 | :tdl:`TESTS` | Upgrade embedded XPath validator to XPath 2.0

Release 1.0.3 - 14/08/2017
--------------------------

Minor release to address mainly Internet Explorer support issues and correct important bugs.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-52 | :ui:`UI` | Errors on UI when using Internet Explorer 11
  ITB-82 | :ui:`UI` | Streamlined test execution wizard skips steps when it should not

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-81 | :tdl:`TESTS` | Decouple payload information from PEPPOL AS2 validators
  ITB-83 | :tdl:`TESTS` | Support XPath 2.0 in expressions
  ITB-84 | :ui:`UI` | Support any casing for context in popup to display errors

Release 1.0.2 - 19/05/2017
--------------------------

Release to correct critical problems when running test cases, simplify use of the Test Bed for non-administrator users and provide a dashboard for
Test Bed administrators to monitor current and past sessions.

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-30 | :tdl:`TESTS` | Allow ID to be more than one character long
  ITB-32 | :tdl:`TESTS` | Type metadata is not applicable to test modules
  ITB-34 | :tdl:`TESTS` | GITB remote send operation does not populate context

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-35 | :ui:`UI` | Dashboard: Overview of running test sessions
  ITB-36 | :ui:`UI` | Dashboard: Display test session status
  ITB-37 | :ui:`UI` | Dashboard: Terminate running test
  ITB-38 | :ui:`UI` | Dashboard: Set max idle time for test cases
  ITB-46 | :ui:`UI` | Customizable legal notices

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-9 | :ui:`UI` | Automatically kill test sessions that are idle
  ITB-39 | :ui:`UI` | Allow GITB UI to run on any port
  ITB-40 | :tdl:`TESTS` | Allow test cases to be defined with no end-user configuration
  ITB-41 | :ui:`UI` | Introduce Commission theme
  ITB-43 | :ui:`UI` | Shortcut test case selection
  ITB-44 | :ui:`UI` | Hide tutorial link
  ITB-45 | :ui:`UI` | Use hashed passwords

Release 1.0.1 - 06/02/2017
--------------------------

The main focus of this release is the addition of user management features and features to manage the test setup (domains, specifications, actors).

**Bug fixes**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-15 | :ui:`UI` | When logging out the page content is not cleared

**New features**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-3 | :ui:`UI` | Remove "Team" link
  ITB-11 | :ui:`UI` | Allow Test Bed administrator to add and edit users
  ITB-12 | :ui:`UI` | Create Test Bed landing page
  ITB-13 | :ui:`UI` | View landing page
  ITB-14 | :ui:`UI` | Add date in log for all log messages (frontend and backend)
  ITB-16 | :ui:`UI` | Manage organisations
  ITB-17 | :tdl:`TESTS` | Add support for remote messaging handlers
  ITB-23 | :ui:`UI` | Implement feature to save changes to domain
  ITB-24 | :ui:`UI` | Implement delete specification feature
  ITB-25 | :ui:`UI` | Implement feature to save specification changes
  ITB-26 | :ui:`UI` | Implement delete actor feature
  ITB-27 | :ui:`UI` | Implement feature to save actor changes
  ITB-28 | :ui:`UI` | Implement delete endpoint feature
  ITB-29 | :ui:`UI` | Implement feature to save endpoint changes
  ITB-31 | :tdl:`TESTS` | Add support for processing services

**Improvements**

.. csv-table::
  :class: changelog-table
  :delim: |

  ITB-5 | :ui:`UI` | Provide labels for user roles
  ITB-6 | :ui:`UI` | View Test Bed users
  ITB-7 | :other:`OTHER` | Parameterise build
  ITB-8 | :ui:`UI` | Allow code/content editors to copy & paste
  ITB-10 | :ui:`UI` | Include licence in source distribution
  ITB-18 | :tdl:`TESTS` | Allow receive TDL step to accept inputs
  ITB-19 | :tdl:`TESTS` | Automatic casting of GITB types
  ITB-20 | :tdl:`TESTS` | Allow remote messaging services to be signalled that they are expected to receive input
  ITB-21 | :ui:`UI` | Change all button colours to white
  ITB-22 | :ui:`UI` | Implement delete domain feature

Release 1.0.0 - 23/11/2016
--------------------------

Initial version of the GITB software where version history started being tracked. This version is effectively the proof of concept produced by the GITB CEN Workshop Agreement
including critical bug fixes on existing features.