.. _monitor_test_sessions:

Monitor test sessions
=====================

Monitoring all current and past test sessions for the test bed is possible through the **Session dashboard** screen, accessible
my clicking the corresponding link from the menu.

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

Tests are presented in a paged table sorted based on their **start time** in a ascending order (i.e. the oldest sessions are presented first). Custom sorting
can be applied by clicking the title of each column; clicking a column header for the first time will sort by it in ascending manner and clicking it again
will switch to descending. The active sort column and type are indicated using an arrow next to the relevant column header. The table offers
controls to go to **specific pages** as well as the **first**, **previous**, **next** and **last** ones (as applicable), while showing in the bottom right
corner the total and currently displayed test counts.

Each session is presented on a separate table row, with the following information displayed per session:

* The **specification** and **actor** (defined as the test case's SUT).
* The relevant **test case**.
* The session **start time**.
* The **organisation** and **system** this session is executed for.

The set of currently displayed active sessions can be exported in CSV format by clicking the **Export CSV** button in the table header
(see :ref:`monitor_test_sessions__export`). In addition, the **Terminate all** button can be used to terminate, upon confirmation, all currently active test 
sessions in the community. Clicking on the header itself, allows you to **collapse** or **expand** its display. In case there are test sessions that are
**pending administrator input** you can also check the relevant toggle to filter them, before proceeding to :ref:`make the necessary interactions<session_dashboard__steps>`.

With respect to the listing of active sessions, each session's row offers controls to:

* View its **details**, by clicking on the session's row (see :ref:`session_dashboard__steps`).
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

Tests are presented in a paged table sorted based on their **end time** in a descending order (i.e. showing the latest tests at the top). Custom sorting
can be applied by clicking the title of each column; clicking a column header for the first time will sort by it in ascending manner and clicking it again
will switch to descending. The active sort column and type are indicated using an arrow next to the relevant column header. The table offers
controls to go to **specific pages** as well as the **first**, **previous**, **next** and **last** ones (as applicable), while showing in the bottom right
corner the total and currently displayed test counts.

Viewing a test session's further details and steps is done by clicking on the session's row, similar to the case of the :ref:`active test sessions<session_dashboard__active>`. See :ref:`session_dashboard__steps` for further
information on the details displayed. Moreover, each row provides two **export** buttons that allows you to download the session's **test case report** in XML and PDF format.

The following is an example of such a report in **XML format**, the XML content being defined by the `GITB Test Reporting Language (GITB TRL) <https://www.itb.ec.europa.eu/docs/tdl/latest/introduction/index.html#specification-links>`_:

.. literalinclude:: ../testHistory/resources/test_case_report.xml
   :language: xml

.. note::
  You can also define **custom formats** for any kind of XML report. This is managed as part of the community's :ref:`report settings<community__report_settings>`.

Selecting the second export option produces the report in **PDF format**:

.. figure:: ../screenshots/test_case_report.png
  :align: center

Certain test results may appear greyed out in case they are to be considered as obsolete. These are tests for which linked information has significantly changed since their
execution (e.g. the related organisation having been deleted). Such obsolete results are maintained by default but can be purged at any time by clicking the 
**Delete obsolete results** button.

Specific test sessions can also be selectively deleted by means of the **Delete sessions...** button. Clicking this will disable other buttons and display a checkbox
on each row in the table. To delete one or more test sessions you need to check their checkbox and click on the **Confirm** button. Once in selection mode you may also
click on **Cancel** to abort the deletion and restore the normal table display.

.. figure:: ../screenshots/admin_session_dashboard_delete.PNG
  :align: center

Finally, the presented completed sessions can be exported in CSV format by clicking the **Export CSV** button in the table header (see :ref:`monitor_test_sessions__export`).

.. note::
    **Deleting obsolete tests from the session dashboard:** As test bed administrator if you select to delete the obsolete tests you will be doing so for the entire test bed.
    If you want to target a specific community you could login as a community administrator to do the purge.

.. _session_dashboard__filters:

Apply search filters
--------------------

The session dashboard offers a set of filters that can be used to find test sessions of interest. Filters apply both to the displayed active and completed test sessions.

.. figure:: ../screenshots/admin_session_dashboard_filters_off.PNG
  :align: center

Filters are initially not applied and displayed as a collapsed panel. To apply filters, click the panel to expand it.

.. figure:: ../screenshots/admin_session_dashboard_filters_on_ta.PNG
  :align: center

The controls that can be used for filtering are:

* The sessions' **domain** (if multiple), **specification group**, **specification**, **actor**, **test suite** and **test case**.
* The relevant **community**, **organisation** and **system**.
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
identifier on the other hand is a text field that allows the lookup of a specific session. Finally, regarding organisation and system properties, these
can be selected once a specific community has been selected. Once enabled, each property type presents
an **Add** button that, once clicked, will display a list of the available properties, a field or selection list to provide the filter value, and
controls to confirm or cancel the filter. Multiple property filters can be added with the following semantics:

* Values provided for the same property are applied using "OR" logic.
* Values provided for different properties are applied using "AND" logic.

The presented sessions are automatically updated whenever your filter options are modified, or when the filters are removed altogether by clicking the 
**Clear filters**. The filter panel may also be **collapsed and expanded** by clicking the panel's title while maintaining the defined filters.
The **Refresh** button is used to refresh the display of results based on the current filtering.

.. _session_dashboard__steps:

View test session details
-------------------------

Each row from the lists of presented test sessions may also be clicked to view its details. Doing so expands the row to present
a diagram that is identical to the one presented during the live test execution (see :ref:`execute_tests_interactive`).

.. figure:: ../screenshots/admin_session_dashboard_test_result.png
  :align: center

Once one or more test session rows have been expanded the relevant table's header will also include a **Collapse all** button that can be clicked
to collapse all expanded rows.

The diagram's header includes additional information on the test session, and specifically its **test suite**, **test case** and **session identifier**, the latter 
of which can be clicked to **copy it to the clipboard**. Furthermore, clicking elsewhere on the header of the diagram display will
collapse (or expand) the diagram, which could be useful if you want to quickly view other information on the screen.

Above the diagram display you are presented with additional buttons linked to the test session. The purpose of these are as follows:

* **View log** opens up the test session log for display, displaying its contents similarly to when the :ref:`session is executing<execute_tests__step3__view_log>`.
* **Copy link** copies a shareable link for the current session that can be used to directly navigate to its detailed display. You also have an option
  termed **Copy link for organisation** that will generate a shareable link to the test session in the relevant organisation's session history, for use by the organisation's users.
* **View statement** takes you to the relevant :ref:`conformance statement's details <manage_your_conformance_statements__view_a_conformance_statements_details>`.
* **View system** takes you to the relevant :ref:`system <community__manage_organisation__systems_edit>`, :ref:`organisation <community__manage_organisation>` or :ref:`community<community_testbed_communities__manage>` details.
* **View specification** takes you to the relevant :ref:`domain <domains__domain_details>`, :ref:`specification <domains__specification>` or :ref:`actor <domains__actor>`.
* **View test case** takes you to the relevant :ref:`test case <domains__test_case__details>` or :ref:`test suite <domains__test_suite_details>`.

In the case of an active test session you are also provided with a button to **refresh** its display and **view pending interactions**
(in case interactions are pending).

.. figure:: ../screenshots/admin_session_dashboard_active_session_controls.png
  :align: center

**Refreshing** the display allows you to track the progress of a specific test session without needing to make a full refresh of the displayed results.
Clicking this button will refresh only the relevant test session and reflect changes on its diagram. Note that it is possible that upon refresh, the
test session has in the meanwhile completed, in which case a relevant information popup will inform you accordingly. In case of a **pending interaction**,
clicking to view it will present it so that it can be completed and allow the session to proceed. This allows you to have test sessions execute in the background
while checking through this screen on whether they need user interactions.

Clicking on the session row will once again collapse the display. Note that once one or more session
details are expanded the table's header will display a **Collapse all** button that can be clicked to collapse all details.

.. _session_dashboard__steps_details:

View test step details
~~~~~~~~~~~~~~~~~~~~~~

Clicking on a step's document icon triggers a popup that shows the step's different information elements that can be viewed inline or opened in
a separate popup editor. In the case of validation steps, this is extended to also provide the detailed validation results as illustrated in the
following example for a validation failure.

.. figure:: ../screenshots/test_execution_execute_step_failure.PNG
  :align: center
  :scale: 70%

In the test step result popup you are presented with the **result** and completion **time** as the step summary. In the sections that follow you 
can inspect the output information from the step, presented either inline (for short values), as a file you can download, or through a further popup editor. In the latter case
this is triggered by clicking the **View** button. Clicking to open this, displays its content which, in the case of validation steps, 
is also highlighted for the recorded validation messages.

.. figure:: ../screenshots/test_execution_execute_step_failure_code.PNG
  :align: center
  :scale: 70%

The editor popup allows you to copy a specific part of the content or, by means of the **Copy to clipboard** button, copy its entire contents. The
**Close** button closes this popup and returns you to the test step result display. Note that clicking on a specific error will 
open the validated content and automatically focus on the selected error.

An alternative to viewing the content in this way is to click the **Download** button which will download the content as a file. The test bed will determine
the most appropriate type for the content and name the downloaded file accordingly (if possible). In the case of simple texts that are presented inline, you
are not presented with the download and view buttons, but rather with a **Copy to clipboard** button that allows you to copy the presented value.

.. figure:: ../screenshots/test_execution_execute_step_clipboard.PNG
  :align: center

.. note::
  **Viewing binary output:** Images are presented as a preview when selecting to view them. For other binary content (e.g. a PDF document), the best
  way to inspect it is to download it. Opening such content in the in-place code editor will still be possible, but this will most likely not be useful.

.. _session_dashboard__steps_report:

Export test step report
~~~~~~~~~~~~~~~~~~~~~~~

The results of the test step can also be exported as a test step report in PDF and XML formats. This is made available through the **Download report** button
for PDF, and its **Download report as XML** additional option for XML, that will trigger the generation and download of the report in the requested format.
The following example represents such a report in PDF.

.. figure:: ../screenshots/test_execution_test_step_report.PNG
  :align: center

This PDF report includes:

* The **test step result overview**, including the **result**, **date** and, in case of a validation step, the total number of validation findings
  (classified as **errors**, **warnings** and **messages**).
* The **report details**, included in case of a validation step to list the details of the validation report's findings.

When selecting to **download the report as XML**, you receive similar information but represented in XML for simpler machine-processing. 
The structure of the report is defined by the `GITB Test Reporting Language (GITB TRL) <https://www.itb.ec.europa.eu/docs/tdl/latest/introduction/index.html#specification-links>`_, 
with the following being a simple sample:

.. literalinclude:: ../executeTests/resources/test_step_report.xml
   :language: xml

.. note::
  You can also define **custom formats** for any kind of XML report. This is managed as part of the community's :ref:`report settings<community__report_settings>`.

.. _monitor_test_sessions__export:

Export all test sessions
------------------------

Both lists of active and completed test sessions can be exported in CSV format. This is done by clicking the **Export CSV** button
from the respective table's header.

.. figure:: ../screenshots/admin_session_dashboard_active.PNG
  :align: center

Doing so will generate a CSV file taking into account the currently applied filtering settings. Note that such exports can also
include custom properties for communities applicable to organisations or systems (see :ref:`community__properties`) if these
have been defined by you or community administrators. To include such custom properties:

* A **single community** must be selected from the filtering criteria (otherwise custom properties are skipped).
* Properties must be **Simple** text values (i.e. not a hidden value or a file).
* Properties must be configured as **Included in exports**.

All such properties are included in the export as columns following the "Organisation" or "System", depending on whether
they are organisation of system level properties. Their columns are named using a prefix of "Organisation" or "System" followed
by the property's key value included in parentheses.

.. figure:: ../screenshots/admin_session_dashboard_export_CSV.PNG
  :align: center

.. note::
  **Exporting custom properties from multiple communities:** It is not possible to produce a single export for multiple communities
  including custom properties. The reason for this is that the resulting CSV file needs to have a single structure in terms of
  columns. The best workaround is to make individual exports per community selecting one at a time from the filtering criteria.
