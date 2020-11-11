.. _monitor_test_sessions:

Monitor test sessions
=====================

Monitoring all current and past test sessions for your community is possible through the **Session Dashboard** screen.
To access this click on the **ADMIN** link from the screen's header.

.. figure:: ../screenshots/header_admin.PNG
  :align: center

Doing so presents you with a left side menu containing links to administrative functions, of which you need to click 
the **Session Dashboard** link. Note that this screen is also the default selection once you click the 
header's **ADMIN** link.

.. figure:: ../screenshots/admin_session_dashboard.PNG
  :align: center

The screen is split in three sections:

* A set of **search filters**, initially disabled, to help locate specific test sessions (see :ref:`session_dashboard__filters`).
* The list of currently **active sessions** (see :ref:`session_dashboard__active`).
* The list of **completed sessions** (see :ref:`session_dashboard__completed`).

.. _session_dashboard__active:

Active test sessions
--------------------

The currently active sessions are those that are pending completion. These could be sessions actively being used by the test bed's
users or ones that due to technical issues have been blocked.

.. figure:: ../screenshots/admin_session_dashboard_active.PNG
  :align: center

Each session is presented on a separate table row, with the following information displayed per session:

* The **specification** and **actor** (defined as the test case's SUT).
* The relevant **test case**.
* The session **start time**.
* The **organisation** and **system** this session is executed for.

The information displayed in the table is sorted using the sessions' start time in ascending manner (i.e. the oldest sessions are presented first). Sorting
can be adapted by clicking on each column's header to sort by it in ascending manner. The currently active sort column and type are displayed using
an arrow icon next to the relevant column's title.

The set of currently displayed active sessions can be exported in CSV format by clicking the **Export CSV** button in the table header
(see :ref:`monitor_test_sessions__export`). Finally, each session's row offers controls to:

* View its **test step details**, by clicking on the session's row (see :ref:`session_dashboard__steps`).
* Forcibly **terminate**, it by clicking the cross icon on the relevant session's row under the **Operation** column.

.. _session_dashboard__completed:

Completed test sessions
-----------------------

The history of all completed test sessions is presented in the **Completed test sessions** table.

.. figure:: ../screenshots/admin_session_dashboard_completed.PNG
  :align: center

Each session is presented in a separate row that displays the following information:

* The session's relevant **specification** and **actor** (defined as the test case's SUT).
* Its related **test case**.
* Its **start** and **end time**.
* The **organisation** and **system** this session was executed for.
* Its **result**.

In this case the display of sessions uses paging, providing controls to go to the **first**, **previous**, **next** and **last** page (as applicable) and the rows are by
default sorted based on the session end time, in a descending manner (i.e. latest sessions appear first). Sorting can be adapted by clicking on each column's header to 
sort by it in ascending manner. The currently active sort column and type are displayed using an arrow icon next to the relevant column's title.

Viewing a test session's further details and steps is done by clicking on the session's row, similar to the case of the :ref:`active test sessions<session_dashboard__active>`. See :ref:`session_dashboard__steps` for further
information on the details displayed. Moreover, each row provides an **export** button that allows you to download the session's **test case report**.

.. figure:: ../screenshots/test_case_report.png
  :align: center

Certain test results may appear greyed out in case they are to be considered as obsolete. These are tests for which linked information has significantly changed since their
execution (e.g. the related organisation having been deleted). Such obsolete results are maintained by default but can be purged at any time by clicking the 
**Delete obsolete results** button.

Specific test session can also be selectively deleted by means of the **Delete sessions...** button. Clicking this will disable other buttons and display a checkbox
on each row in the table. To delete one or more test sessions you need to check their checkbox and click on the **Confirm** button. Once in selection mode you may also
click on **Cancel** to abort the deletion and restore the normal table display.

.. figure:: ../screenshots/admin_session_dashboard_delete.PNG
  :align: center

Finally, the presented completed sessions can be exported in CSV format by clicking the **Export CSV** button in the table header (see :ref:`monitor_test_sessions__export`). 

.. _session_dashboard__filters:

Apply search filters
--------------------

The session dashboard offers a set of filters that can be used to find test sessions of interest. Filters apply both to the displayed active and completed test sessions.

.. figure:: ../screenshots/admin_session_dashboard_filters_off.PNG
  :align: center

Filtering is by default switched off as indicated by the toggle button that is set as **Disabled**. Clicking this switches it to **Enabled** resulting in the filter controls being displayed
and filtering being switched on.

.. figure:: ../screenshots/admin_session_dashboard_filters_on.PNG
  :align: center

The controls that can be used for filtering are:

* The sessions' **specification**, **actor**, **test suite** and **test case**.
* The relevant **organisation** and **system**.
* The **result**.
* The **start** and **end time**.
* The **session identifier**.
* Specific values for **custom organisation and system properties** (if such properties are defined).

Most filter controls are defined as multiple selection choices. Multiple selected values across these controls are applied as follows:

* Within a specific filter control using "OR" logic (e.g. selecting multiple specifications).
* Across filter controls using "AND" logic (e.g. selecting a specification and a test case).

Note additionally that selecting dependent values serves to limit the filter options that are presented. For example if a given specification
is selected, the test suites and test cases available for filtering will be limited to that specification to already exclude impossible combinations.

The start and end time controls are date pickers that allow selection of ranges of dates for both the start and end of the sessions. The session 
identifier on the other hand is a text field that allows the lookup of a specific session. Finally, regarding organisation and system properties, these each present
an **Add** button that, once clicked, will display a list of the available properties, a field or selection list to provide the filter value, and 
controls to confirm or cancel the filter. Multiple property filters can be added with the following semantics:

* Values provided for the same property are applied using "OR" logic.
* Values provided for different properties are applied using "AND" logic.

The presented sessions are automatically updated whenever your filter options are modified, or when the filters are removed altogether by clicking the 
**Enabled** toggle button. The filter panel may also be **collapsed and expanded** by clicking the panel's title while maintaining the defined filters. 
The **Refresh** button is used to refresh the display of results based on the current filtering. Finally, note that applying no filtering is the default
case when you first visit this screen.

.. _session_dashboard__steps:

View a test session's steps
---------------------------

Each row from the lists of presented test sessions may also be clicked to view its detailed steps. Doing so expands the row to present
a diagram that is identical to the one presented during the live test execution (see :ref:`execute_tests__step3`).

.. figure:: ../screenshots/test_history_test_result.PNG
  :align: center

Once one or more test session rows have been expanded the relevant table's header will also include a **Collapse all** button that can be clicked
to collapse all expanded rows. 

The diagram's header includes additional information on the test session, and specifically its **test suite**, **test case** and **session identifier**.
In terms of provided controls within the diagram, a document icon is presented on steps that produced a report that can be clicked to review its details (see :ref:`view_your_test_history__test_steps__details`).

.. _session_dashboard__steps_details:

View test step details
~~~~~~~~~~~~~~~~~~~~~~

Clicking on a step's document icon triggers a popup that shows the step's different information elements that can be viewed inline or opened in
a separate popup editor. In the case of validation steps, this is extended to also provide the detailed validation results as illustrated in the
following example for a validation failure.

.. figure:: ../screenshots/test_execution_execute_step_failure.PNG
  :align: center
  :scale: 50%

In the test step result popup you are presented with the **result** and completion **time** as the step summary. In the sections that follow you 
can inspect the output information from the step, presented either inline (for short values), as a file you can download, or through a further popup editor. In the latter case
this is triggered by clicking the **Open in editor** link. Clicking to open this, displays its content which, in the case of validation steps, 
is also highlighted for the recorded validation messages.

.. figure:: ../screenshots/test_execution_execute_step_failure_code.PNG
  :align: center
  :scale: 50%

The editor popup allows you to copy a specific part of the content or, by means of the **Copy to clipboard** button, copy its entire contents. The
**Close** button closes this popup and returns you to the test step result display. Note that clicking on a specific error will 
open the validated content and automatically focus on the selected error.

An alternative to viewing the content in this way is to click the **Download as file** link which will download the content as a file. The test bed will determine
the most appropriate type for the content and name the downloaded file accordingly (if possible).

.. note::
    **Viewing binary output:** The **Download as file** option is the best way to inspect information that is binary (e.g. an image). The test bed will nonetheless
    always present the **Open in editor** option but given that the content is then assumed to be text, this will likely not be useful.

.. _session_dashboard__steps_report:

Export test step report
~~~~~~~~~~~~~~~~~~~~~~~

The results of the test step can also be exported as a test step report (in PDF format). This is made available through the **Export** button that triggers the 
generation and download of the step report. 

.. figure:: ../screenshots/test_execution_test_step_report.PNG
  :align: center

This report includes:

* The **test step result overview**, including the **result**, **date** and, in case of a validation step, the total number of validation findings
  (classified as **errors**, **warnings** and **messages**).
* The **report details**, included in case of a validation step to list the details of the validation report's findings.
* The step's **context** information, to list its output values and returned content.

.. note::
    **Test step report size:** When exporting a test step report the context information is always included to provide the full information pertinent
    to its result. In case the context information returned by the step includes large file contents, these would be included resulting in a 
    potentially very large export.

.. _monitor_test_sessions__export:

Export all test sessions
------------------------

Both lists of active and completed test sessions can be exported in CSV format. This is done by clicking the **Export CSV** button
from the respective table's header.

.. figure:: ../screenshots/admin_session_dashboard_active.PNG
  :align: center

Doing so will generate a CSV file taking into account the currently applied filtering settings. If you have defined custom 
properties for the community applicable to organisations or systems (see :ref:`community__properties`) these may also be 
included in these CSV exports. To include a custom property:

* It must be a **Simple** text value (i.e. not a hidden value or a file).
* It must be configured as **Included in exports**.

All such properties are included in the export as columns following the "Organisation" or "System", depending on whether
they are organisation of system level properties. Their columns are named using a prefix of "Organisation" or "System" followed
by the property's key value included in parentheses.

.. figure:: ../screenshots/admin_session_dashboard_export_CSV.PNG
  :align: center